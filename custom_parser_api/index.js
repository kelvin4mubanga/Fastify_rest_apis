const fastify = require('fastify')();

fastify.addContentTypeParser('text/csv', { parseAs: 'string' }, function (req, body, done) {
  const lines = body.split('\n');
  const result = lines.map(line => line.split(','));
  done(null, result);
});

fastify.post('/csv', async (request, reply) => {
  return { parsed: request.body };
});

fastify.listen({ port: 3004 });