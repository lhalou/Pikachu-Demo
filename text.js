import str from './css.js';
let n = 1;
demo.innerText = str.substr(0,n);  //写css
demo2.innerHTML = str.substr(0,n); //起始必须存在，否则第一次将打出两个字，让css生效

let time = 100;
const play = () => {
    n += 1;
    if(n > str.length){
        window.clearInterval(timerId);
        return;
    }
    console.log( n +':' + str.substr(0,n));
    demo.innerText = str.substr(0,n);
    demo2.innerHTML = str.substr(0,n);
    demo.scrollTop = demo.scrollHeight; //实现用户拉滚动条的行为
};
let timerId = setInterval(function(){
    play()
},time);
btnPause.onclick = () => {
  clearInterval(timerId)
};
btnPlay.onclick = () => {
    timerId = setInterval(function(){
        play()
    },time);
};
btnSlow.onclick = () => {
    clearInterval(timerId);
    time = 300;
    timerId = setInterval(function(){
        play()
    },time);
};
btnNormal.onclick = () => {
    clearInterval(timerId);
    time = 100;
    timerId = setInterval(function(){
        play()
    },time);
};
btnFast.onclick = () => {
    clearInterval(timerId);
    time = 0;
    timerId = setInterval(function(){
        play()
    },time);
};