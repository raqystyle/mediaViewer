import React from 'react'
import ListItem from 'material-ui/lib/lists/list-item'
import Avatar from 'material-ui/lib/avatar'

export default React.createClass({

  handleTap: function() {
    this.props.tapHandler();
  },

  render: function() {
    return (
      <ListItem
        primaryText={this.props.label}
        onTouchTap={this.handleTap}
        leftAvatar={
          <Avatar src={'/photo?type=thumb&path=' + encodeURIComponent(this.props.avatarPath)} />
        } />
    );
  },

});