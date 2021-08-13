import _ from 'lodash';
import './style.css';
import Logo from './logo.jpg';  //这个Logo是指向这张图片的一个地址

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello','webpack']);
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element
}

document.body.appendChild(component());