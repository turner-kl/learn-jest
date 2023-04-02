import request from 'supertest';

import app from './app';

describe('POST /check-post', () => {
  it('responds with message', async () => {
    const response = await request(app)
      .post('/check-post')
      .send({
        yearsOfService: 5,
        isDisability: false,
        isOfficer: false,
        severancePay: 1000000,
      });

    expect(response.status).toBe(404);
  });
});
