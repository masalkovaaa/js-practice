let rows = 3;
    let cols = 3;
    let moves = 0;

    let colors = ['red', 'green', 'blue'];

    function createTable() {
      let field = document.getElementById('field');

      for (let i = 0; i < rows; i++) {
        let row = field.insertRow(i);

        for (let j = 0; j < cols; j++) {
          let cell = row.insertCell(j);
          cell.className = getRandomColor();

          cell.addEventListener('click', function () {
            changeColor(this);
            moves++;
            document.querySelector('.moves').textContent = ' ходы: ' + moves;

            if (checkVictory()) {
              alert('вы выиграли за ' + moves + ' ходов');
              resetGame();
            }
          });
        }
      }
    }

    function getRandomColor() {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function changeColor(cell) {
      let currentColor = cell.className;
      let nextColor = getNextColor(currentColor);
      cell.className = nextColor;
    }

    function getNextColor(currentColor) {
      let currentIndex = colors.indexOf(currentColor);
      return colors[(currentIndex + 1) % colors.length];
    }

    function checkVictory() {
      let firstCellColor = document.getElementById('field').rows[0].cells[0].className;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (document.getElementById('field').rows[i].cells[j].className !== firstCellColor) {
            return false;
          }
        }
      }

      return true;
    }

    function resetGame() {
      document.getElementById('field').innerHTML = '';
      moves = 0;
      document.querySelector('.moves').textContent = 'ходы: ' + moves;
      createTable();
    }

    createTable();