const fastify = require('fastify')();

fastify.addHook('onRequest', async (request, reply) => {
  console.log('Request received:', request.raw.url);
});

fastify.addHook('preHandler', async (request, reply) => {
  request.headers['x-custom-header'] = 'fastify-was-here';
});

fastify.get('/log', async (request, reply) => {
  return { message: 'Logged with hooks' };
});

fastify.listen({ port: 3002 });