const sequelize = require("./db")
const { DataTypes } = require("sequelize")

const nameColumn = () => {
  return { type: DataTypes.STRING, unique: true }
}

const Word = sequelize.define("word", {
  word: nameColumn(),
})

const TranslationWord = sequelize.define("translation_word", {
  word: nameColumn(),
})

const Translation = sequelize.define("translation", {})

Translation.belongsTo(Word, { foreignKey: "word_id" })
Translation.belongsTo(TranslationWord, { foreignKey: "translation_word_id" })

module.exports = {
  Word,
  TranslationWord,
  Translation,
}
