var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("otob\u00FCs X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor "));
    };
    return Bus;
}());
var Taxi = /** @class */ (function () {
    function Taxi(location) {
        this.currentLocation = location;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("taksi X: ".concat(point.x, " Y: ").concat(point.y, " konumuna gidiyor "));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 7 }); //constructor ekledigimiz icin artik new taxi olustururken x ve y degerlerini vermemiz gerekiyor
taxi_1.color = 'red';
console.log(taxi_1.currentLocation);
