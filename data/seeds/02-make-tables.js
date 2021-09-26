const projects = [
  {
    project_name: 'Write a book',
    project_description: '250 page fantasy novel',
  },
  { project_name: 'Workout' },
  { project_name: 'Eat Healthy' },
];

const resources = [
  // Write a book
  {
    resource_name: 'Pen',
    resource_description: 'Black ink works the best vs red ink',
  },
  { resource_name: 'Paper' },
  // Workout
  {
    resource_name: 'Dumbells',
    resource_description: '50lbs or more, 100lbs is too much',
  },
  // Eat Healthy
  { resource_name: 'Meal Planner' },
  {
    resource_name: 'Vegetables',
    resource_description: 'Broccoli is super healthy!',
  },
];

const tasks = [
  // Write a book
  {
    task_description: 'Write for 1 hour per day',
    task_notes: 'Do not get overwhelmed!',
    project_id: 1,
  },
  { task_description: 'Proofread copy', project_id: 1 },
  { task_description: 'Send copy to professional editor', project_id: 1 },
  // Workout
  { task_description: 'Go to gym', task_completed: 1, project_id: 2 },
  { task_description: 'Lift Weights', project_id: 2 },
  //Eat Healthy
  { task_description: 'Buy fruits and vegetables', project_id: 3 },
  {
    task_description: 'Make a healthy meal instead of ordering out',
    project_id: 3,
  },
];

const project_resources = [
  { project_id: 1, resource_id: 1 },
  { project_id: 1, resource_id: 2 },
  { project_id: 2, resource_id: 3 },
  { project_id: 3, resource_id: 4 },
  { project_id: 3, resource_id: 5 },
];

exports.seed = async function (knex) {
  await knex('projects').insert(projects);
  await knex('resources').insert(resources);
  await knex('tasks').insert(tasks);
  await knex('project_resources').insert(project_resources);
};
