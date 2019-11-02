import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { MainContext } from '~/src/frontend/js/context/MainContext'

const TodoListele = () =>{
  const [state, setState] = useContext(MainContext)
  const todolar = state.todolar

  console.log(todolar)

  useEffect(() => {
    axios.post('/todo-listele')
    .then(res => {
      setState(() => ({
        todolar: res.data.data
      }))
    })
  }, [])

  const todoSil = (key,todoId) =>{
    axios.post('/todo-sil',{params: {id: todoId}})
      .then(ress => {
        delete todolar[key]
        const yeniTodolar = Object.assign({}, todolar)
        setState(() => ({
          todolar: yeniTodolar
        }))
      })
  }

  const todoGuncelle = (key,todoId) =>{
    const yapildi = todolar[key].yapildi
    const yeniDeger = yapildi === 'true' ? 'false':'true'
    axios.post('/todo-guncelle',{params: {id: todoId,yapildi:yeniDeger}})
      .then(ress => {
        todolar[key].yapildi =yeniDeger
        const yeniTodolar = Object.assign({}, todolar)
        setState(() => ({
          todolar: yeniTodolar
        }))
      })
  }
 
	return(
		<div id='todolariListele'>
      {Object.keys(todolar).length ? (
        Object.keys(todolar).map((key) => {
          const todo = todolar[key]
          const yapildiClassName = todo.yapildi === 'true' ? ' yapildi' : ''
          const yapildiChecked = todo.yapildi === 'true'

          return(
            <div key={key} className='todolar'>
              <div className={`todo${yapildiClassName}`}>
                <input 
                  type='checkbox'
                  defaultChecked={yapildiChecked}
                  onChange={() => todoGuncelle(key,todo._id)}
                />
                <div className='baslik'>
                  {todo.todo}
                </div>
                <button className='sil' onClick={() => todoSil(key,todo._id)}>Sil</button>
              </div>
            </div>
          )
        })
      ):(
        <div className='todo'>Henüz hiç todo eklenmedi.</div>
      )}
    </div>
	)
}

export default TodoListele