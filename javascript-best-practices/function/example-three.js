// it is good not to perform multiple task in one function

// bad practice
function notifyUsers(users) {
    users.foreach((user) => {
        const userRecord = database.lookup(user);
        if(userRecord.isVerified()) {
            notify(user);
        }
    })
}

// good practice
function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).foreach(notify);
}

function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
}
