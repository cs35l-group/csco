import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Login-top">
      <header className="login-header">
        <h1>
          CSCO
        </h1>
        <p>A collective board to organize your media.</p>
      </header>
      <div className='Login-section'>
        <form>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </form>
        <form> 
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" />
        </form> 
        <button className="LoginButton" type="submit">Login</button>

      </div>
    </div>
  );
}


export default App;
