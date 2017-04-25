var path = require('path');
var fs = require('fs');
var hbs = require('handlebars');
var {DB2} = require('cds-parsers-amd');

var db2Parser = new DB2();

var db2Script = fs.readFileSync("./db2.input.script.sql").toString();
var tables = db2Parser.parseTable(db2Script);



var hbsTmpl = null;
var hbsFileNameTmpl = null;
var hbsTmplConfig = require('./db2.to.jpa-orm');
var plainTmpl = fs.readFileSync("./db2.to.jpa-orm.hbs").toString();
var plainFileNameTmpl = hbsTmplConfig.output.fileNameTemplate || 'out.txt';


hbsTmplConfig.registerHelpers(hbs);
hbsTmpl = hbs.compile(plainTmpl);
hbsFileNameTmpl = hbs.compile(plainFileNameTmpl);


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

process.exit();