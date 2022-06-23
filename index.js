input = document.getElementById('input-el')
display = document.getElementById('display-el')
submitBtn = document.getElementById('submit-btn')
numbers = document.getElementById('numbers')


submitBtn.addEventListener('click', addZu);
input.addEventListener('keydown', (e)=>{
   if (e.key !== 'Enter') return
      whatHaveIDone()
      addZu()
      input.value = ""
      input.focus()
      
})

function whatHaveIDone(){
   numbers.textContent = "Du skrev: " + input.value
}

function addZu(){
   console.log('Click!')
   let val = input.value.split('');
   input.value = val.reduce((a,c)=> a + Number(c),0);
   display.textContent = "Summen blir: " + input.value;
}