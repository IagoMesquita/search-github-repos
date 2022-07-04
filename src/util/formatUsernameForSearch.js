const formatUsernameForSearch = (user) => {
  return user.split(' ').join('').toLowerCase()
}

export default formatUsernameForSearch;