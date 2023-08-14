// Parent Class

export class Shape {
    // all shapes will have a color
    constructor(shapeColor) {
        this.color = shapeColor
    }
    // all shapes will have their own individual render functions, children will overwrite the parent or an error will throw

    render(){
        throw new Error("Child class must use render() method")
    }
}

// Children Classes

export class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="105" r="70" fill="${this.color}"/>`;
    }
        
}

export class Square extends Shape {
    render () {
        return `<rect x="90" y="45" width="120" height="120" fill="${this.color}" />`;
    }
}

export class Triangle extends Shape {
    render (){
        return `<polygon points="150, 20 245, 140 50, 140" fill="${this.color}" />`;
    }
}


