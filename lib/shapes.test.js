const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    it("should set color for circle",()=>{
    const myColor = "blue";
    const myShape = new Circle();
    myShape.setColor(myColor);

    expect(myShape.color).toEqual(myColor);
});
});

describe('Square', () => {
    it("should set color for Square",()=>{
    const myColor = "blue";
    const myShape = new Square();
    myShape.setColor(myColor);

    expect(myShape.color).toEqual(myColor);
});
});

describe('Triangle', () => {
    it("should set color for Triangle",()=>{
    const myColor = "blue";
    const myShape = new Triangle();
    myShape.setColor(myColor);

    expect(myShape.color).toEqual(myColor);
});
});

