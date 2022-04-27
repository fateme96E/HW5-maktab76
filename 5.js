function Rec(leftX, leftY, rightX, rightY){
    this.leftX = leftX;
    this.leftY = leftY;
    this.rightX = rightX;
    this.rightY = rightY;
}

function checkOverlap(rec1, rec2){
    if (rec1.leftX === rec1.rightX || rec1.leftY === rec1.rightY || rec2.leftX === rec2.rightX || rec2.leftY === rec2.rightY){
        return false;
    }else if ( rec1.rightX <= rec2.leftX || rec1.leftX >= rec2.rightX){
        return false;
    }else if ( rec1.rightY <= rec2.leftY || rec1.leftY >= rec2.rightY){
        return false;
    }else{
        return true;
    }
}

function calcArea(r1, r2){
    if (!checkOverlap(r1, r2)){
        console.log(0);
    }else{
        let length = Math.min(r1.rightX, r2.rightX) - Math.max(r1.leftX, r2.leftX);
        let height = Math.min(r1.rightY, r2.rightY) - Math.max(r1.leftY, r2.leftY);
        let area = length * height;
        console.log(area);
    }
}


let  inp1 = [{ x: 2, y: 1 }, { x: 5, y: 5 }];
let  inp2 = [{ x: 3, y: 2 }, { x: 5, y: 7 }];

// let inp1 = [{ x: 2, y: -9 }, { x: 13, y: -4 }];
// let inp2 = [{ x: 5, y: -11 }, { x: 7, y: -2 }];

// let inp1 = [{ x: -8, y: -7 }, { x: -4, y: 0 }];
// let inp2 = [{ x: -5, y: -9 }, { x: -1, y: -2 }];

//without overlap:
// let inp1 = [{ x: -1, y: -3 }, { x: 0, y: 0 }];
// let inp2 = [{ x: 2, y: -2 }, { x: 3, y: 3 }];


const rectangle1 = new Rec(inp1[0].x, inp1[0].y, inp1[1].x, inp1[1].y);
const rectangle2 = new Rec(inp2[0].x, inp2[0].y, inp2[1].x, inp2[1].y);
calcArea(rectangle1, rectangle2);
