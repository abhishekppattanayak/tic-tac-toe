import { board } from "./board.js";
import { player } from "./player.js";

const __init__ = ()=>{
    let b = document.querySelector('#board');
    b.innerHTML = "";

    for(let i=0; i<3; ++i){
        let row = document.createElement('div');
        for(let j=0; j<3; ++j){
            let tile = document.createElement('div');
            tile.addEventListener('click', ()=>{
                if( board.getState() && tile.textContent===''){
                    tile.textContent = player.getMarker();
                    board.setTile(i,j,tile.textContent);
                    player.switchMarker();
                    if(board.checkWin()){
                        if(board.checkWin()==="TIE"){
                            document.querySelector('footer').textContent = "It's a TIE!";
                        }
                        else{
                            document.querySelector('footer').textContent = `Player ${board.checkWin()} has won!!`;
                        }
                        board.disableState();
                    }
                }
            })
            row.appendChild(tile);
        }
        b.appendChild(row);
    }

}

document.querySelector('#reset').addEventListener('click', ()=>{
    board.resetBoard();
    __init__();
    board.enableState();
    document.querySelector('footer').textContent = "";
})

__init__();