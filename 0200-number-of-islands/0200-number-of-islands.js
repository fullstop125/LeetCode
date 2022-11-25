/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let countIslands = 0;
    
    for (let rowIndex in grid){
        
        for (let columnIndex in grid[rowIndex]){
            
            if (grid[rowIndex][columnIndex] === '1'){
                
                countIslands ++;
                
                helperFunction(parseInt(rowIndex),parseInt(columnIndex),grid);
            }
        }
    }
    
        return countIslands;
};

// convert neighboring points to water '0'

const helperFunction = (rowIndex,columnIndex,grid) => {
    if(grid[rowIndex] === undefined || grid[rowIndex][columnIndex] === undefined || grid[rowIndex][columnIndex] === '0') return ; 
       
    grid [rowIndex][columnIndex] = '0'
    
     helperFunction(rowIndex+1, columnIndex, grid);
     helperFunction(rowIndex-1, columnIndex, grid);
     helperFunction(rowIndex, columnIndex+1, grid);
     helperFunction(rowIndex, columnIndex-1, grid);
    
}