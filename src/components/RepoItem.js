import React from 'react';

import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const RepoItem = ({ repo }) => {
  const style = {
    textColor: 'blue500',
    textAlign: 'left'
  };

  return (
    <div>
      <ListItem
        leftAvatar={<Avatar src={repo.owner.avatar_url} />}
        primaryText={repo.full_name}
        style={style}
      />
      <Divider />
    </div>
  );
};

RepoItem.propTypes = {
  repo: React.PropTypes.shape({
    full_name: React.PropTypes.string.isRequired
  }).isRequired
};


export default RepoItem;
