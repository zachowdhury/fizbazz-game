


// @@ logical statements 

export default async function fizbuzzLogic(numbers){
  //var numbers=[];
  //var comment = "";
 //var numbers= [5,6,9,87,5];
 if (numbers =='null'){
   return ['No numbers provided'];
 }
 if (numbers ==='string'){
   console.log (true);
 }

 var arrNumbers= numbers.split(",").map(Number);

 var results =   arrNumbers.map( (e)=>{
     
    if ( e%15 == 0 ){
      //console.log ('fiz-buzz'+'>> '+e);
      return   e+" <fiz-buzz>";

    }else if( e%5 == 0 ){
      //console.log ('buzz'+'>> '+e);
      return e+" <buzz>";
    }else if ( e%3==0 ){
      // console.log ('fiz'+'>> '+e);
      return e+' <fiz>';
    }else{
      // console.log (e);
      return e;
    }
   });
//  console.log ('result printed >>>',results);            
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
