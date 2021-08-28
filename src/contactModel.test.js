const contactModel = require("./contactModel")
// @ponicode
describe("contactModel.saveContact", () => {
    test("0", () => {
        let callFunction = () => {
            contactModel.saveContact("Apple Inc.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            contactModel.saveContact("Ponicode")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            contactModel.saveContact("Microsoft Corporation")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            contactModel.saveContact("Maggio, Hermiston and Schowalter")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            contactModel.saveContact("Facebook, Inc.")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            contactModel.saveContact(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
