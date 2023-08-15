import { Shape, Circle, Square, Triangle }from "../lib/shapes.js";

// Shape 
describe('Shape', () => {
  it('renders with correct color', () => {
    var color = 'red'
    const shape = new Shape(color)
    expect (shape.color).toBe(color)
    
  })
  it('throw an error if call render on Shape', () => {
    var color = "red";
    const shape = new Shape(color);
    const foo = () => shape.render()
    expect(foo).toThrow(Error("Child class must use render() method"));
  })
})

// Circle

describe('Circle', () => {
  it('renders with correct dimensions', () => {
    const circle = new Circle()
    expect(circle.render()).toEqual(
      `<circle cx="150" cy="105" r="70" fill="${circle.color}"/>`
    );
  })
})

// Square 
describe('Square', () => {
  it('renders with correct dimensions', () => {
    const square = new Square()
    expect(square.render()).toEqual(
      `<rect x="90" y="45" width="120" height="120" fill="${square.color}" />`
    );
  })
})

// Triangle
describe('Triangle', () => {
  it('renders with correct dimensions', () => {
    const triangle = new Triangle()
    expect(triangle.render()).toEqual(
      `<polygon points="150, 20 245, 140 50, 140" fill="${triangle.color}" />`
    );
  })
})