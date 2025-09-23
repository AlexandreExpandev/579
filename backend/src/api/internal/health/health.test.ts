import request from 'supertest';
import app from '@/server';

describe('GET /api/v1/internal/health', () => {
  it('should return 200 OK with health status when a fake token is provided', async () => {
    const res = await request(app)
      .get('/api/v1/internal/health')
      .set('Authorization', 'Bearer fake-token'); // Provide a token to satisfy the placeholder auth middleware

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('status', 'OK');
    expect(res.body.data).toHaveProperty('message', 'Internal API is healthy and operational.');
    expect(res.body.data).toHaveProperty('timestamp');
  });

  it('should also return 200 OK even without a token due to the current placeholder auth middleware', async () => {
    // NOTE: This test's expectation will change to 401 Unauthorized once the
    // placeholder authMiddleware is replaced with a real implementation.
    const res = await request(app).get('/api/v1/internal/health');

    expect(res.status).toBe(200);
  });
});
