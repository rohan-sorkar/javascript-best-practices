
// bad practice
const users = ['rofik', 'shofik', 'anando', 'nasim'];

for(let i = 0; i < users.length; i++) {
    //do something...
}

// good practice
const users2 = ['rofik', 'shofik', 'anando', 'nasim'];

const usersLength = users2.length;

for(let i = 0; i < usersLength; i++) {
    //do something...
}