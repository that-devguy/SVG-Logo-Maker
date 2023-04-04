// Jest tests for shapes
const {Triangle, Square, Circle} = require('../lib/shapes');

describe('Triangle', () => {
    // Tests that the triangle's setColor is working properly
    test('Should set color of the triangle', () => {
        const triangle = new Triangle('#000000')
        expect(triangle.setColor()).toBe('#000000')
    })
    // Tests that the triangle is being rendered with the correct shape and color fill
    test('Should render the triangle with the set color', () => {
        const triangle = new Triangle('#000000')
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#000000" />')
    })
})

describe('Square', () => {
    // Tests that the square's setColor is working properly
    test('Should set color of the square', () => {
        const square = new Square('#abc988')
        expect(square.setColor()).toBe('#abc988')
    })
    // Tests that the square is being rendered with the correct shape and color fill
    test('Should render the square with the set color', () => {
        const square = new Square('#abc988')
        expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="#abc988" />')
    })
})

describe('Circle', () => {
    // Tests that the circle's setColor is working properly
    test('Should set color of the circle', () => {
        const circle = new Circle('#fddfff')
        expect(circle.setColor()).toBe('#fddfff')
    })
    // Tests that the circle is being rendered with the correct shape and color fill
    test('Should render the circle with the set color', () => {
        const circle = new Circle('#fddfff')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#fddfff" />')
    })
})
