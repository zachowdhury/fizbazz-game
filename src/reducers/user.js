const LOAD_USER =       'chai/analysis/LOAD_USER'
const LOAD_USER_FAIL=   '/chai/analysis/LOAD_USER_FAIL'
const UPDATE_USER =  '/chai/analysis/UPDATE_USER'

const initialState ={
    count :1,
    users:  []
   }; 
   
   function updateUsers(state= initialState, action={}){
       
    switch ( action.type){
        case 'LOAD_USER':
        return state.users;

       case 'UPDATE_USER':        
       const newState = Object.assign ( {}, state,{
               users: state.users
      
        });
  
        console.log ('this is from reducer:',newState);
          return newState.users;
           
          case 'LOAD_USER_FAIL':
          return state.error ;
   
        default :
        return state.users;
      
    }
   
   }
   export default updateUsers;
   export function updateData (){
       return{
       type:[LOAD_USER,UPDATE_USER],
       data : ()=>{

       }};
   }