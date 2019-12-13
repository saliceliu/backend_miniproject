const request = require('supertest')
const expect = require('chai').expect
const app = require('../index')

describe('Getting users', () => {
    it('should return the name and ids of all users', async () => {
        const res = await request(app) .get('/api/users')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.property('data') .to.deep.include({id: 1, name: "Tom Holland"})
        expect(res.body).to.have.property('data') .to.deep.include({id: 2, name: "Tom Hiddleston"})
    })
})