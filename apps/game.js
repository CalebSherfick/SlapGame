console.log('start')

let health = 100;
let hits = 0
let name = "Tom"



function slap() {
  if (health > 0) {
    health--;
    hits++
  }
  update()
}

function punch() {
  if (health > 0) {
    health = health - 5;
    hits++
  }
  update()
}

function kick() {
  if (health > 0) {
    health = health - 10;
    hits++
  }
  update()
}


function update() {
  document.getElementById("name").innerText = ` ${name}`;
  document.getElementById("health").innerText = ` ${health.toString()}`;
  document.getElementById("hits").innerText = ` ${hits.toString()}`;

}
update();




console.log('finish')