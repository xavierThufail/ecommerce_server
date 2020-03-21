const env = process.env.NODE_ENV || 'development';
switch (env) {
  case 'development':
    require('dotenv').config({path: process.cwd() + '/.env'})
    break;
  case 'test':
    require('dotenv').config({path: process.cwd() + '/.env.test'})
    break;
  default:
    break;
}

module.exports = {
  "use_env_variable": "DATABASE_URL"
}