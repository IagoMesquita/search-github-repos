import { useContext, useEffect } from 'react';
import MyContext from '../../context/MyContext';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import Starreds from '../../components/Starred/Starred';
import AllRepos from '../../components/AllRepos/AllRepo';
import ButtonsRepoAndStarred from '../../components/ButtonsReposAndStarred/ButtonsRepoAndStarred'

import './Repo.css';
function Repos () {

  const { 
    setProfile, setRepos,
    nameRepo, setNameRepo, 
    repoAllOrStar,
    loading,
  } = useContext(MyContext)

  useEffect(() => {

    setProfile(JSON.parse(localStorage.getItem('profile')) || []);
    setRepos(JSON.parse(localStorage.getItem('repos')) || []);
  }, [])

  
  return (
    
    loading ? (
      <>
        <Header/>
        <h1 className="loading">Loading...</h1>
      </>
    )
    :
    <div>
      <Header/>
      <div className='container-full-screen'>
        <Profile/>
        <main className='main-content-repos'>
          <ButtonsRepoAndStarred/>
          <section className="repos-container">
            <div className="input-container">
              <i className="bi bi-search"></i>
              <input
                value={ nameRepo }
                onChange={({ target }) => setNameRepo(target.value)}
                className="search-users"
                placeholder="Filter by name"
                type="text"
              />
            </div>
            { repoAllOrStar ? (
              <AllRepos/>
            )
            : ( <Starreds/>) 
            }
            
          </section>
        </main>
      </div>
    </div>
  );
}

export default Repos;