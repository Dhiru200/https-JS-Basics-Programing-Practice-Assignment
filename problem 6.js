
    
    function sumOfDigitsFrom1ToN(n)
    { 
        let result = 0;
      
        
        for (let x = 1; x <= n; x++)
            result += sumOfDigits(x);
      
        return result;
    }
      
   
    function sumOfDigits(x)
    {
        let sum = 0;
          
        while (x != 0)
        {
            sum += x % 10;
            x = parseInt(x / 10, 10);
        }
          
        return sum;
    }
     
    let n = 328;
          
    document.write("Sum of digits"
                      + " in numbers from 1 to "
                      + n + " is "
                      + sumOfDigitsFrom1ToN(n));

