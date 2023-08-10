const gridContainer = document.querySelector('.grid-container');

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
        // grid[i][j].textContent = `${i}, ${j}`;
        row.appendChild(grid[i][j]);
    }
    gridContainer.appendChild(row);
}