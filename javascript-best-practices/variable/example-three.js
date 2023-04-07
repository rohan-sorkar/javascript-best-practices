// give a name so that we don't need to remember the purpose of that in later

// bad practice
const products = ['Headphone', 'sunglass', 'T-shirt', 'Bag'];

products.forEach((p) => {
    doSomething();
    // what does `p` stand for
    doSomethingElse(p);
});

// good practice 
const products2 = ['Headphone', 'sunglass', 'T-shirt', 'Bag'];

products2.forEach((product) => {
    doSomething();
    doSomethingElse(product);
});