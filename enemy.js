import {myDefer, bulletDefer, deferPosit, box, bulletDeferPosit} from "./scriptIndex";


function enemyGo(){
    for (let i = 0; i < 10; i++){
        bulletDeferPosit.y++;
        deferPosit.x++
    }
    if (deferPosit.x > 400){
        deferPosit.x--;
    } else if(deferPosit.x < 0){
        deferPosit.x++;
    }
}

export {
    enemyGo,
}