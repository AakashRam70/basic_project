const request = require('supertest');
const app = require('../app');
let token;

beforeAll(async () => {
    const res = await request(app)
        .post('/api/login')
        .send({ email: 'test@example.com', password: 'password123' });

    token = res.body.token;
});

test('should schedule email', async () => {
    const res = await request(app)
        .post('/api/schedule-email')
        .set('Authorization', `Bearer ${token}`)
        .send({
            email: 'recipient@example.com',
            subject: 'Test Subject',
            text: 'Test body'
        });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Email scheduled to be sent in 1 hour');
});
