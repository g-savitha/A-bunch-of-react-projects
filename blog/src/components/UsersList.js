import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  renderUsers = () => {
    return this.props.users.map((user) => {
      return (
        <div className="item" key={user.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div>{this.renderUsers()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUser })(UsersList);
