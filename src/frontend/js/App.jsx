import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import { MainContext, MainProvider } from './context/MainContext'
import TodoEkle from './component/todoEkle'
import TodoListele from './component/todoListele'

import './../css/style.scss'

const Main = () => {
  return (
  	<MainProvider>
	    <div id='container'>
	  		<TodoEkle/>
	  		<TodoListele/>
	    </div>
    </MainProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))