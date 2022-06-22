const sequelize = require('./db')
const models = require('./models')

async function create() {
  try {
    await sequelize.sync({ force: true })
  } catch (e) {
    console.log("Create database error", e.message)
  }
}

module.exports = create