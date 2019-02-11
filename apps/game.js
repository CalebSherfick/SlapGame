console.log('start')

let target = {
  health: 100,
  hits: 0,
  name: "Tom",
  items: []
}

//NEED TO CHANGE ONCLICK FUNCTIONS WITH THE BUTTONS
// function attack(i) {
//   switch (i) {
//     case 1:
//       target.health--
//       target.hits++;
//       break;
//     case 2:
//       target.health = target.health - 5
//       target.hits++;
//       break;
//     case 3:
//       target.health = target.health - 10
//       target.hits++;
//       break;
//   }
//   update()
// }

var items = {
  glove: { name: 'Glove', modifier: 2, description: 'Was there a brick in that glove?!' },
  knuckles: { name: 'Brass Knuckles', modifier: 3, description: 'POW, right in the kisser!' },
  boot: { name: 'Steeltoed Boot', modifier: 5, description: 'Ouch! That\'s gotta hurt!' }
}

function giveGlove() {
  target.items = []
  target.items.push(items.glove)
}
function giveKnuckles() {
  target.items = []
  target.items.push(items.knuckles)
}
function giveBoot() {
  target.items = []
  target.items.push(items.boot)
}
function remove() {
  target.items = []
}
function reset() {
  target.items = []
  target.health = 100
  target.hits = 0
  update()
}


function addMods() {
  let modTotal = 1
  for (let i = 0; i < target.items.length; i++) {
    modTotal = modTotal + target.items[i].modifier
  }
  return modTotal
}

function knockout() {
  if (target.health < 0) {
    target.health = 0
  }
}

function slap() {
  if (target.items[0] == items.glove) {
    target.health -= 1 * addMods();
    target.hits++
  } else {
    target.health--;
    target.hits++
  }
  update()
}
function punch() {
  if (target.items[0] == items.knuckles || target.items[0] == items.glove) {
    target.health -= 5 * addMods();
    target.hits++
  } else {
    target.health -= 5;
    target.hits++
  }
  update()
}
function kick() {
  if (target.items[0] == items.boot) {
    target.health -= 10 * addMods();
    target.hits++
  } else {
    target.health -= 10;
    target.hits++
  }
  update()
}

function update() {
  document.getElementById("name").innerText = ` ${target.name}`;
  knockout()
  document.getElementById("health").innerText = ` ${target.health.toString()}`;
  document.getElementById("hits").innerText = ` ${target.hits.toString()}`;
}
update();




console.log('finish')