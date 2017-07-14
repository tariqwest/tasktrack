import React from 'react';
import TaskList from './TaskList';

class Today extends React.Component {

  render() {
    return (
      <div>
        <div className="bump-bar" />
        <div>
          <TaskList />
        </div>
      </div>
    );
  }
}

export default Today;
