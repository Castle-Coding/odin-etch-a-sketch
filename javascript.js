function generateGrid (gridSize = 16) {
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
}

function clearGrid() {
    const targetWindow = document.getElementById("etch-a-sketch-background");
    targetWindow.innerHTML = '';
}
