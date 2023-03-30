/*************** THERE IS NO SPOON ****************/
/*  
cellule:
    0,0     1,0
    0,1
    
input:
    0 if cell exist
    . else

output:
    x0 y0: coordinates of cell
    x1 y1: coordinates of right neighbor cell
    x2 y2: coordinates of neighbor cell below
*/

let width = 2;
let height = 2;
let tab = [];

// data [height][width]
tab[0] = '.0'.split('')
tab[1] = '00'.split('')
// [['0','0'],['0','.']]

function result (y, x, width, height){
    coordinate_cell = x+' '+y
    coordinate_right = coordinate(true, y, x, width, height)
    coordinate_down = coordinate(false, y, x, width, height)
    return (coordinate_cell+' '+coordinate_right+' '+coordinate_down)
}

function coordinate(right_or_down, y, x, width, height){
    let axe = right_or_down?x:y
    let limit = right_or_down?width:height
    i = 1
    while (axe+i <= limit){
        
        // rigth
        if (right_or_down){
            if (x+i == limit){
                return ('-1 -1')
            }else if (tab[y][x+i] == '0')
                return ((x+i)+' '+y)
        }
        //down
        if (!right_or_down){
            if (y+i == limit){
                return ('-1 -1')
            }else if (tab[y+i][x] == '0')
                return (x+' '+(y+i))
        }

        i++
    }
    return ('-1 -1')
}

for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
        if (tab[y][x] == '0')
            console.log(result(y, x, width, height))
    }
}
