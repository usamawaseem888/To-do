import { useEffect, useState } from 'react'
import TodoList from './TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import vite from '/vite.svg'

function App() {

const [t,setT]=useState('')
const [dolist,setList]=useState([])
const [disbtn,setbtn]=useState(true)

const persistData=(newList)=>{
  localStorage.setItem('dolist',JSON.stringify({dolist:newList}))
}
const handleBtn=(val)=>{
  if(val.trim()!=""){
  console.log(val)
  const a=[...dolist,val]
  setList(a)
  persistData(a)
setT('')
setbtn(true)
  }
}
const handleDel=(index)=>{
  const newList = [...dolist]
  newList.splice(index,1)
  setList(newList);
  persistData(newList)
}
const handleEdit=(index)=>{
  const p=dolist[index]
  setT(p)
  handleDel(index)

}

useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodo=localStorage.getItem('dolist')
  if(!localTodo){return}
  localTodo=JSON.parse(localTodo).dolist
  setList(localTodo)
  
},[])

return (
  <>
  <div className="d-flex flex-column align-items-center vh-100">
      <h1 >Welcome to ToDo App  <img src={vite} alt="Vite Icon" className="me-2" width="40" height="40" /></h1>
     
    <div className="d-flex justify-content-center w-100">
      <div className="card p-4" style={{ width: '1000px', minHeight: '400px' }}>
        <div className="row g-4 align-items-center">
          <div className="col-8">
            <form className="form-floating">
              <input className="form-control" type="text" value={t}
               onChange={(event) => {
                 setT(event.target.value) 
                 setbtn(event.target.value.trim()==="")}}
                 onKeyPress={(event)=>{
                  if(event.key==="Enter"){
                    handleBtn(t)
                    event.preventDefault();
                  }
                 }}
                />
              <label>Enter activity</label>
            </form>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-primary w-100" onClick={() => { handleBtn(t) }} disabled={disbtn}>Add</button>
          </div>
          <div className="col-12">
            <TodoList todo={dolist} del={handleDel}  edit={handleEdit}/>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
}

export default App
