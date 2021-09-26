// build your `Project` model here
const getProjects = () => {
  return Promise.resolve('Awesome Project');
};

const create = (project) => {
  return Promise.resolve(`Testing creation of ${project}`);
};

module.exports = { getProjects, create };
