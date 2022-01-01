let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/magic.jpeg') {
      myImage.setAttribute('src','images/transformation.jpeg');
    } else {
      myImage.setAttribute('src','images/magic.jpeg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserNameAgain();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey, what\'s good, ' + myName + '?';
    }
}

function setUserNameAgain() {
    let myName = prompt('Stop fucking playing with me. Put in a goddamn name this time.');
    if(!myName) {
        setUserNameAgain();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey, what\'s good, ' + myName + '?';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome back, ' + storedName + "!";
    myImage.setAttribute('src','images/transformation.jpeg');
}

myButton.onclick = function() {
    setUserName();
    myImage.setAttribute('src','images/transformation.jpeg');
}