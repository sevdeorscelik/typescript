let message = 'hello world';
let count = message.length;  // bu sekilde message otomatik string degeri tanimlandirigi cin lenght uzunluguna bakabiliriz.

let message2;
message2 = 'hello world';
/*let count2 = message2.length;*/ //bu sekilde yazamayiz cümkü yukarida message2'ye any degeri verdi. length string islemidir
let count2 = (<string>message2).length; //bu sekilde message2'nin string oldugunu belirtiriy. yada:
let count3 = (message2 as string).length // bu da bir diger yazim türüdür




