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
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const DataType = sequelize.define('data_type', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const ProjectAccountPropertyType = sequelize.define('project_account_property_type', {})

const ProjectProperty = sequelize.define('project_property', {
  value: {type: DataTypes.STRING }
})

const ProjectPropertyType = sequelize.define('project_property_type', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const Log = sequelize.define('log', {
  actionTime: {type: DataTypes.DATE, allowNull: false }
})

const ActionType = sequelize.define('action_type', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const LogProperty = sequelize.define('log_property', {
  value: {type: DataTypes.STRING }
})

const LogPropertyType = sequelize.define('log_property_type', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const ActionTypeLogPropertyType = sequelize.define('action_type_log_property_type', {})

const ActionStatus = sequelize.define('aciton_status', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const ProjectType = sequelize.define('project_type', {
  name: {type: DataTypes.STRING, unique: true, allowNull: false }
})

const ProjectTypeProject = sequelize.define('project_type_project', {})

const ActionTypeProjectType = sequelize.define('action_type_project_type', {})

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

Log.hasOne(Account)
Log.belongsTo(Account)

Log.hasOne(Project)
Log.belongsTo(Project)

Log.hasOne(ActionType)
Log.belongsTo(ActionType)

Log.hasOne(ActionStatus)
Log.belongsTo(ActionStatus)

Log.hasMany(LogProperty)
LogProperty.belongsTo(Log)

LogProperty.hasOne(LogPropertyType)
LogProperty.belongsTo(LogPropertyType)

LogPropertyType.hasOne(DataType)
LogPropertyType.belongsTo(DataType)

LogPropertyType.belongsToMany(ActionType, {through: ActionTypeLogPropertyType })
ActionType.belongsToMany(LogPropertyType, {through: ActionTypeLogPropertyType })

Project.belongsToMany(ProjectType, {through: ProjectTypeProject })
ProjectType.belongsToMany(Project, {through: ProjectTypeProject })

ProjectType.belongsToMany(ActionType, {through: ActionTypeProjectType })
ActionType.belongsToMany(ProjectType, {through: ActionTypeProjectType })

module.exports = {
  Project,
  Account,
  ProjectAccount,
  AccountProperty,
  AccountPropertyType,
  DataType,
  ProjectAccountPropertyType,
  ProjectProperty,
  ProjectPropertyType,
  Log,
  ActionType,
  ActionStatus,
  LogProperty,
  LogPropertyType,
  ActionTypeLogPropertyType,
  ProjectType,
  ProjectTypeProject,
  ActionTypeProjectType
}