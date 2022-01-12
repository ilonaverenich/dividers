let input = document.querySelector('.input').value;
let button = document.querySelector('.button');
let inputValue = document.querySelector('.inputValue');


function del (){ 
  let num = +document.querySelector('.input').value

  if (!isNaN(num)){
   let result =[];
   for (let i=1; i<=num; i++){
      if (num % i == 0){
         result.push(i)
      } 
   }

   inputValue.innerHTML =`Делители числа ${num}:  ${result}` ;
  input.value =''
  }
  else{
   inputValue.innerHTML =`Вы ввели некорректные данные!` ;
  }
}










  
