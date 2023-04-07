// use `Object.assign` to set default object value

// bad practice
const shapeConfig = {
    type: "circle",
    width: 150,
    height: null
}

function createShape(config) {
    config.type = config.type || circle
    config.width = config.width || 300
    config.height = config.height || 300
}
createShape(shapeConfig);

// good practice
const shapeConfig = {
    type: "circle",
    width: 150
}

function createShape(config) {
  config = Object.assign(
    {
      type: "circle",
      width: 300,
      height: 300,
    },
    config
  );
}
createShape(shapeConfig);