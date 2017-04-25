
/**
 * Register helper functions for the template './db2.to.jpa-orm.hbs'
 * @param {*} hbs handlebars instance
 */
function registerHelpers(hbs){
    
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
};

// const OUTPUT_TYPE = {
//     SINGLE_FILE: 0,
//     MULTIPLE_FILES: 1
// };

module.exports = {
    output:{
        type: 'MULTIPLE_FILES', 
        fileNameTemplate: "./{{lowerCamelCase schema}}/{{upperCamelCase name}}.java"
    },
    registerHelpers: registerHelpers, 

};