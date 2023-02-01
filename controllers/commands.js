const schedule = require('node-schedule');
const { mainMenu, subscribeMenu, unsubscribeMenu } = require("../utils/buttons");
const { getNBURates, getPBRates } = require('../services')
const emoji = require('../emoji');

const start = ctx => ctx.reply('Hi', {
    ...mainMenu
});

const subscribe = ctx => ctx.reply(`Выберите на какую рассылку подписаться ${emoji["POINTER_DOWN"]}`, {
    ...subscribeMenu
});

const subscribeToCurrency = (ctx, callback, type) => {
    const scheduleTime = [
        { hour: 8, minute: 0 },
        { hour: 20, minute: 0 },
    ];

    const currencyType = () => {
        switch (type) {
            case 'cash':
                return 'Приват наличный'
            case 'non-cash':
                return 'Приват безнал'
            default:
                return 'НБУ'
        }
    };


    scheduleTime.forEach(time => schedule.scheduleJob(time, () => callback(ctx, type)));
    ctx.reply(`Успешная подписка на курс ${currencyType()}`, {
        ...unsubscribeMenu
    });
}

const subscribeToNBU = ctx => subscribeToCurrency(ctx, getNBURates, null);
const subscribeToPBCash = ctx => subscribeToCurrency(ctx, getPBRates, 'cash');
const subscribeToPBNonCash = ctx => subscribeToCurrency(ctx, getPBRates, 'non-cash');

const back = ctx => ctx.reply(`Выберите раздел`, {
    ...mainMenu
});

module.exports = {
    start,
    subscribe,
    subscribeToNBU,
    subscribeToPBCash,
    subscribeToPBNonCash,
    back
}
