const gridContainer = document.querySelector('.grid-container');

// grid creation
let grid = []
for (let i = 0; i < 16; i++) {
    grid[i] = [];
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        grid[i][j] = document.createElement('div');
        grid[i][j].textContent = `${i}, ${j}`;
        gridContainer.appendChild(grid[i][j]);
    }
}