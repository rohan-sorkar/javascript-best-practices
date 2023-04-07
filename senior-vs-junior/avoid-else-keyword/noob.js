function canDrink(person) {
    if(person?.age != null) {
        if(person.age < 18){
            console.log('Nope🙂')
        } else if(person.age < 21) {
            console.log('Not in the Us😕')
        } else {
            console.log('Yes✅')
        }
    } else {
        console.log('you are not a person');
    }
}

const person = {
    age: 25
};

canDrink(person);

