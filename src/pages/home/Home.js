import "./Home.css";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import MyContext from "../../context/MyContext";
import getPerfil from "../../util/getPerfil";
import getRepos from "../../util/getRepos";
import formatUsernameForSearch from "../../util/formatUsernameForSearch";
import Header from "../../components/Header/Header";
function Home() {
  const history = useHistory();

  const [user, setUser] = useState("");
  const [loadingHome, setLoadingHome] = useState(false);
  const [userNotFind, setUserNotFind] =  useState(false);

  const { setProfile, setRepos } = useContext(MyContext);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setUser(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingHome(true);
    const formattedUser = formatUsernameForSearch(user);
    const infoPerfil = await getPerfil(formattedUser);
    if (infoPerfil.message) {
      setLoadingHome(false);
      setUserNotFind(true);
      console.log(infoPerfil.message);
      return;
    }

    setProfile({ ...infoPerfil });
    localStorage.setItem("profile", JSON.stringify(infoPerfil));

    const allRepos = await getRepos(formattedUser);
    setRepos(allRepos);
    localStorage.setItem("repos", JSON.stringify(allRepos));

    history.push("/repos");
  };

  return loadingHome ? (
    <>
      <Header />
      <h1 className="loading">Loading...</h1>
    </>
  ) : (
    <div className="container">
      <Header />
      <main className="main-content">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-container">
            <i className="bi bi-search"></i>
            <input
              className="search-users"
              value={user}
              onChange={handleInputChange}
              placeholder="Insert a username"
              type="text"
            />
          </div>
        </form>
        { userNotFind &&
          <div className="message-error">
            <p>Esse usuário não foi encontrado!</p>
            <h2>404</h2>
          </div>
        }
      </main>
    </div>
  );
}

export default Home;
