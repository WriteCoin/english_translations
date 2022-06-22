const connect = require("./connect");
const add = require("./history_add/add1");

async function start() {
  await connect()
  await add()
}

start()