import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route, useParams } from 'react-router-dom';
import CountIncrement from './CountIncrement';

function Home() {
  return <h1>Home Page</h1>
}

function About() {
  return <h1>About Page</h1>
}

function User({match}){
  const {user_id} = useParams();
  
  return <h1>User Id : {user_id}</h1>
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/123">User</Link>
          </li>
        </ul>
      </nav>

      <CountIncrement />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/user/:user_id" element={<User />}/>
      </Routes>
    </Router>
  );
}

export default App;
