const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

test("runtime contract export is stable", () => {
  const contractRuntime = require("../index.js");
  assert.deepEqual(contractRuntime, {});
});

test("graphql schema contains expected root types", () => {
  const schemaPath = path.join(__dirname, "..", "schema", "shortbox.graphql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  assert.match(schema, /type Query/);
  assert.match(schema, /type Mutation/);
  assert.match(schema, /type Publisher/);
  assert.match(schema, /type Issue/);
});
