function combine(n1: string |number, n2: string | number, resultConversion: string){
    let result;
    if(typeof n1 === 'number' && typeof n2 === 'number')
    {
        result = n1 + n2;
    }
    else{
        result = n1.toString() + n2.toString();
    }
    if(resultConversion === 'number')
    {
        return +result;
    }
    else
    {
        return result.toString();
    }


 //   return result;
}
    
    const number1 = 2;
    const number2 = 'String';
    const combinedstringAges = combine(number1, number2, 'string');
    console.log(combinedstringAges);

    const number1a = 2;
    const number2a = 3;
    const combinedAges = combine(number1a, number2a, 'number');
    console.log(combinedAges);
