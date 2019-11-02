import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Form, Input } from 'rfv'
import { MainContext } from '~/src/frontend/js/context/MainContext'
import validations from '~/src/common/validations'



const TodoEkle = () =>{
  const todoInput = document.getElementById('todoInput')
  const [state, setState] = useContext(MainContext)
  const todolar = state.todolar
  const toplamOge = Object.keys(todolar).length

  let yapilan = 0
  let yapilmayan = 0

  Object.keys(todolar).map((key) => {
    const todo = todolar[key]
    if (todo.yapildi === 'true') {
      yapilan++
    } else {
      yapilmayan++
    }
  })

  const postSubmit = (res) => {
    if (res.data.success) {

      const yeniOge = {
        todo: res.data.valid.todo,
        yapildi: 'false'
      }

      todolar[res.data.valid.id] = yeniOge

      const yeniTodolar = Object.assign({}, todolar)

      setState(() => ({
        todolar: yeniTodolar
      }))
      todoInput.value =""
      console.log(res.data.valid)
    } else if (res.data.error) {
      console.log(res.data.error)
    }
  }

	return(
		<div id='todoEkle'>
      <Form
        postSubmit={postSubmit}
        postOptions={{ method: 'post', url: '/todo-ekle' }}
      >
        <div className='form-group'>
          <Input 
            id='todoInput'
            type='text' name='todo' 
            placeholder='Lütfen Bir Görev Girin...' 
            className='form-control form-control-lg' 
            validations={validations.todoAdd.todo} />
        </div>
        <button>Ekle</button>
      </Form>
      <div className='toplamOge'>
        <div>Toplam: {toplamOge}</div>
        <div>Yapılan: {yapilan}</div>
        <div>Yapılmayan: {yapilmayan}</div>
      </div>
    </div>
	)
}

export default TodoEkle