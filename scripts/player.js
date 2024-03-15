const player = (()=>{
    let _currentMarker="X";
    
    const resetMarker = ()=>{_currentMarker="X";}
    const getMarker = ()=>{return _currentMarker};
    const switchMarker = ()=>{
        _currentMarker=='O'?_currentMarker="X":_currentMarker="O"
    }


    return {resetMarker, getMarker, switchMarker};
})();

export { player };