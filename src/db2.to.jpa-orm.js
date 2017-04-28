var fs = require('fs');
var path = require('path');
var hbs = require('handlebars');
var {from} = require('linq');


hbs.registerHelper('lowerCamelCase', function (str) {
    var str1 =  (str || '').toString();
    var search = /([^a-zA-Z0-9]+)(.)/g;
    return str1.toLowerCase().replace(new RegExp(search), 
    function(match, cap1, cap2, index, input){
        return cap2.toUpperCase();
    });
});

hbs.registerHelper('upperCamelCase', function (str) {
    var str1 =  (str || '').toString();
    var search = /([^a-zA-Z0-9]+)(.)/g;
    str1 = str1.toLowerCase().replace(new RegExp(search), 
        function(match, cap1, cap2, index, input){
            return cap2.toUpperCase();
        }
    );

    if(str1.length) str1 = str1.substring(0, 1).toUpperCase() + str1.substring(1);

    return str1;

});

hbs.registerHelper('toJavaType', function (str) {
    var str1 =  (str || '').toString().toUpperCase();
    
    switch (str1) {
        case 'CHAR'     : 
        case 'CHARACTER': 
        case 'VARCHAR'  : 
            return 'String';
        case 'SMALLINT':
            return 'Short'
        case 'INTEGER':
        case 'INT':
            return 'Integer'
        case 'BIGINT':
            return 'Long'
        case 'DECIMAL':
        case 'NUMERIC':
        case 'REAL':
            return 'BigDecimal';
        case 'DOUBLE':
            return 'Double';

        case 'DATE':
        case 'TIME':
        case 'TIMESTAMP':
            return 'Date';
        default: 
            return 'Object';
    }
});

var plainTmpl = fs.readFileSync("./src/db2.to.jpa-orm.hbs").toString();
var plaintFileNameTmpl = "./{{lowerCamelCase schema}}/{{upperCamelCase name}}.java";


var hbsTmpl = hbs.compile(plainTmpl);
var hbsFileNameTmpl = hbs.compile(plaintFileNameTmpl);


function exec(tables){

    from(tables).selectMany(function(t){return t.columns;}).forEach(function(c){
        var _type = (c.type||"").toUpperCase().trim();
        c.isTimestamp = _type == 'TIMESTAMP';
        c.isDate = _type=='DATE';
        c.isTime = _type=='TIME';

    });

    for (var t = 0; t < tables.length; t++) {
        var table = tables[t];
        var out = hbsTmpl(table);
        var outFileName = hbsFileNameTmpl(table);
        try {
            fs.mkdirSync(path.dirname(outFileName));
        } catch (error) {}

        try {
            fs.writeFileSync(outFileName, out);
            console.log('writed contents on: ' + outFileName);
        } catch (error) {
            console.error(`error on write '${outFileName}'`);
            console.error(error);
        }
        

    }
}

module.exports = exec;