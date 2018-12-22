export default {
  modules: [
    '../../modules/nuxt-redis',
    '../../modules/nuxt-postgresql',
    '../../modules/nuxt-services'
  ],
  services: {
    cache: ['redis', {
      host: 'redis-17954.c62.us-east-1-4.ec2.cloud.redislabs.com',
      port: 17954,
      auth: 'S7otcL62bC2Sy5Y0eoaviGJqbMKwjoP1',
      db: 'nuxt-cache'
    }],
    db: ['postgresql', {
      connectionString: 'postgres://xegxblez:8TNSEwUTbGA3756-11dis2RsE0c0cFTV@baasu.db.elephantsql.com:5432/xegxblez'
    }]
  }
}
