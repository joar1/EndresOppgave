input = document.getElementById('input-el')
display = document.getElementById('display-el')
submitBtn = document.getElementById('submit-btn')

submitBtn.addEventListener('click', addZu);



function addZu(){
   console.log('Click!')
   let val = input.value.split('');
   console.log(val)
   input.value = val.reduce((a,c)=> a + Number(c),0);
   display.textContent = input.value;
}