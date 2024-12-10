const UserRegistry = require('../models/UserRegistry');

const registry1 = new UserRegistry();
const registry2 = new UserRegistry();

console.log(registry1 === registry2); // true
registry1.addUser({ name: 'Alice' });
console.log(registry2.getUsers()); // [{ name: 'Alice' }]
