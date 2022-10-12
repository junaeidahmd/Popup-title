const verify=document.querySelector('.verify');
const verified=document.querySelector('.verified');
const verification=document.querySelector('.verification-code-section');
const confirm=document.querySelector('#confirm-code');
const cancel=document.querySelector('.cancel');
const cancel2=document.querySelector('#cancel');

const popup=document.querySelector('.popup');

verify.addEventListener('click',function(){
    popup.classList.add('active');
    popup.style.display='block';
    verification.style.display='block';
    document.body.style.background='rgba(0,0,0,0.7)';
    popup.style.transition=" 0.2s";
})
cancel.addEventListener('click',function(){
    popup.classList.remove('active');
    document.body.style.background='rgba(0,0,0,0)';
})

verified.addEventListener('click',function(){
    verification.classList.add('active');
    popup.classList.remove('active');
    
})

function reload() {
    verification.style.display='none';
    popup.classList.remove('active');
    reload = location.reload();
    document.body.style.background='rgba(0,0,0,0)';
}
confirm.addEventListener('click',function(){
    verify.innerHTML='Verified';
    verify.disabled=true;
    popup.classList.remove('active');
    verification.style.display='none';
    document.body.style.background='rgba(0,0,0,0)';
})