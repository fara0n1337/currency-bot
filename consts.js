const EMOJI = require('./emoji')

const MAIN_MENU_CMD_TEXT = {
    NBU_CURRENCY: EMOJI["BANK"] + " Курс НБУ",
    PB_CASH_CURRENCY: EMOJI["CASH"] + " Курс ПБ наличный",
    PB_NON_CASH_CURRENCY: EMOJI["CARD"] + " Курс ПБ безнал",
    SUBSCRIBE: EMOJI["SUBSCRIBE"] + " Подписаться на рассылку",
}

const SUBSCRIBE_MENU_CMD_TEXT = {
    SUBSCRIBE_NBU_CURRENCY: EMOJI["BANK"] + " Подписаться на рассылку курса НБУ",
    SUBSCRIBE_PB_CASH_CURRENCY: EMOJI["CASH"] + " Подписаться на рассылку курса ПБ наличный",
    SUBSCRIBE_PB_NON_CASH_CURRENCY: EMOJI["CARD"] + " Подписаться на рассылку курса ПБ безнал",
}

const UNSUBSCRIBE_MENU_CMD_TEXT = {
    UNSUBSCRIBE: EMOJI["CROSS"] + " Отписаться от все рассылок",
}

const NAVIGATION_CMD_TEXT = {
    BACK_BUTTON: EMOJI["BACK"] + " Назад",
}

module.exports = {
    MAIN_MENU_CMD_TEXT,
    SUBSCRIBE_MENU_CMD_TEXT,
    UNSUBSCRIBE_MENU_CMD_TEXT,
    NAVIGATION_CMD_TEXT
}
