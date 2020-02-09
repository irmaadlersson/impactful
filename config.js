/**
 * This is the root configuration file
 * Add as many keys / objects as you need for the different services you would use
 *
 * An object for contentful is placed here as an example, use it or remove it :)
 *
 * Just keep credentials and environment-specific out of here*
 * Instead, put them both in .env and an empty value in .env.example
 * and inject them into this configuration using process.env.[NAME_OF_YOUR_VARIABLE]
 */
const config = {
  app: {
    // enable SW: by default, only in production, but you can turn it on locally if you wish to debug it
    enableSW: ['production'].includes(process.env.NODE_ENV),
    baseUrl: process.env.APP_BASE_URL
  }
  // contentful: {
  //   space: '',
  //   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  // }
};

export default config;
