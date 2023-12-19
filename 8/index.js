let historicalEvents = [
    { date: '2000-01-01', title: 'Событие 1', description: 'Описание события 1.' },
    { date: '2001-02-15', title: 'Событие 2', description: 'Описание события 2.' },
    { date: '2002-05-10', title: 'Событие 3', description: 'Описание события 3.' },
];

let input = document.getElementById('input');
let table = document.getElementById('table');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let year = parseInt(input.value);
        let filteredEvents = historicalEvents.filter(function(event) {
            return new Date(event.date).getFullYear() === year;
        });

        buildTable(filteredEvents);
    }
});

function buildTable(events) {
    table.innerHTML = '<tr><th>Дата</th><th>Название</th><th>Описание</th></tr>';

    events.forEach(function(event) {
        let row = table.insertRow();
        let dateCell = row.insertCell(0);
        let titleCell = row.insertCell(1);
        let descriptionCell = row.insertCell(2);

        dateCell.textContent = event.date;
        titleCell.textContent = event.title;
        descriptionCell.textContent = event.description;
    });
}
