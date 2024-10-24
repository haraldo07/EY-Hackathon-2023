// returns the last digit
function remainder(num){
    return num%10;
}

// return the number raised to the power n
function pow(rem,num){
    n=num.length;
    return Math.pow(rem,n);
}

// divides the number further and changes datatype to parseInt
function change_type(num){
    return parseInt(num/10);
}

// returns the calculated sum of individual digits raised to powers
function armstrong(num){
    let temp=num;
    let sum=0;
    while(temp>0){
        let rem=remainder(temp);
        sum+=pow(rem,num);
        temp=change_type(temp);
    }
    return sum;
}

// condition check and output
function check(num1,num2){
    if (num1==num2){
        alert(num2+' is armstrong');
    }
    else{
        alert(num2+' is not armstrong');
    }
}

// getting input
let num=prompt('Number:');
if (num>=0){
    number=armstrong(num);
    check(number,num);
}
else{
    alert("Enter values within boundary [0,inf)");
}

