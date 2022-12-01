const getAverage = (a:number , b:number, c:number): string => {
     const result = (a+b+c)/3;
     return `result: ${result}`
}

getAverage(10, 20, 30); 
getAverage('a', 2, 3); //hata aliriz cünkü hepsine number atadik.


    