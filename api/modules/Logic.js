


// @@ logical statements 

export default function fizbuzzLogic(numbers){
  //var numbers=[];
  //var comment = "";
 //var numbers= [5,6,9,87,5];
 var results =   numbers.map( (e)=>{
     
    if ( e%15 == 0 ){
      console.log ('fiz-buzz'+'>> '+e);
      return   e+"<<fiz-buzz";

    }else if( e%5 == 0 ){
      console.log ('buzz'+'>> '+e);
      return e+"<<buzz";
    }else if ( e%3==0 ){
      console.log ('fiz'+'>> '+e);
      return e+'<<fiz';
    }else{
      console.log (e);
      return e+'<<';
    }
   });
             
 return results;
}
// @@
export function multiply(x,y){
    return {result: x*y};
}
// @@
export function fizbuzIntro(){
    console.log ('game start');
}
