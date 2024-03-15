import { player } from "./player.js";

const board = (()=>{
    let _array = new Array(3).fill(null).map(()=>Array(3).fill(null));
    let _state = true;
    
    const resetBoard = ()=> {
        player.resetMarker();
        for(let i=0 ; i<3 ; ++i)
            for(let j=0 ; j<3 ; ++j) {
                _array[i][j] = '';
            }
    }

    const getBoard = () => {
        return _array.splice();
    }

    const setTile = (i,j,val) => {
        _array[i][j] = val;
    }

    const checkWin = () => {

        //rows
        if(_array[0][0] && _array[0][1] && _array[0][2]
            && _array[0][0]===_array[0][1] && _array[0][0]===_array[0][2])
                return _array[0][0];

        if(_array[1][0] && _array[1][1] && _array[1][2]
            && _array[1][0]===_array[1][1] && _array[1][0]===_array[1][2])
                return _array[1][0];

        if(_array[2][0] && _array[2][1] && _array[2][2]
            && _array[2][0]===_array[2][1] && _array[2][0]===_array[2][2])
                return _array[2][0];

        //columns
        if(_array[0][0] && _array[1][0] && _array[2][0]
            && _array[0][0]===_array[1][0] && _array[0][0]===_array[2][0])
                return _array[0][0];

        if(_array[0][1] && _array[1][1] && _array[2][1]
            && _array[0][1]===_array[1][1] && _array[0][1]===_array[2][1])
                return _array[0][1];

        if(_array[0][2] && _array[1][2] && _array[2][2]
            && _array[0][2]===_array[1][2] && _array[0][2]===_array[2][2])
                return _array[0][2];

        //diagonals
        if(_array[0][0] && _array[1][1] && _array[2][2]
            && _array[0][0]===_array[1][1] && _array[0][0]===_array[2][2])
                return _array[0][0];

        if(_array[0][2] && _array[1][1] && _array[2][0]
            && _array[0][2]===_array[1][1] && _array[0][2]===_array[2][0])
                return _array[0][2];

        if(_array[0][0] && _array[0][1] && _array[0][2] &&
            _array[1][0] && _array[1][1] && _array[1][2] && 
            _array[2][0] && _array[2][1] && _array[2][2] )
                return "TIE";

        return undefined;

    }

    const enableState = () => {_state = true};
    const disableState = () => {_state = false};
    const getState = () => {return _state};

    return { resetBoard , setTile , checkWin , getBoard , enableState, disableState , getState };

})();

export { board };