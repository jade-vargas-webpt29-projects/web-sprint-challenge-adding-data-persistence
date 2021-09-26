// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = async () => {
  const projectRows = await db('projects as p');
  return projectRows;
};

const create = (project) => {
  return db('projects')
    .insert(project)
    .then(([id]) => {
      return db('projects').where('project_id', id).first();
    });
};

module.exports = { getProjects, create };
