import { Shape }from "../lib/shapes.js";

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
