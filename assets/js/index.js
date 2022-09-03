const buttons=document.querySelectorAll('.home-side button');
const folder=document.querySelector('.btnn');
const input=document.querySelector('#folder');

buttons.forEach(function(btn,index){
    btn.addEventListener('click',function(){
       buttons.forEach(function(e){
        e.classList.remove('active')
       })
       buttons[index].classList.add('active');
    })
})
function myfunction(){
  const file=document.getElementById('files').click();
  file.style.display='block';
  
}