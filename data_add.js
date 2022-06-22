const { Word, TranslationWord, Translation } = require("./models")

async function dataAdd(word, translationWord) {
  const wordModel = (await Word.findOrCreate({ where: { word: word } }))[0]
  const translationWordModel = (
    await TranslationWord.findOrCreate({
      where: { word: translationWord },
    })
  )[0]
  const translations = await Translation.findOrCreate({
    where: {
      word_id: wordModel.id,
      translation_word_id: translationWordModel.id,
    },
  })
  return {
    word: wordModel,
    translationWord: translationWordModel,
    translations,
  }
}

module.exports = dataAdd
