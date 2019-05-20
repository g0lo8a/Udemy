'use strict';
const z = console.log;

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 50000);
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-05-08');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 50000);
    }
}

start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', 'blb-bla'),
                b = +prompt('Во сколько обойдется?', 7500);
            if ((typeof (a)) === "string" && (typeof (a)) !== null && (typeof (b)) !== null && a !== '' && b !== '' && a.length < 50) {
                appData.expenses[a + i] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = +(appData.budget / 30).toFixed(2);

        z(`Бюджет на один день: ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            z('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            z('Средний уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            z('Высокий уровень достатка');
        } else {
            z('Произошла ошибка');
        }
    },
    checkSavings: function () {

        if (appData.savings === true) {
            let save = +prompt('Какова сумма накоплений?', 35000),
                percent = +prompt('Под какой процент?', 1);
            appData.monthIncome = +(save / 100 / 12 * percent).toFixed(2);

            z(`Доход с депозита ${appData.monthIncome}`);
        }
    },
    chooseOptExpenses: function () {
        let c;
        for (let i = 1; i < 4; i++) {
            c = prompt('Статья необязательных расходов?', 'bla-bla-bla');
            if ((typeof (c)) === "string" && (typeof (c)) !== null && c.length < 50) {
                appData.optionalExpenses[i] = c + i;
            } else {
                i = i - 1;
            }
        }
    },
    choozIncome: function () {
        let items = prompt('Что приносит дополнительний доход? (Перечислите через запятую)', 'дла, бла, Афла');
        while (typeof items !== 'string' || items === '' || items === null || !isNaN(items)) {
            items = prompt('Что приносит дополнительний доход? (Перечислите через запятую)', 'дла, бла, Афла');
        }
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?', "Ну ёпт"));
        appData.income.sort();
    }
};

appData.choozIncome();

z(appData);
z(`Способы доп. заработка: `);
appData.income.forEach(function (item, i) {
    z(`${++i}: ${item}`);
});
z(`Наша программа включает в себя данные: `);
for (let item in appData) {
    z(`${item}: ${appData[item]}`);
}