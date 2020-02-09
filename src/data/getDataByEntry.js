import client from 'helpers/contentful.js';

const getEntriesOfType = entryId => client.getEntry(entryId);

export default getEntriesOfType;
