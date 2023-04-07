function canDrinkBetter(person) {
    if(person?.age == null) {
        console.log('you are not a person');
        return;
    }
    if(person.age < 18){
        console.log('Nope🙂')
        return;
    } 
    if(person.age < 21) {
        console.log('Not in the Us😕')
        return;
    }
    console.log('Yes✅')
}

const person = {
    age: 25
};

canDrinkBetter(person);