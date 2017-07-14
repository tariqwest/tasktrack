import React from 'react';
import TaskEdit from './TaskEdit';
import { connect } from 'react-redux';
import { ListItem } from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-flexbox-grid';
import { updateTask } from '../actions';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditTask: false,
    };
    this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    this.handleTaskCancel = this.handleTaskCancel.bind(this);
  }

  handleTaskUpdate(task) {
    const { dispatch, userId } = this.props;
    this.setState({ showEditTask: false });
    console.log(task);
    dispatch(updateTask(task, userId));
  }

  handleTaskCancel() {
    this.setState({ showEditTask: false });
  }

  render() {
    const {
      id,
      title,
      detail,
      startTime,
      endTime,
    } = this.props.task;

   // const duration

    return (
      <div>
        <div onClick={ () => (this.setState({ showEditTask: true }))}>
          <ListItem
            primaryText={title}
            secondaryText={detail}
          />
        </div>
        <Dialog
          open={this.state.showEditTask}
          title={title}
        >
          <TaskEdit task={this.props.task} update={this.handleTaskUpdate} cancel={this.handleTaskCancel} />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(Task);
