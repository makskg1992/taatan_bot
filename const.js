// Команды бота
const commands = `
/start - Перезапустить бота
/help - Помощь
/course - Курсы
`
// Текстовые константы
const text1 = `
1 <b>Жирный Текст</b> для проверки обработчика и <a href="https://youtube.com/">ссылка без превью</a>
`
const text2 = `
2 <i>Курсивный Текст</i> для проверки обработчика, <s>Зачёркнутый текст</s> и <code>Моноширинный текст</code>
`
const text3 = `
3 <u>Подчёркнутый Текст</u> для проверки обработчика и <a href="https://youtube.com/">ссылка с превью</a>
`
const text4 = `
3 Подчёркнутый Текст для проверки обработчика и <br><b><a href="tel:+996557212179">Номер телефона</a></b>
`
// Экспорт констант
module.exports.commands = commands
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3 = text3
module.exports.text4 = text4
