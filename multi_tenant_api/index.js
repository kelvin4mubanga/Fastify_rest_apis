const fastify = require('fastify')();

function tenantPlugin(fastify, options, done) {
  fastify.get('/data', async (request, reply) => {
    return { tenant: options.tenant, data: `Data for ${options.tenant}` };
  });
  done();
}

fastify.register(tenantPlugin, { prefix: '/tenant1', tenant: 'Tenant One' });
fastify.register(tenantPlugin, { prefix: '/tenant2', tenant: 'Tenant Two' });

fastify.listen({ port: 3001 });