const https = require('https');
const emoji = require('../emoji');
const Rate = require("../Rate");


const link = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const getNBURates = ctx => {
    https.get(link, (resp) => {
        let data = '';

        resp.on('data', chunk => data += chunk);
        resp.on('end', () => {
            const currentMonth = new Date().getMonth() + 1;
            const currentDay = new Date().getDate();
            const currentDate = `${currentDay}.${currentMonth}`

            let currencies = JSON.parse(data);
            let mark_down = `Курс НБУ на ${currentDate} \n\n`;

            currencies = currencies.filter(currency => currency.cc === 'USD' || currency.cc === 'EUR');
            currencies.forEach((currency, index) => {
                const icon = emoji[currency.cc.toUpperCase()];
                const currency_name = currency.txt;
                const buy = Number.parseFloat(currency.rate).toFixed(2);

                mark_down += `${icon} ${currency_name}: ${buy}\n`

                const rate =  new Rate({
                    exchangeType: 'nbu_' + index,
                    currencyName: currency.cc,
                    buy: currency.rate,
                    sale: null,
                    difference: null,
                })

                rate.save();
            });

            ctx.reply(mark_down);
        });

    }).on('error', err => {
        console.log('Error: ' + err.message);
    });
}

module.exports = getNBURates;
