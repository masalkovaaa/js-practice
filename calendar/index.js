let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');
let info = calendar.querySelector('.info');

let date  = new Date();
let year  = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);

function draw(body, year, month) {
    let arr = range(getLastDay(year, month));
            
    let firstWeekDay = getFirstWeekDay(year, month);
    let lastWeekDay  = getLastWeekDay(year, month);
            
    let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
    createTable(body, nums);

    info.textContent = getMonthName(month) + ' ' + year + ' г.';
}

function createTable(parent, arr) {
    parent.textContent = '';
    let cells = [];
            
    for (let sub of arr) {
        let tr = document.createElement('tr');
                
        for (let num of sub) {
            let td = document.createElement('td');
            td.textContent = num;
            tr.appendChild(td);
                    
            cells.push(td);
            }
                
        parent.appendChild(tr);
    }
            
    return cells;
    }

function normalize(arr, left, right) {
    for (let i = 0; i < left; i++) {
        arr.unshift('');
    }
    for (let i = 0; i < right; i++) {
        arr.push('');
    }
            
    return arr;
}

function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let num  = date.getDay();
            
    if (num == 0) {
        return 6;
    } else {
        return num - 1;
    }
}

function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let num  = date.getDay();
            
    if (num == 0) {
         return 6;
    } else {
        return num - 1;
    }
}

function getLastDay(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function range(count) {
    let arr = [];
            
    for (let i = 1; i <= count; i++) {
        arr.push(i);
    }
            
    return arr;
}

function chunk(arr, n) {
    let result = [];
    let count = Math.ceil(arr.length / n);
            
    for (let i = 0; i < count; i++) {
        let elems = arr.splice(0, n);
        result.push(elems);
    }
            
    return result;
}

function getMonthName(month) {
    const monthNames = [
        'Январь', 'Февраль', 'Март',
        'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь',
        'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    return monthNames[month];
}

function getNextMonth(currentMonth) {
    return (currentMonth + 1) % 12;
}

function getPrevMonth(currentMonth) {
    return (currentMonth - 1 + 12) % 12;
}
function getNextYear(currentYear, currentMonth) {
    if (currentMonth === 11) {
        return currentYear + 1;
    } else {
        return currentYear;
    }}

function getPrevYear(currentYear, currentMonth) {
    if (currentMonth === 0) {
        return currentYear - 1;
    } else {
        return currentYear;
    }}

next.addEventListener('click', function() {
    if (month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }

    draw(body, year, month);
});

prev.addEventListener('click', function() {
    if (month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    draw(body, year, month);
});