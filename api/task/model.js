// build your `Task` model here
const getTasks = () => {
  return Promise.resolve('Awesome Task');
};

const create = (task) => {
  return Promise.resolve(`Testing creation of ${task}`);
};

module.exports = { getTasks, create };
