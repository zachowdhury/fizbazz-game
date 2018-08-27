
const LOAD_MOVIES = 'chai/analysis/LOAD_MOVIES';
const UPDATE_TITLE = 'chai/analysis/UPDATE_TITLE';


const initialState ={
    title :""
};

function updateTitle(state= initialState, action){
    switch ( action.type){

        case 'UPDATE_TITLE':
        
        const newState = Object.assign ( {}, state,{
            title:aciton.title
        });
        return newState.title;
        
        default :

        return state.title;
    }

}