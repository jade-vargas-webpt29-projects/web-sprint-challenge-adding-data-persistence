// build your `Project` model here
const db = require('../../data/dbConfig');

const getProjects = async () => {
  const projectRows = await db('projects as p');
  return projectRows;
};

// const create = (project) => {
//   return db('projects')
//     .insert(project)
//     .then(([id]) => {
//       return db('projects').where('project_id', id).first();
//     });
// };

const create = async (project) => {
  const [project_id] = await db('projects').insert(project);

  return {
    project_id: project_id,
    project_name: project.project_name,
    project_description: project.project_description,
    project_completed: project.project_completed ? true : false,
  };
};

module.exports = { getProjects, create };
