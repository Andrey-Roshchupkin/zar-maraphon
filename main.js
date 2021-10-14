const player1 = {
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Kunai", "Axe"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
};
const player2 = {
  name: "KITANA",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Steel fans", "Flying blade"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
};

const $arena = document.querySelector(".arenas");

function createPlayer(playerClass, { name, hp, img, weapon, attack }) {
  const $player = document.createElement("div");
  $player.classList.add(playerClass);
  const $progressBar = document.createElement("div");
  $progressBar.classList.add("progressbar");
  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = `${hp}%`;
  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = name;
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  const $character = document.createElement("div");
  $character.classList.add("character");
  const $img = document.createElement("img");
  $img.src = img;
  $character.appendChild($img);
  $player.appendChild($character);
  $player.appendChild($progressBar);
  $arena.appendChild($player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
