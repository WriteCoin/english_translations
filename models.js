const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const Project = sequelize.define('project', {
  name: {type: DataTypes.STRING, unique: true },
  url: {type: DataTypes.STRING, unique: true }
})

const Account = sequelize.define('account', {
  name: {type: DataTypes.STRING },
  isPrimary: {type: DataTypes.BOOLEAN }
})

const ProjectAccount = sequelize.define('project_account', {})

const AccountProperty = sequelize.define('account_property', {
  value: {type: DataTypes.STRING }
})

const AccountPropertyType = sequelize.define('account_property_type', {
  name: {type: DataTypes.STRING, unique: true }
})

const DataType = sequelize.define('data_type', {
  name: {type: DataTypes.STRING, unique: true }
})

const ProjectAccountPropertyType = sequelize.define('project_account_property_type', {})

const ProjectProperty = sequelize.define('project_property', {
  value: {type: DataTypes.STRING }
})

const ProjectPropertyType = sequelize.define('project_property_type', {
  name: {type: DataTypes.STRING, unique: true }
})

// Project.hasMany(ProjectAccount)
// ProjectAccount.belongsTo(Project)

// Account.hasMany(ProjectAccount)
// ProjectAccount.belongsTo(Account)

Account.hasMany(AccountProperty)
AccountProperty.belongsTo(Account)

AccountProperty.hasOne(AccountPropertyType)
AccountProperty.belongsTo(AccountPropertyType)

AccountPropertyType.hasOne(DataType)
AccountPropertyType.belongsTo(DataType)

// AccountPropertyType.hasMany(ProjectAccountPropertyType)
// ProjectAccountPropertyType.belongsTo(AccountPropertyType)

// Project.hasMany(ProjectAccountPropertyType)
// ProjectAccountPropertyType.belongsTo(Project)

Account.belongsToMany(Project, {through: ProjectAccount })
Project.belongsToMany(Account, {through: ProjectAccount})

AccountPropertyType.belongsToMany(Project, {through: ProjectAccountPropertyType })
Project.belongsToMany(AccountPropertyType, {through: ProjectAccountPropertyType })

module.exports = {
  Project,
  Account,
  ProjectAccount,
  AccountProperty,
  AccountPropertyType,
  DataType,
  ProjectAccountPropertyType,
  ProjectProperty,
  ProjectPropertyType
}