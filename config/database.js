module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'colleen_fletcher_dev'),
        username: env('DATABASE_USERNAME', 'isiah'),
        password: env('DATABASE_PASSWORD', 'E@rthisac0mputer'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
