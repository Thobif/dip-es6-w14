let message = 7;
let apple = 5;
let banana = 3;

{
    let banana = 10;
    console.log(banana);
    document.write(banana)
}

let total = apple + banana ;

// console.log(message); //Recall variable
// document.writeln(message);

console.log(`${total} = ${apple} + ${banana}`)
document.write(`<br />${total} =${apple} + ${banana}`);