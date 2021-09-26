// build your `Resource` model here
const getResources = () => {
  return Promise.resolve('Awesome Resource');
};

const create = (resource) => {
  return Promise.resolve(`Testing creation of ${resource}`);
};

module.exports = { getResources, create };
