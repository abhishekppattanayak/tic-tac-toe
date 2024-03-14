import { player } from "./player.js";

const gameBoard = (()=>{
    let array = new Array(3).fill(null).map(()=>Array(3).fill(''));

    const getBoard = ()=>{return array.slice()};

    const resetBoard = ()=>{
        for (let i = 0; i < array.length; ++i) {
            for (let j = 0; j < array[i].length; ++j) {
                array[i][j] = '';
            }
        }
    };

    const setTile = (i,j,val) => array[i][j]=val;

    const checkWin = ()=>{
        let c;
        if(array[0][0]===array[0][1] && array[0][0]===array[0][2])
            return array[0][0];
        if(array[1][0]===array[1][1] && array[1][0]===array[1][2])
            return array[1][0];
        if(array[2][0]===array[2][1] && array[2][0]===array[2][2])
            return array[2][0];

        if(array[0][0]===array[1][0] && array[0][0]===array[2][0])
            return array[0][0];
        if(array[0][1]===array[1][1] && array[0][1]===array[2][1])
            return array[0][1];
        if(array[0][2]===array[1][2] && array[0][2]===array[2][2])
            return array[0][2];

        if(array[0][0]===array[1][1] && array[0][0]===array[2][2])
            return array[0][0];
        if(array[2][0]===array[1][1] && array[2][0]===array[0][2])
            return array[2][0];

        return null;
    }

    return { getBoard, setTile, resetBoard, checkWin };
    
})();

const board = document.querySelector('#board')
for(let i=0; i<3; ++i){
    let row = document.createElement('div');
    for(let j=0; j<3; ++j){
        let col = document.createElement('div');
        col.addEventListener('click', ()=>{
            if(col.textContent===""){
                col.textContent = player.getMarker();
                gameBoard.setTile(i,j,col.textContent);
                player.switchPlayer();
                console.log(gameBoard.checkWin());
            }
        })
        row.appendChild(col);
    }
    board.appendChild(row);
}
