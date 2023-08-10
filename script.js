const gridContainer = document.querySelector('.grid-container');

// grid resize
function gridGenerator(nSize) {
    let grid = [];

    for (let i = 0; i < nSize; i++) {
        grid[i] = [];
    }

    for (let i = 0; i < nSize; i++) {
        let row = document.createElement('div'); // row container
        row.classList.add('row')
        for (let j = 0; j < nSize; j++) {
            grid[i][j] = document.createElement('div');
            grid[i][j].classList.add('cell');
            grid[i][j].addEventListener('mouseover', () => grid[i][j].style.backgroundColor = 'pink');
            row.appendChild(grid[i][j]);
        }
        gridContainer.appendChild(row);
    }

    const gridSizeInPixels = 540;
    const cellSizeInPixels = Math.round(gridSizeInPixels / nSize);
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.style.height = `${cellSizeInPixels}px`;
    cell.style.width = `${cellSizeInPixels}px`;
    });
}

function deleteGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(firstChild);
    }
}

