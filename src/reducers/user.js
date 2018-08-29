const LOAD_USER =       'chai/analysis/LOAD_USER'
const LOAD_USER_FAIL=   '/chai/analysis/LOAD_USER_FAIL'
const UPDATE_USER =  '/chai/analysis/UPDATE_USER'








const initialState ={
    count :1,
    title: 'for your eyes only',
   }; 
   
   function updateMovies(state= initialState, action={}){
       switch ( action.type){
   

        case 'LOAD_USER':
        return state.users;

       case 'UPDATE_USER':        
       const newState = Object.assign ( {}, state,{
               count:count+1,
               title: action.title
      
        });
  
        console.log ('this is from reducer:',newState);
          return newState.title;
           
          case 'LOAD_USER_FAIL':
          return state.error ;
   
        default :
        return state.title;
      
    }
   
   }