function generateGrid(gridSize = 16) {
    const targetWindow = document.getElementById("etch-a-sketch-background");
    clearGrid();
    let columns = gridSize;
    let rows = gridSize;
    let grid = document.createElement("div");
    grid.className = 'grid';
    for (var i = 0; i < columns; ++i) {
        var column = document.createElement('div'); // create column
        column.className = 'column';
        for (var j = 0; j < rows; ++j) {
            var row = document.createElement('div'); // create row
            row.className = 'row gridsquare';
            column.appendChild(row); // append row in column
        }
        grid.appendChild(column); // append column inside grid
    }
    targetWindow.appendChild(grid);
    initGrid();
}

function clearGrid() {
    const targetWindow = document.getElementById("etch-a-sketch-background");
    targetWindow.innerHTML = '';
}

function initGrid() {
    const gridCell = document.querySelectorAll('.gridsquare');
    gridCell.forEach(grid => grid.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
    this.style.backgroundColor = selectColor();
}

function selectColor() {
    const colorSelection = document.getElementById("color-check");
    let color;
    if (colorSelection.checked) {
        color = getRandomColor();
        return color;
    } else {
        color = "rgb(1, 1, 1)"
        return color;
    }
}

function getRandomColor() {
    return `rgb(${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(Math.random() * (255 - 0) + 0)})`;
}

function randomProgressiveColor() {
    let red = Math.round((Math.random() * (255 - 0) + 0) / 10)
    let green = Math.round((Math.random() * (255 - 0) + 0) / 10)
    let blue = Math.round((Math.random() * (255 - 0) + 0) / 10);

    return `rgb(${red}, ${green}, ${blue})`;
}
