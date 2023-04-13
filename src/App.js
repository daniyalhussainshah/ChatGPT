
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import GrammerCorrection from './Pages/GrammerCorrection'
import KeyWords from './Pages/KeyWords'
import QuestionsAnswers from './Pages/QuestionsAnswers'
import QGenerate from './Pages/QGenerate'
import AbstractAnalyzer from './Pages/AbstractAnalyzer'
function App() {

  return (
<>
<BrowserRouter>

    <Routes>
      
    <Route path='/' element={<Menu/>}></Route>
    <Route path='/grammercorrection' element={<GrammerCorrection/>}></Route>
    <Route path='/keywords' element={<KeyWords/>}></Route>
    <Route path='/questionsanswers' element={<QuestionsAnswers/>}></Route>
    <Route path='/qgenerate' element={<QGenerate/>}></Route>
    <Route path='/abstractanalyzer' element={<AbstractAnalyzer/>}></Route>

    
    </Routes>


    </BrowserRouter>
</>
  )
}

export default App
