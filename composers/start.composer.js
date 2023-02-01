const { Composer, Markup } = require('telegraf');
const composer = new Composer();
const { getNBURates, getPBRates } = require('../services')
const schedule = require('node-schedule');

composer.start(ctx => {
    ctx.reply('Welcome', {
        reply_markup: {
            keyboard: [
                [{"text": "Курс НБУ"}],
                [{"text": "Курс ПБ наличный"}, {"text": "Курс ПБ безнал"}],
                [{"text": "Подписаться на рассылку"}],
            ],
            resize_keyboard: true,
            // one_time_keyboard: true,
        }
    })

    // const rule = new schedule.RecurrenceRule();
    // rule.minute = new schedule.Range(0, 59, 3);

    // schedule.scheduleJob(rule, function(){
    //     console.log(rule);
    //
    //     getPBRates(ctx, 'cash')
    // });
})

composer.hears('Курс НБУ', (ctx) => getNBURates(ctx));
composer.hears('Курс ПБ наличный', (ctx) => getPBRates(ctx, 'cash'));
composer.hears('Курс ПБ безнал', (ctx) => getPBRates(ctx, 'non-cash'));

module.exports = composer;
