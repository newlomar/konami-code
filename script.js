
const pressed = [];

const secretCode = 'newton';

window.addEventListener('keyup', (e) => {

  pressed.push(e.key);
  console.log(pressed.length)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  if (pressed.join('').includes(secretCode)) {

    console.log('YOU DID IT');
    cornify_add();

  }

});