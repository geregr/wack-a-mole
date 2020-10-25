var grid = $(".grid")
var mole = $(".mole")


var hit
var score = 0
$("#s").text(score)
// console.log(grid)

function randomGrid(){
    for(e of grid){
        // console.log(e)
        $(e).removeClass("mole")
    }
    let ran = Math.floor(Math.random()*9)
    // console.log(grid[ran])
    $(grid[ran]).addClass("mole")

    hit = grid[ran].id
    console.log(hit)
}

$(grid).click((e)=>{
    if(e.target.id === hit){
        console.log("boooooooooooooooooooooooooooooom")
        score++
        console.log(e.target.id)
        $("#s").text(score)
    }
})

function molemolemolemole(){
    let timer = null
    timer = setInterval(randomGrid,0.000000000000000000000000000000000000000001)
}
molemolemolemole()