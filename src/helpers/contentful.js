import { createClient } from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'tbvl1hcxicfs',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'JzgFSTRd5dKI1-Jp_gTVnqmlTF25lnDLbtDBU5SRvoU'
});

export default client;
