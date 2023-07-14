const button=document.querySelector('button');
const body = document.querySelector('body');
const color =['pink','yellow','red','grey','green','blue'];
body.style.backgroundColor='orange';
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
  

})