module.exports = function solveSudoku(matrix) {
  
var a=matrix;
var sudoku=a;
var i, j, z, x, y, cB, cL, rB, rL;
var finSud=[];
do {
sudoku=a;

for (i=0; i<9; i++) {
	for (j=0; j<9; j++) {
		if (a[i][j]==0) 
		{
			a[i][j]=[1, 2, 3, 4, 5, 6, 7, 8, 9];
		}

		if (a[i][j].length>2)
		{
			for (y=0; y<9; y++) {
				for (z=0; z<a[i][j].length; z++) 
				{
					if(a[i][y].length<2 && a[i][y]==a[i][j][z]) {
						a[i][j].slice(z-1, 1);
					}
				}
			}
		}

		if (a[i][j].length>2)
		{
			for (x=0; x<9; x++) {
				for (z=0; z<a[i][j].length; z++)
				{
					if (a[x][j].length<2 && a[x][j]==a[i][j][z]) {
						a[i][j].slice(z-1, 1);
					}
				}
			}
		}

		if (a[i][j].length>2)
		{
			if (i<3) {
				cB=0;
				cL=3;
			}
			if (i>2 && i<6) {
				cB=3;
				cL=6;
			}
			if (i>5) {
				cB=6;
				cL=9;
			}
			if (j<3) {
					rB=0;
					rL=3;
			}
			if (j>2 && j<6) {
					rB=3;
					rL=6;
			}
			if (j>5) {
					rB=6;
					rL=9;
			}		
			

			for (x=cB; x<cL ; x++) {
				for (y=rB; y<rL; y++) {
					for (z=0; z<a[i][j].length; z++) {
						if (a[x][y].length>2 && a[x][y]==a[i][y][z]) {
							a[i][j].slice(z-1, 1);
						}
					}
				}
			}
		}
	}
}
finSud=a;
} while (finSud!=sudoku)
return finSud;
}
