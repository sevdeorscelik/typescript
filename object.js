var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor "));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor "));
    };
    return Bus;
}());
var taxi_1 = new Taxi(); //bu sekilde yazmazsak hata veriyor
taxi_1.travelTo({ x: 5, y: 8 }); //taksi X: 5 Y: 8 konumuna gidiyor 
taxi_1.currentLocation = { x: 2, y: 7 };
console.log(taxi_1.currentLocation.x); //2
console.log(taxi_1.currentLocation.y); //7
