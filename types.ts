/*
let number = 5;

number = "a";  
//js'de tanimli bir variable'a baska bir deger ile tipini degistirebiliyoruz. ts buna izin vermiyor

*/

//let a; //tipi any olarak atanir ve istedigimiz tipi verebilirz
// let a: number; //number tipini atadik

/*

a = 5;
a = 'a';
a = true;

*/

/*
let a: number = 5;
let b: string = 'a';
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3] //numberlardam olusan dizi tanimladik
let f: Array<number> = [1, 2, 3] // e ile ayni tanimdir. yazim sekli farkli
let g: any[] = [1, 'a', true] //her indexe ayri tip atariz
let h: [string, number, boolean] = ['a', 5, false]; //buna da tuple denir
*/

/*
const krediPayment = 0;
const havalePayment = 1;
const eftPayment = 2;
*/

enum Payment { kredi=0, havale=5, eft=3 };

let kredi = Payment.kredi; //0
let havale = Payment.havale; //5
let eft = Payment.eft //3


