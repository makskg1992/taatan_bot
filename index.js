// Импорт Telegraf и Markup
const {
  Telegraf,
  Markup
} = require('telegraf')
// Импорт dotenv для защиты API токена
require('dotenv').config()
// Импорт нашего модуля с константами
const my_const = require('./const')
// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)

// Обработка команды /start
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
// Обработка команды /help
bot.help((ctx) => ctx.reply(my_const.commands))
// Обработка команды /course
bot.command('course', async (ctx) => {
  try {
    await ctx.replyWithHTML('<b>Курсы</b>', Markup.inlineKeyboard(
      [
       
         [Markup.button.callback('Компьютерные услуги', 'btn_1')],
      [Markup.button.callback('Инструменты веб-разработчика', 'btn_2')],
      [Markup.button.callback('Основы вёрстки HTML и CSS', 'btn_3')],
      [Markup.button.callback('Frontend разработка JS и jQuery', 'btn_category4')],
      [Markup.button.callback('CSS и JS Фреймворки', 'btn_category5')],
      [Markup.button.callback('Вёрстка сайта с нуля', 'btn_category6')],
      [Markup.button.callback('Backend разработка PHP и MySQL', 'btn_category7')],
      [Markup.button.callback('Лайфхаки', 'btn_category8')],
      [Markup.button.callback('456', 'btn_category9')]
        
        
      ]
      
     
     

      
      
    ))
  } catch (e) {
    console.error(e)
  }
})
/**
 * Функция для отправки сообщения ботом
 * @param {String} id_btn Идентификатор кнопки для обработки
 * @param {String} src_img Путь к изображению, или false чтобы отправить только текст
 * @param {String} text Текстовое сообщение для отправки
 * @param {Boolean} preview Блокировать превью у ссылок или нет, true - блокировать, false - нет
 */
function addActionBot(id_btn, src_img, text, preview) {
  bot.action(id_btn, async (ctx) => {
    try {
      await ctx.answerCbQuery()
      if (src_img !== false) {
        await ctx.replyWithPhoto({
          source: src_img
        })
      }
      await ctx.replyWithHTML(text, {
        disable_web_page_preview: preview
      })
    } catch (e) {
      console.error(e)
    }
  })
}
// Обработчик кнопок с помощью функции
addActionBot('btn_1', './img/1.jpg', my_const.text1, true)
addActionBot('btn_2', './img/2.jpg', my_const.text2, true)
addActionBot('btn_3', false, my_const.text3, false)
addActionBot('btn_4', false, my_const.text4, true)
addActionBot('btn_5', false, my_const.text4, true)
addActionBot('btn_category1', false, my_const.text4, true)
// Запустить бота
bot.launch()

// Включить плавную остановку
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
