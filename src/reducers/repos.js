const initialState = {
  allRepos: []
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case 'REPOS_FETCH':
      return {
        allRepos: action.data
      };
    default:
      return state;
  }
};

export default repos;
