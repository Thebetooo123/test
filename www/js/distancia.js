const MAX_DIST = 50;
const MIN_DIST = 10;
const Dist = () => Math.round(Math.random() * (MAX_DIST - MIN_DIST) + MIN_DIST);
let x1 = Dist(), y1 = Dist();
let x2 = Dist(), y2 = Dist();

class PuntoX {
    constructor ( x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  
    toString () {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }
  let p1 = new PuntoX( x1, y1 );
  p1.toString();
  let p2 = new PuntoX( x2, y2 );
  p2.toString();
function calcular(){
    let Distancia = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
    return Distancia;
}
let Distancia = calcular();

console.log(`La distancia entre los puntos ${p1} y ${p2} es de ${calcular()}`);