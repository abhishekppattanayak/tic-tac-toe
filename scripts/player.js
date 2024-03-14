const player = (()=>{
    let currentPlayer = 0;

    const getPlayer = ()=>{return currentPlayer};
    const switchPlayer = ()=>{currentPlayer==0?currentPlayer=1:currentPlayer=0;}
    const getMarker = ()=>{
        if(getPlayer()==0)
            return 'X';
        return 'O';
    }

    return { getPlayer, switchPlayer , getMarker };
})();

export { player };