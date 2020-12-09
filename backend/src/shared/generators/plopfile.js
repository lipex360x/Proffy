module.exports = function (plop) {
  // controller generator
  plop.setGenerator('module', {
    description: 'Create a Module',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Module name please'
    }],
    actions: [
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/.gitkeep'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/repositories/.gitkeep'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/services/.gitkeep'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/http/controllers/.gitkeep'
      },
      {
        type: 'add',
        path: '../../modules/{{camelCase name}}/infra/http/routes/{{camelCase name}}.routes.ts',
        templateFile: 'templates/index.ts.hbs'
      }

    ]
  })
}
