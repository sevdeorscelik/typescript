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
var a = 5;
var b = 'a';
var c = true;
var d;
var e = [1, 2, 3]; //numberlardam olusan dizi tanimladik
var f = [1, 2, 3]; // e ile ayni tanimdir. yazim sekli farkli
var g = [1, 'a', true]; //her indexe ayri tip atariz
var h = ['a', 5, false]; //buna da tuple denir
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["eft"] = 2] = "eft";
})(Payment || (Payment = {}));
var kredi = Payment.kredi; //0
var havale = Payment.havale; //1
var eft = Payment.eft; //2
console.log(kredi);
