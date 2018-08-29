
const LOAD_MOVIES = 'chai/analysis/LOAD_MOVIES';
const UPDATE_TITLE = 'chai/analysis/UPDATE_TITLE';


const initialState ={
 count :1,
 title: 'for your eyes only'
}; 

function updateMovies(state= initialState, action){
    switch ( action.type){

        case 'UPDATE_TITLE':
        
        const newState = Object.assign ( {}, state,{
            count:count+1,
            title: action.title
        });
        return newState.title;
        
        default :

        return state.title;
    }

}