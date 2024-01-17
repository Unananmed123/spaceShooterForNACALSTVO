"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let dir;

const ship = new Image();
ship.src = './img/корабль.png';

const myDefer = new Image();
myDefer.src = "./img/враг.png";

const bulletShip = new Image();
bulletShip.src = "./img/второйСнарядКорабля.png";

const bulletDefer = new Image();
bulletDefer.src = "./img/снарядВрага.png";

let liveHTML = document.querySelector(".live");
let scoreHTML = document.querySelector(".score");

let live  = 5;
let score = 0;
let box = 125;

let deferPosit = {
    x: Math.floor(Math.random()) * box,
    y: 100
};

let shipPos = {
    x: 200,
    y: 800
};
let bulletPosShip = {
    x: shipPos.x,
    y: shipPos.y
};
let bulletDeferPosit = {
    x: deferPosit.x,
    y: deferPosit.y
}

let hitBoxHeart = {
    y: bulletDeferPosit.y + 48,
    y2: bulletDeferPosit.y + bulletDeferPosit.x + 48
}

/*let hitboxShip = {
    x: shipPos.x + 100,
    y:
}*/

// function shot(event){
//
// }

function direction(event){
    if (event.keyCode === 39 || event.keyCode === 68){
        dir = "right";
    }
    if (event.keyCode === 37 || event.keyCode === 65){
        dir = "left";
    }
    if (event.keyCode === 32){
        dir = "up";
    }
}

function stopGo(event){
    if (event.keyCode){
        dir = '';
    }
}


// document.addEventListener("keypress", shot);
document.addEventListener("keydown", direction);
document.addEventListener("keyup", stopGo);


function drawGame(){
    ctx.fillStyle = "#2d2d2d";
    ctx.fillRect(0,0, canvas.width, canvas.height);


    ctx.drawImage(ship, shipPos.x, shipPos.y);
    ctx.drawImage(myDefer, deferPosit.x, deferPosit.y);
    ctx.drawImage(bulletShip, shipPos.x, bulletPosShip.y);
    ctx.drawImage(bulletDefer, bulletDeferPosit.x, bulletDeferPosit.y);



    if (dir === "up"){
        for(let i = 0; i < 30; i++){
            bulletPosShip.y--;
        }
    }

    if(shipPos.x < 0){
        dir = 'right';
    }
    if (shipPos.x > 400){
        dir = 'left';
    }

    if (dir === "right"){
        shipPos.x++;

    }
    if (dir === "left"){
        shipPos.x--;
    }
    if (bulletPosShip.y < 50){
        bulletPosShip = {
            x: shipPos.x,
            y: shipPos.y
        };
    }
    for (let i = 0; i < 5; i++){
        bulletDeferPosit.y++;
    }
    if (bulletDeferPosit.y > 800){
        bulletDeferPosit = {
            x: deferPosit.x,
            y: deferPosit.y
        }
    }
    for (let i = 0; i < 1; i++){
        deferPosit.x++;
    }
    if (deferPosit.x > 400){
        deferPosit = {
            x: Math.floor(Math.random()) * box,
            y: 100
        };
    }

    if (bulletDeferPosit.x === shipPos.x){
        liveHTML.innerText = live--;
    }
    if (live < 1){
        alert("пока...");
        location.reload()
    }

    if (score === 50){
        alert("ты выиграл")
        location.reload()
    }

    if (bulletDeferPosit.y === shipPos.y){
        if (bulletDeferPosit.x >= shipPos.x || bulletDeferPosit.x <= shipPos.x){
            score++;
        }
    }


}
export {
    myDefer,
    deferPosit,
    box,
    bulletDefer,
    bulletDeferPosit,

}


let gameStart = setInterval(drawGame, 1);