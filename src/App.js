import './style.css'
import Header from "./Components/Header"
import Nav from './Components/Nav/index.js'

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Nav />
      </main>
    </div>
  );
}

export default App;
