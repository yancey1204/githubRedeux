import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import RepoList from './RepoList';


class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      style: {
        width: '50%',
        textAlign: 'center',
        margin: '0 auto'
      }
    };
  }

  componentDidMount() {
    request
      .get('https://api.github.com/repositories')
      .end((err, res) => {
        this.props.fetchData(res.body);
      });
  }

  render() {
    return (
      <div style={this.state.style}>
        <RepoList />
      </div>
    );
  }
}

HomePage.propTypes = {
  fetchData: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchData: repos => {
    dispatch({
      type: 'REPOS_FETCH',
      data: repos
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
