import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './component/Counter.jsx'
import List from './component/List.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App msg ={"Debadyuti"}/>
    <Counter></Counter>
    <List></List>
  </>
)
