const premade = {
  todo: [
    {
      rule: 'isLength',
      args: { min: 1 },
      invalidFeedback: 'Bu Alanı Boş Geçemezsiniz'
    }
  ]
}

const validations = {
  todoAdd: {
    todo: premade.todo,
    password: premade.password
  }
}

module.exports = validations
