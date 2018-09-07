
const LOAD_TITLE = 'chai/analysis/LOAD_TITLE';
const UPDATE_TITLE = 'chai/analysis/UPDATE_TITLE';
const LOAD_TITLE_FAIL = 'chai/analysis/LOAD_TITLE_FAIL'




const initialState ={
 count :1,
 title: 'for your eyes only',
}; 

function updateMovies(state= initialState, action){
    switch ( action.type){

        case 'UPDATE_TITLE':        
        const newState = Object.assign ( {}, state,{
            count:count+1,
            title: action.title
        });
        console.log ('this is from reducer:',newState);
        return newState.title;
        
        case 'LOAD_TITLE_FAIL':
        return state.error ;

        default :
        return state.title;
    }

}
export default updateMovies;