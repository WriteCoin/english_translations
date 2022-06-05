const sequelize = require('./db')
const models = require('./models')

module.exports = {
  sequelize,
  ...models
}