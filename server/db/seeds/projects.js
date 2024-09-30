export async function seed(knex) {
  //DELETE ALL EXISTING SEEDS
  await knex('projects').del()

  //INSERT DATA
  await knex('projects').insert([
    {
      id: 1,
      name: 'pawpals',
      logo: 'pawpals.png',
      description:
        'A meetup site based around pets, create your personal account and set up pet profiles, create events and attend!',
      link: 'https://pawpals.pushed.nz/',
    },
    {
      id: 2,
      name: 'snakes on a garlic',
      logo: 'snakeGarlic.png',
      description:
        'One of our single day projects from Dev, with only about 8 hours to plan, code and present, we made a movie suggestor with a haunted theme.',
      link: 'https://github.com/matai-2024/Snakes-on-a-garlic',
    },
    {
      id: 3,
      name: 'todo fullstack',
      logo: 'todo.png',
      description: 'a basic fullstack todo list',
      link: 'https://github.com/matai-2024/Snakes-on-a-garlic',
    },
  ])
}
