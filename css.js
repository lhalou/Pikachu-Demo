const str = `
.skin * {box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after {box-sizing: border-box;}

.skin {
    background: #ffe600;
    min-height: 50vh;
    position: relative;
}
.nose {
    position: relative;
    width: 0;
    height: 0;
    border: 10px solid;
    border-color: black transparent transparent;
    border-bottom: none;
    top: 145px;
    left: 50%;
    margin-left: -10px;
    z-index: 2;
}
@keyframes wave {
    0%{
      transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin: 50% 100%;
    animation: wave 300ms infinite linear;
}
.yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}
.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before {
    content:'';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 4px;
}
.eye.left {
    transform: translate(-100px);
}
.eye.right {
    transform: translate(100px);
}
.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
}
.lip {
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
}
.lip.left::after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    position: absolute;
    top: -3px;
    background: #ffe600;
}
.lip::before {
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: #ffe600;
}

.lip.left {

    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translate(-53px);

}
.lip.left::before {
    right: -6px;
}

.lip.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translate(53px);
}

.lip.right::before {
    left: -6px;
}

.mouth .down {
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 3px solid #000;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    bottom: 0;
    width: 150px;
    height: 1000px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}

.yuan2 {

    width: 200px;
    height:300px;
    position: absolute;
    bottom: -160px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
    background: #ff485f;
}
.face {
    position: absolute;
    left: 50%;
    border:3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
    background: #ff0000;
    border-radius: 50%;
}
.face > img {
    position: absolute;
    top: 50%;
    left: 50%;

}

.face.left {
    transform: translateX(-180px);
}
.face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
.face.right {
    transform: translateX(180px);
}

`;
export default str;