const https = require('https');
const emoji = require('../emoji');

const getPBRates = (ctx, type) => {
    const cashUrl = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';
    const nonCashUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';
    let link = type === 'cash' ? cashUrl : nonCashUrl;
    let responseText = type === 'cash' ? 'Готівковий курс ПриватБанку' : 'Безготівковий курс ПриватБанку';

    https.get(link, resp => {
        let data = '';

        resp.on('data', chunk => data += chunk);
        resp.on('end', () => {
            const currentMonth = new Date().getMonth() + 1;
            const currentDay = new Date().getDate();
            const currentDate = `${currentDay}.${currentMonth}`

            let currencies = JSON.parse(data);
            let mark_down = `${responseText} на ${currentDate} \n\n`;

            currencies = currencies.filter(currency => currency.ccy === 'USD' || currency.ccy === 'EUR');
            currencies.forEach(currency => {
                const icon = emoji[currency.ccy.toUpperCase()];
                const currency_name = currency.ccy;
                const buy = Number.parseFloat(currency.buy).toFixed(2);
                const sale = Number.parseFloat(currency.sale).toFixed(2);

                mark_down += `${icon} ${currency_name}: ${buy} \/ ${sale} \n`
            });

            ctx.reply(mark_down);
        });

    }).on('error', err => {
        console.log('Error: ' + err.message);
    });
}

module.exports = getPBRates;
