function canDrinkBetter(person) {
    if(person?.age == null) {
        console.log('you are not a person');
        return;
    }
    const result = canDrinkResponse(person.age);
    console.log(result);
}

function canDrinkResponse(age) {
    if(age < 18) return 'Nope🙂';
    if(age < 21) return 'Not in the Us😕';
    return 'Yes✅';
}

const person = {
    age: undefined
};

canDrinkBetter(person);