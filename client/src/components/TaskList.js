import React from 'react';
import { connect } from 'react-redux';
import { List } from 'material-ui/List';
import { Row, Col } from 'react-flexbox-grid';
import { Card } from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import { grey500 } from 'material-ui/styles/colors';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import Task from './Task';
import TaskCreate from './TaskCreate';
import { getUserTasks, createTask } from '../actions';

const styles = {
  floatingActionButton: {
    position: 'relative',
    float: 'right',
    marginRight: 10,
    marginTop: -30,
  },
  loadingSpinner: {
    textAlign: 'center',
    width: '100%',
  },
  nothingToDisplay: {
    textAlign: 'center',
    width: '100%',
    color: grey500,
  },
  nothingToDisplayIcon: {
    fontSize: '70px',
    color: grey500,
  },
};

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateTask: false,
    };
    this.handleTaskCreate = this.handleTaskCreate.bind(this);
  }

  componentDidMount() {
    const { dispatch, userId } = this.props;
    dispatch(getUserTasks(userId));
  }

  handleTaskCreate(task) {
    const { dispatch, userId } = this.props;
    this.setState({ showCreateTask: false });
    const taskInfo = task;
    taskInfo.owner = userId;
    console.log(taskInfo);
    dispatch(createTask(taskInfo, userId));
  }

  handleTaskCancel() {
    this.setState({ showCreateTask: false });
  }

  render() {
    if (this.props.isFetching) {
      return (
        <div>
          <div className="bump-tab-bar" />
          <Row>
            <Col xs={12} sm={6} smOffset={3}>
              <div style={styles.loadingSpinner} onTapT>
                <CircularProgress />
              </div>
            </Col>
          </Row>
        </div>
      );
    } else if (this.props.tasks.length > 0) {
      return (
        <div>
          <Card>
            <List>
              {this.props.tasks.map(task =>
                (<Task task={task} key={task.id} />) // eslint-disable-line
              )}
            </List>
          </Card>
          <FloatingActionButton style={styles.floatingActionButton} onClick={() => (this.setState({ showCreateTask: true }))}>
            <ContentAdd />
          </FloatingActionButton>
          <Dialog
            open={this.state.showCreateTask}
            title={'Create New Task'}
          >
            <TaskCreate create={this.handleTaskCreate} cancel={this.handleTaskCancel} />
          </Dialog>
        </div>
      );
    }
    return (
      <div>
        <div className="bump-tab-bar" />
        <Row>
          <Col xs={12} sm={6} smOffset={3}>
            <div style={styles.nothingToDisplay}>
              <FontIcon style={styles.nothingToDisplayIcon} className="material-icons">person_pin</FontIcon>
              <h2>No tasks yet, create some!</h2>
            </div>
          </Col>
        </Row>
        <FloatingActionButton style={styles.floatingActionButton}>
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          open={this.state.showCreateTask}
          title={'Create New Task'}
        >
          <TaskCreate create={this.handleTaskCreate} cancel={this.handleTaskCancel} />
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.task.tasks,
  userId: state.auth.userId,
  isFetching: state.task.isFetching,
});

export default connect(mapStateToProps)(TaskList);
