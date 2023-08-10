const gridContainer = document.querySelector('.grid-container');

// methods

// grid creation
let grid = []
for (let i = 0; i < 16; i++) {
    grid[i] = [];
}

for (let i = 0; i < 16; i++) {
    let row = document.createElement('div'); // row container
    row.classList.add('row')
    for (let j = 0; j < 16; j++) {
        grid[i][j] = document.createElement('div');
        grid[i][j].classList.add('cell');
        grid[i][j].addEventListener('mouseover', () => grid[i][j].style.backgroundColor = 'pink');

        row.appendChild(grid[i][j]);
    }
    gridContainer.appendChild(row);
}