const tape = require("tape");
const runDbBuild = require("../src/database/db_build");
const reserveCRUD = require("../src/queries/reserveCRUD");
const sittersCRUD = require("../src/queries/sittersCRUD");


tape("logic tape is working", t => {
    t.ok(true, "test is working");
    t.end();
  });