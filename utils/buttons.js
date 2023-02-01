const {
    MAIN_MENU_CMD_TEXT,
    SUBSCRIBE_MENU_CMD_TEXT,
    UNSUBSCRIBE_MENU_CMD_TEXT,
    NAVIGATION_CMD_TEXT
} = require("../consts");
const { Markup } = require('telegraf');

const mainMenu = Markup.keyboard([
    [MAIN_MENU_CMD_TEXT.NBU_CURRENCY],
    [MAIN_MENU_CMD_TEXT.PB_CASH_CURRENCY, MAIN_MENU_CMD_TEXT.PB_NON_CASH_CURRENCY],
    [MAIN_MENU_CMD_TEXT.SUBSCRIBE],
]).resize()

const subscribeMenu = Markup.keyboard([
    [SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_NBU_CURRENCY],
    [SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_PB_CASH_CURRENCY, SUBSCRIBE_MENU_CMD_TEXT.SUBSCRIBE_PB_NON_CASH_CURRENCY],
    [NAVIGATION_CMD_TEXT.BACK_BUTTON],
]).resize()

const unsubscribeMenu = Markup.keyboard([
    [UNSUBSCRIBE_MENU_CMD_TEXT.UNSUBSCRIBE],
    [NAVIGATION_CMD_TEXT.BACK_BUTTON],
]).resize()

module.exports = {
    mainMenu,
    subscribeMenu,
    unsubscribeMenu
}
