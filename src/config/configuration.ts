export default () => ({
  port: parseInt(process.env.PORT, 10) || 4200,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || '',
    name: process.env.DATABASE_NAME || 'fwd',
  },
  api: {
    url: process.env.API_URL || 'https://api.fwd.co.th/dev-ecommerce',
  },
});
