const connect = require("./connect");
const create = require("./create");

async function start() {
  await connect()
  await create()
}

start()