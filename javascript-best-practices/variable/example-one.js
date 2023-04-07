// give a meaningful name in a variable

// bad practice 
const daysll = 10;

let okk;

if(daysll < 30) {
    okk = true
}

// good practice
const MAX_ALLOWED_LOGIN_EXPIRATION_DAYS = 30;

const daysSinceLastLogin = 10;

const isUserLoggedIn = daysSinceLastLogin < MAX_ALLOWED_LOGIN_EXPIRATION_DAYS;