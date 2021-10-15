
const pressed = [];

const secretCode = 'anabeatriz';

window.addEventListener('keyup', (e) => {

  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

  if (pressed.join('').includes(secretCode)) {

    console.log('YOU DID IT');
    cornify_add();

  }

});