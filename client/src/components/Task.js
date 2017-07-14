import React from 'react';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import FlatButton from 'material-ui/FlatButton';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditTask: false,
    };
  }

  render() {
    const {
      title,
      detail,
      startTime,
      endTime,
    } = this.props.task;

    return (
      <div>
        <div onClick={ () => (this.setState({ showEditTask: true }))}>
          <ListItem
            primaryText={title}
            secondaryText={detail}
          />
        </div>
        <FullscreenDialog
          open={this.state.showEditTask}
          onRequestClose={() => this.setState({ showEditTask: false })}
          title={title}
          actionButton={<FlatButton
            label="Close"
            onTouchTap={() => this.setState({ showEditTask: false })}
          />}
          appBarStyle={{ backgroundColor: '#000000' }}
        >
            <div>Edit Task</div>
        </FullscreenDialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(Task);
