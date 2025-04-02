
function addNumbers(a: number,b: number){

    return a+b;
}


const addNumbersArrow = (a: number, b:number):string=>{
    return `${ a+b}`;
}

function multiply(firstnumber: number, secondnNumber?: number, base: number=2){
    return firstnumber * base;
}

const result = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2).toString();
const result3: number = multiply(5);

console.log({ result })
console.log({ result2 })
console.log({ result3 })
export{};