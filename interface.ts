
let travelTo = (point: {x:number, y:number} /*ya da kisaca point: Point */) => { //fonksiyoun parametresi objecttir ve objectin x ve y elemenalari numberdir.
     // ...
}

travelTo({
     x: 1,
     y: 2
})

interface Point {
     x:number, 
     y:number
}

let getDistance = (pointA: Point, pointB: Point) => { //bu sekilde point tippinde olan her object yerine Point interfaceini koyariz
     //..
}