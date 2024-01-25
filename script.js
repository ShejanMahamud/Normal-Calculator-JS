function addition(num1, num2){
    return (num1+num2).toFixed(2);
}
function substraction(num1, num2){
    if(num1<num2){
        return "In substraction Number2 can't be big than Number1";
    }
    else{
        return (num1-num2).toFixed(2);
    }
}
function multiply(num1, num2){
    return (num1*num2).toFixed(2);
}
function division(num1, num2){
    if(num1!==0){
        return (num1/num2).toFixed(2);
    }
    else{
        return "You can't divided by 0";
    }
}
function modulas (num1, num2){
    if(num1!==0){
        return (num1 % num2)
    }
    else{
        return "you can't divided by 0"
    }
}
let user = parseFloat(prompt("What you want to do?\n1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n5.Modulus"))

if (user==1){
    let userInput1 = parseFloat(prompt("Enter first number"));
    let userInput2 = parseFloat(prompt("Enter second number"));
    document.write("Total addition of two number is: " + addition(userInput1,userInput2));
}else if (user==2){
   let userInput1 = parseFloat(prompt("Enter first number"));
   let userInput2 = parseFloat(prompt("Enter second number"));
   document.write("Substraction of two number is: "+ substraction(userInput1,userInput2))
}else if(user==3){
    let userInput1 = parseFloat(prompt("Enter first number"));
    let userInput2 = parseFloat(prompt("Enter second number"));
    document.write("Multiplication of two number is: "+ multiply(userInput1, userInput2));
}else if(user==4){
    let userInput1 = parseFloat(prompt("Enter first number"));
    let userInput2 = parseFloat(prompt("Enter second number"))
    document.write("Division of two number is: "+ division(userInput1, userInput2));
}else if(user==5){
    let userInput1 = parseFloat(prompt("Enter first number"));
    let userInput2 = parseFloat(prompt("Enter second number"));
    document.write("Modulus of two number is: "+modulas(userInput1, userInput2))

}
else{
    document.write("I don't know what you talking about!")
}