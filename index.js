let scoreHome = document.getElementById("score-home")
let scoreAway = document.getElementById("score-away")
let home = 0
let away = 0

function home1(){
    
    home += 1
    scoreHome.textContent = home
}

function home2(){
    
    home += 2
    scoreHome.textContent = home
}

function home3(){
    
    home += 3
    scoreHome.textContent = home
}

function away1(){
    
    away += 1
    scoreAway.textContent = away
}

function away2(){
    
    away += 2
    scoreAway.textContent = away
}

function away3(){
    
    away += 3
    scoreAway.textContent = away
}

function reset(){

    home = 0
    away = 0
    scoreHome.textContent = home
    scoreAway.textContent = away
}