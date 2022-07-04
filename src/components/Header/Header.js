import './Header.css';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logoGithub from './images/icons8-github.svg';
import MyContext from '../../context/MyContext';
function Header() {
  const  history  = useHistory();
  const { pathname } = history.location;

  const { setNameRepo } = useContext(MyContext);

  const returningForHome = () => {
    localStorage.clear();
    setNameRepo("");
    history.push('/')
  }

 return (
  <header>
    <div className='logo-container'>
      <img src={ logoGithub } alt="logo-github"/>
      <h3>Github</h3>
      <p>profiles</p>
    </div>
    { pathname === '/repos' && (
      <button 
        className='btn-change-user'
        onClick={ returningForHome }
      >
        CHANGE USERNAME
      </button>
    )}
  
  </header> 
 )
}

export default Header;
