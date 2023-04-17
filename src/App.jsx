import '../src/Css/app.scss'
import Home from './Components/Home'
import Sidebar from './Components/Sidebar'

function App() {

  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="content">
        <Home/>
      </div>
      
    </div>
  )
}

export default App
