require('dotenv').config();

const { getNBURates, getPBRates } = require('./services')
const {
    MAIN_MENU_CMD_TEXT,
    NAVIGATION_CMD_TEXT,
    SUBSCRIBE_MENU_CMD_TEXT
} = require("./consts");
const {
    start,
    subscribe,
    subscribeToNBU,
    subscribeToPBCash,
    subscribeToPBNonCash,
    back
} = require("./controllers/commands");

const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

const setupBot = () => {
    bot.use((ctx, next) => next());

    bot.start(start);
    bot.hears(MAIN_MENU_CMD_TEXT.NBU_CURRENCY, ctx => getNBURates(ctx));
    bot.hears(MAIN_MENU_CMD_TEXT.PB_CASH_CURRENCY, ctx => getPBRates(ctx, 'cash'));
    bot.hears(MAIN_MENU_CMD_TEXT.PB_NON_CASH_CURRENCY, ctx => getPBRates(ctx, 'non-cash'));
    bot.hears(MAIN_MENU_CMD_TEXT.SUBSCRIBE, subscribe);

    bot.hears(SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_NBU_CURRENCY, subscribeToNBU);
    bot.hears(SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_PB_CASH_CURRENCY, subscribeToPBCash);
    bot.hears(SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_PB_NON_CASH_CURRENCY, subscribeToPBNonCash);

    bot.hears(NAVIGATION_CMD_TEXT.BACK_BUTTON, back);

    return bot;
}

module.exports = {
    setupBot
}
