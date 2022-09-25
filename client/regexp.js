// Compare two input fields in js
function compare_input(){
   var f_input=document.getElementById('first_input').value;
   var s_input=document.getElementById('second_input').value;
   if(f_input===s_input){
     

     
      alert('true');
   }
   else if(f_input != s_input){
     alert('false');

   }
 }