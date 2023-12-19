let tagDescriptions = {
    'a': 'Определяет гиперссылку.',
    'img': 'Определяет изображение.',
    'p': 'Определяет абзац текста.',
};

let tagInput = document.getElementById('tagInput');
let tagDescription = document.getElementById('tagDescription');

tagInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let tagName = tagInput.value.toLowerCase();
        if (tagDescriptions.hasOwnProperty(tagName)) {
            tagDescription.textContent = tagDescriptions[tagName];
        } else {
            tagDescription.textContent = 'Тег не найден.';
        }
    }
});
