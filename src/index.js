module.exports = function solveSudoku(matrix) {

    let tmpMatrix = matrix;
    let sudoku = tmpMatrix;
    let finSud = [];
    do {
        sudoku = tmpMatrix;

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (tmpMatrix[i][j] === 0) {
                    tmpMatrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                }

                if (tmpMatrix[i][j].length > 1) {
                    for (let y = 0; y < 9; y++) {
                        for (let z = 0; z < tmpMatrix[i][j].length; z++) {
                            if (tmpMatrix[i][j].length > 1 && tmpMatrix[i][y] === tmpMatrix[i][j][z]) {
                                tmpMatrix[i][j].splice(z, 1);
                            }
                        }
                    }
                }

                if (tmpMatrix[i][j].length > 1) {
                    for (let x = 0; x < 9; x++) {
                        for (let z = 0; z < tmpMatrix[i][j].length; z++) {
                            if (tmpMatrix[i][j].length > 1 && tmpMatrix[x][j] === tmpMatrix[i][j][z]) {
                                tmpMatrix[i][j].splice(z, 1);
                            }
                        }
                    }
                }

                if (tmpMatrix[i][j].length > 1) {
                    let cB, cL, rB, rL;
                    if (i < 3) {
                        cB = 0;
                        cL = 3;
                    }
                    if (i > 2 && i < 6) {
                        cB = 3;
                        cL = 6;
                    }
                    if (i > 5) {
                        cB = 6;
                        cL = 9;
                    }
                    if (j < 3) {
                        rB = 0;
                        rL = 3;
                    }
                    if (j > 2 && j < 6) {
                        rB = 3;
                        rL = 6;
                    }
                    if (j > 5) {
                        rB = 6;
                        rL = 9;
                    }


                    for (x = cB; x < cL; x++) {
                        for (y = rB; y < rL; y++) {
                            for (z = 0; z < tmpMatrix[i][j].length; z++) {
                                if (tmpMatrix[i][j].length > 1 && tmpMatrix[x][y] === tmpMatrix[i][y][z]) {
                                    tmpMatrix[i][j].splice(z, 1);
                                }
                            }
                        }
                    }
                }
                
                // if (tmpMatrix[i][j].length = 1 && tmpMatrix[i][j] instanceof Array) {
                //     tmpMatrix[i][j] = tmpMatrix[i][j][0]; 
                // }
            }
         }
        finSud = tmpMatrix;
    } while (finSud !== sudoku)
    return finSud;
}