let arr = ['Россия', 'Италия', 'Испания'];
let input = document.getElementById('elem');
let list = document.getElementById('list');

input.addEventListener('input', handleInput);

function handleInput() {
    let inputValue = input.value.toLowerCase();
    let filteredCountries = arr.filter(country => country.toLowerCase().startsWith(inputValue));
        
    list.innerHTML = '';

    filteredCountries.forEach(country => {
        let listItem = document.createElement('li');
        listItem.textContent = country;
        listItem.addEventListener('click', () => {
            input.value = country;
            list.innerHTML = ''; 
        });
        list.appendChild(listItem);
    });
}

document.addEventListener('click', (event) => {
    if (!event.target.matches('#elem') && !event.target.matches('#list li')) {
        list.innerHTML = '';
    }
});
