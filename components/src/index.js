import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container commments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="today at 6:00pm" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="today at 7:00am" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="today at 9:00pm" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
