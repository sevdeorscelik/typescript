interface Point {
     x: number,
     y: number
} 

interface Vehicle {
     currentLocation: Point;
     travelTo(point: Point): void;
}


class Taxi implements Vehicle {
     //..
     currentLocation: Point;
     travelTo(point: Point): void{
          console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor `);
          

     }

}

class Bus implements Vehicle {
     //..
     currentLocation: Point;
     travelTo(point: Point): void{
          console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor `);
     }
}

let taxi_1: Taxi = new Taxi(); //bu sekilde yazmazsak hata veriyor

taxi_1.travelTo({x:5, y:8}); //taksi X: 5 Y: 8 konumuna gidiyor 

taxi_1.currentLocation = {x:2, y:7};

console.log(taxi_1.currentLocation.x); //2
console.log(taxi_1.currentLocation.y); //7

let taxi_2 = new Taxi();
taxi_2.travelTo({ x: 5, y: 6})