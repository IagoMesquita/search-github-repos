function filterStarreds(repos) {
  const starred = repos.filter((repo) => (
    repo.stargazers_count > 0
  ));
  
  localStorage.setItem('starred', JSON.stringify(starred))

  return starred;   
}

export default filterStarreds;