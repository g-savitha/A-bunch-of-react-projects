import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import Comment from "./Comment";

const App = () => {
  const avatar = faker.image.avatar();
  return (
    <div className="ui container comments cards">
      <ApprovalCard>Are you sure you want to continue?</ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={avatar}
          author="Sam"
          date="Today at 1:30"
          text="Amazing"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={avatar}
          author="Karthik"
          date="Today at 1:32"
          text="Beautiful"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          avatar={avatar}
          author="Priya"
          date="Today at 1:34"
          text="Wooooooooooowww"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment avatar={avatar} author="Lisa" date="Today at 1:45" text="<3" />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
