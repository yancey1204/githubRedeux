import React from 'react';
import { connect } from 'react-redux';
import RepoItem from './RepoItem';

import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const RepoList = ({ repos }) => {
  const topicList = repos.map(repo => <RepoItem key={repo.id} repo={repo} />);

  return (
    <List>
      <Subheader>All Repos</Subheader>
      {topicList}
    </List>
  );
};

RepoList.propTypes = {
  repos: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({ repos: state.repos.allRepos });

export default connect(
  mapStateToProps
)(RepoList);
