// build your `Resource` model here
const db = require('../../data/dbConfig');

const getResources = async () => {
  const resourceRows = await db('resources as r');
  return resourceRows;
};

const create = (resource) => {
  return db('resources')
    .insert(resource)
    .then(([id]) => {
      return db('resources').where('resource_id', id).first();
    });
};

module.exports = { getResources, create };
