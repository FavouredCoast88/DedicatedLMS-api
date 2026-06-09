const request = require('supertest');
const app = require('../index');
 
describe('Integration Tests', () => {
 
    test('GET / should return 200', async () => {
 
        const response =
            await request(app).get('/');
 
        expect(response.statusCode).toBe(200);
    });
 
    test('GET /articles should return 200', async () => {
 
        const response =
            await request(app).get('/articles');
 
        expect(response.statusCode).toBe(200);
    });
 
});