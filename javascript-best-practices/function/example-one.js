// try to give long and descriptive name in a function

//bad practice
function email(user) {
    //implementation
}

//good practice
function sendEmailToUser(user) {
    //implementation
}


// we should use descriptive nouns and verbs as prefixes. For example, if we 
// declare a function to retrieve a name, the function name should be getName.

// bad
function name(dogName, ownerName) { 
    return '${dogName} ${ownerName}';
}
  
// good
function getName(dogName, ownerName) { 
    return '${dogName} ${ownerName}';
}