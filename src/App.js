import './style.css'
import Header from "./Components/Header"
import Nav from './Components/Nav/'
import Main from './Components/Main'

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Nav />
        <Main />
      </main>
    </div>
  );
}

export default App;
