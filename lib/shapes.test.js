const {Circle} = require("./shapes")

describe("can set color",()=>{
    const myColor = "blue";

    const myShape = new Circle();
    myShape.setColor(myColor);

    expect(myShape.color).toEqual(myColor);
})