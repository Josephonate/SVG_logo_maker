class Shape {
    constructor(){
        this.color='';
        this.text='';
        this.shapeColor='';
    }
    setColor(color){
        this.color=color;
    }
    setText(text){
        this.text=text;
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor;
    }
}

class Circle extends Shape{
    render(){
    return ` <svg width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>
    <text x="100" y="120" font-size="75" text-anchor="middle" fill="${this.color}">${this.text}</text>
    </svg> `
    }
}
class Square extends Shape{
render(){
    return `<svg width="300" height="200">
    <rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}" />
    <text x="100" y="115" font-size="75" text-anchor="middle" fill="${this.color}">${this.text}</text>
  
  </svg>`
}
}
class Triangle extends Shape{
render(){
    return `<svg height="300" width="200">
    <polygon points="100,0 200,250 0,250" fill= "${this.shapeColor}" />
    <text x="100" y="175" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
  </svg>`
}
}

function generateLogo(answers){
    let myShape = new Triangle();
    if (answers.shape === "Circle") {
        myShape = new Circle();
    }
    if (answers.shape === "Square") {
        myShape = new Square();
    }
    myShape.setColor(answers.color);
    myShape.setText(answers.text);
    myShape.setShapeColor(answers.shapeColor);
    return myShape.render();
}

module.exports = {
    generateLogo, Triangle, Circle, Square
}

