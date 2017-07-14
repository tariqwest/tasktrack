import React from 'react';
import Paper from 'material-ui/Paper';
import TaskList from './TaskList';

const styles = {
  pageContainer: {
    // left and right margins
    // top and bottom padding if necesarry around multiple cards
    marginTop: '-4px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  cardContainer: {
    // spacing between cards on a page
    marginTop: '6px',
    marginBottom: '6px',
  },
};

class Today extends React.Component {

  render() {
    return (
      <div>
        <div className="bump-bar" />
        <div style={styles.pageContainer}>
          <TaskList />
        </div>
      </div>
    );
  }
}

export default Today;
