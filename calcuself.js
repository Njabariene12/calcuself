
const digits = document.querySelectorAll(".numberss");
const operator = document.querySelectorAll(".operators");
const equals = document.getElementById("equals");
const ac = document.getElementById("clear");
const del = document.getElementById("erase");
const inpuut = document.getElementById("elementals");

let currop = "";
let displayed = "";
let dat1 = "";
let dat2 = "";
let operators;
let result;

digits.forEach((butones) => {
    butones.addEventListener("click",() => {
        let newValue = displayed; 
        displayed = newValue + butones.id;
        inpuut.innerHTML = displayed;
    } )
});

ac.addEventListener("click", () => {
    displayed = ""
    inpuut.innerHTML = ""
})

function opereshen(num1,operators,num2){
    switch(operators){  
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "something's not right";
    }
    return result;
}


operator.forEach((operands) => {
    operands.addEventListener("click", () => {
        
        displayed = displayed + operands.id;
        currop = operands.id;

        let vals1 = displayed.split(currop);

        if(vals1.length > 2){
            inpuut.textContent = "";
            displayed = "";
        }

        inpuut.textContent = displayed;
    })
})


function solve(){
    let vals = displayed.split(currop);

    num1 = Number(vals[0]);
    num2 = Number(vals[1]);    
    operators = currop;
    opereshen(num1,operators,num2);
    inpuut.textContent = result;
    displayed = "";
    
};

equals.addEventListener("click", solve);

