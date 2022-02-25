import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  const getUser = () => {
    if (!user) return <div className="header">Loading!</div>;
    return <div className="header">{user.name}</div>;
  };
  return <div>{getUser()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
