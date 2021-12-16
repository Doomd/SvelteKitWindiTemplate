import Prompt from 'enquirer'
const { prompt } = Prompt

let response
prompt({
  type: 'confirm',
  name: 'release',
  message: 'Do you want to still want to deploy to master?',
  initial: true,
})
  .then(answer => console.log('Answer:', answer))
  .then(answer => {
    response = answer
    console.log('response', response)
  })
// .then(answer => console.log('Answer:', JSON.stringify(answer)))
