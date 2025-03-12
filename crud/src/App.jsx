import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Table from './component/Table'
import Form from './component/Fome'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Table/>}/>
              <Route path='/form' element={<Form/>}/>
           </Routes>
           <ToastContainer
              position="bottom-right"
              
           />
        </BrowserRouter>
    </div>
  )
}

export default App