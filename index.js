let areas = document.getElementsByClassName("area")
let result = document.getElementById("result")
let xcell = document.getElementById("x")
let ocell = document.getElementById("o")
let drawcell = document.getElementById("draw")
let turn = "X"
let winner;















function game(){
    function reload(){
        location.reload()
    }
    if(areas[0].innerHTML==areas[1].innerHTML&&areas[0].innerHTML==areas[2].innerHTML&&areas[0].innerHTML!= ""){
        winner = areas[0].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)
    }else if(areas[3].innerHTML==areas[4].innerHTML&&areas[3].innerHTML==areas[5].innerHTML&&areas[3].innerHTML!= ""){
        winner = areas[3].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)        
    }else if(areas[6].innerHTML==areas[7].innerHTML&&areas[6].innerHTML==areas[8].innerHTML&&areas[6].innerHTML!= ""){
        winner = areas[6].innerHTML
        result.innerText =`player${winner} won` 
        setInterval(reload(),1000)        
    }else if(areas[0].innerHTML==areas[3].innerHTML&&areas[0].innerHTML==areas[6].innerHTML&&areas[0].innerHTML!= ""){
        winner = areas[0].innerHTML
        result.innerText =`player${winner} won`        
        setInterval(reload(),1000)        
    }else if(areas[1].innerHTML==areas[4].innerHTML&&areas[1].innerHTML==areas[7].innerHTML&&areas[1].innerHTML!= ""){
        winner = areas[1].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)                
    }else if(areas[2].innerHTML==areas[5].innerHTML&&areas[2].innerHTML==areas[8].innerHTML&&areas[2].innerHTML!= ""){
        winner = areas[2].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)                
    }else if(areas[0].innerHTML==areas[4].innerHTML&&areas[0].innerHTML==areas[8].innerHTML&&areas[0].innerHTML!= ""){
        winner = areas[0].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)              
    }else if(areas[2].innerHTML==areas[4].innerHTML&&areas[2].innerHTML==areas[6].innerHTML&&areas[2].innerHTML!= ""){
        winner = areas[2].innerHTML
        result.innerText =`player${winner} won`
        setInterval(reload(),1000)                
    }else if(areas[0].innerText != "" &&areas[1].innerText != "" &&areas[2].innerText != "" &&areas[3].innerText != "" &&areas[4].innerText != "" &&areas[5].innerText != "" &&areas[6].innerText != "" &&areas[7].innerText != "" &&areas[8].innerText != "" ){
        winner = "its a draw"
        result.innerText =winner
        setInterval(reload(),1000)
    }
}

for(let i = 0;i<areas.length;i++){
    areas[i].onclick = function(){
        if(winner=="X"||winner=="Y"||winner=="its a draw"){
        }else{
        if(turn=="X"&&areas[i].innerHTML==""){
            areas[i].innerHTML="X"
            turn = "O"
        }else if(turn=="O"&&areas[i].innerHTML==""){
            areas[i].innerHTML="O"
            turn = "X"
        }
        game()
        }
    }
}
