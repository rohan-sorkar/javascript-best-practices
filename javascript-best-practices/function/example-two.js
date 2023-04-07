// avoid too many arguments

// bad practice
function getProducts(fields, fromDate, toDate) {
    // implementation here
}

// good practice
function getProducts({fields, fromDate, toDate}) {
    // implementation here
}

// use default arguments value instead of conditions

// bad practice
function createShape(type) {
    const shapeType = type || "circle";
}

// good practice
function createShape(type = "circle") {
    //...
}