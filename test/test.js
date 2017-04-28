var assert = require('assert');
var fs = require('fs');
var path = require('path');

var {DB2} = require('cds-parsers-amd');
var javaTransformer = require('../src/db2.to.jpa-orm');

var db2Parser = new DB2();

var db2Script = fs.readFileSync("./test/db2.input.script.sql").toString();
var tables = db2Parser.parseTable(db2Script);

it("should create file './GBA_COM.TbComContratoAadesao.java'", function(){

    javaTransformer(tables);

    assert(fs.existsSync('./GBA_COM.TbComContratoAadesao.java'));

})
