const player1 = {

  player: 1,
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Kunai", "Axe"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
};
const player2 = {

  player: 2,
  name: "KITANA",
  hp: 100,

  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Steel fans", "Flying blade"],
  attack: function () {
    console.log(this.name + "Fight...");
  },
};

const $arena = document.querySelector(".arenas");

const $randomButton = document.querySelector("button");

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer({ player, name, hp, img, weapon, attack }) {
  const $player = createElement("div", "player" + player);
  const $progressBar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  $life.style.width = `${hp}%`;
  const $name = createElement("div", "name");
  $name.innerText = name;
  $progressBar.appendChild($life);
  $progressBar.appendChild($name);
  const $character = createElement("div", "character");
  const $img = createElement("img");

  $img.src = img;
  $character.appendChild($img);
  $player.appendChild($character);
  $player.appendChild($progressBar);

  return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= Math.ceil(Math.random() * 20);

  if (player.hp <= 0) {
    player.hp = 0;
    $randomButton.disabled = true;
  }
  $playerLife.style.width = player.hp + "%";
}

function playerWin(player = { name: "NOBODY" }) {
  const $winTitle = createElement("div", "winTitle");
  $winTitle.innerText = player.name + " win";
  return $winTitle;
}

$randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
  if (player1.hp === 0 && player2.hp === 0) {
    {
      console.log(true);
      $arena.appendChild(playerWin());
    }
  } else {
    if (player1.hp <= 0) {
      $arena.appendChild(playerWin(player2));
    }
    if (player2.hp <= 0) {
      $arena.appendChild(playerWin(player1));
    }
  }
});

$arena.appendChild(createPlayer(player1));
$arena.appendChild(createPlayer(player2));


}

createPlayer("player1", player1);
createPlayer("player2", player2);

