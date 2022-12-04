
interface Point {
     x: number,
     y: number
} 

interface Vehicle {
     currentLocation: Point;
     travelTo(point: Point): void;
}


class Bus implements Vehicle {
     //..
     currentLocation: Point;
     travelTo(point: Point): void{
          console.log(`otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor `);
     }
}
class Taxi implements Vehicle {

     color: string;

     constructor(location: Point, color?: string) { //soru isareti zorunlu bir parametre olmadigini gösterir.
          this.currentLocation = location;
     }
     
     currentLocation: Point;
     travelTo(point: Point): void{
          console.log(`taksi X: ${point.x} Y: ${point.y} konumuna gidiyor `);
     }
}

let taxi_1: Taxi = new Taxi({x:2, y:7}, 'red' ); //constructor ekledigimiz icin artik new taxi olustururken x ve y degerlerini vermemiz gerekiyor

// taxi_1.color = 'red'

console.log(taxi_1.currentLocation);



