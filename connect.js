const sequelize = require('./db')

async function connect() {
  try {
    await sequelize.authenticate()
  } catch (e) {
    console.log("Connect database error", e.message)
  }
}

module.exports = connect