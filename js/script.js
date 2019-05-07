'use strict';
const z = console.log;

const money = +prompt('Ваш бюджет на месяц?', 50000),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-05-04');


const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = +prompt('Во сколько обойдется?', 7500);
    if ((typeof (a)) === "string" && (typeof (a)) !== null && (typeof (b)) !== null && a !== '' && b !== '' && a.length < 50) {
        appData.expenses[a] = b;
    } else {
        i = 0;
    }
}

appData.moneyPerDay = appData.budget / 30;
z(`Бюджет на один день: ${appData.moneyPerDay}`);
z(appData);

if (appData.moneyPerDay < 100) {
    z('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    z('Средний уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    z('Высокий уровень достатка');
} else {
    z('Произошла ошибка');
}
