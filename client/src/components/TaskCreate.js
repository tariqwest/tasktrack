import React from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-flexbox-grid';

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      detail: '',
      startTime: '',
      endTime: '',
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <TextField
              fullWidth
              floatingLabelText="Title"
              value={this.state.title}
              onChange={(event) => { this.setState({ title: event.target.value }); }}
            />
            <TextField
              fullWidth
              floatingLabelText="Detail"
              value={this.state.detail}
              onChange={(event) => { this.setState({ detail: event.target.value }); }}
            />
            <TextField
              fullWidth
              floatingLabelText="Start time"
              value={this.state.startTime}
              onChange={(event) => { this.setState({ startTime: event.target.value }); }}
            />
            <TextField
              fullWidth
              floatingLabelText="End time"
              value={this.state.endTime}
              onChange={(event) => { this.setState({ endTime: event.target.value }); }}
            />
            <FlatButton label={'Cancel'} onTouchTap={() => { this.props.cancel(this.state); }} />
            <FlatButton label={'Save'} onTouchTap={() => { this.props.create(this.state); }} />

          </Col>

        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.userId,
});

export default connect(mapStateToProps)(TaskEdit);
