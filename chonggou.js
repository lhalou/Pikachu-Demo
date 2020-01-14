import str from './css.js'

const demo = document.querySelector('#demo');
const demo2 = document.querySelector('#demo2');



const player = {
    timerId: undefined,
    time: 100,
    n: 1,

    init: () => {
        demo.innerText = str.substr(0,player.n);
        demo2.innerHTML = str.substr(0,player.n);
        player.play();
        player.bindEvents();

    },
    events: {
        '#btnPause':'pause',
        '#btnPlay':'play',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents: () => {
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)) {
                const value = player.events[key];
                document.querySelector(key).onclick = player[value];
            }
        }
    },
    run: () => {
        player.n += 1;
        if(player.n > str.length) {
            window.clearInterval(player.timerId);
            return;
        }
        console.log(player.n + ':' + str.substr(0,player.n));
        demo.innerText = str.substr(0,player.n);
        demo2.innerHTML = str.substr(0,player.n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: () => {
        player.timerId = setInterval(player.run,player.time)
    },
    pause: () => {
        window.clearInterval(player.timerId)
    },
    slow: () => {
        player.pause();
        player.time = 300;
        player.play()
    },
    normal: () => {
        player.pause();
        player.time = 100;
        player.play();
    },
    fast:() => {
        player.pause();
        player.time = 50;
        player.play();
    }
};

player.init();





