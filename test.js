const bcrypt = require('bcrypt');
const myPlaintextPassword = 'Test12345!';
const saltRounds = 10;

const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

console.log('хешированный пароль', hash);

const go = bcrypt.compareSync('asdf234', hash); // true

console.log(go);
