const dataAdd = require("../data_add")

async function add() {
  const dataWords = [
    ["consecutive", "последовательный"],
    //["cold", "холод"],
  ]
  for (data of dataWords) {
    dataAdd(data[0], data[1])
  }
}

module.exports = add
