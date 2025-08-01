const fastify = require('fastify')();

fastify.get('/events', (request, reply) => {
  reply.raw.setHeader('Content-Type', 'text/event-stream');
  reply.raw.setHeader('Cache-Control', 'no-cache');
  reply.raw.setHeader('Connection', 'keep-alive');

  const interval = setInterval(() => {
    reply.raw.write(`data: ${JSON.stringify({ time: new Date() })}\n\n`);
  }, 1000);

  request.raw.on('close', () => {
    clearInterval(interval);
  });
});

fastify.listen({ port: 3000 });