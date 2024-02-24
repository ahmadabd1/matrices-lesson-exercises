/* Write your code below */
class Matrix{
    constructor(row,col){
        this.matrix = this.generateMatrix(row,col) 
        this.row=row
        this.col=col

    }
    generateMatrix(row,col){
        let counter=1
        let mat=[]
        for(let r=0;r<row;r++){
            let rows=[]
        for(let c=0;c<col;c++){
            rows.push(counter++)

        }
        mat.push(rows)

        }
        return mat

    }
    print(){
        console.log(this.matrix)
    }
    printColumn(col){
        let s="cd"
        for(let r=0;r<this.matrix.length;r++){
            s+=this.matrix[r][col]+","
        }
        console.log(s)
    }
    printRow(row){
        let s=""
        for(let c=0;c<this.col;c++){
            s+=this.matrix[row][c]+","
        }
        console.log(s)
    }
    alter(x,y,func){

    }
}

let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
    
// m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Matrix