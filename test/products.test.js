const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')



describe('Getting products', () => {
    it('should return the name and ids of all products', async () => {
        const res = await request(app) .get('/api/products')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data') .to.deep.include({id: 1, name: "Laptop"})
        expect(res.body).to.have.property('data') .to.deep.include({id: 2, name: "Screen"})
    })
    it('should return the name and ids of a certain product', async () => {
        const res = await request(app) .get('/api/products/1')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data') .to.deep.equal({id: 1, name: "Laptop"})
    })
})