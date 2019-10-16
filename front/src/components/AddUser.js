import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/index";
import { Link } from "react-router-dom";

class AddUser extends Component {
  state = {
    name: "",
    surname: "",
    birthYear: null,
    birthPlace:""
  };
  render() {
    return (
        <center>
        <div className='containerAddUser'>
         <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <span>Name:</span>
          <input
            placeholder="name"
            onChange={e => {
              this.setState({ name: e.target.value });
            }}
          />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <spn>Surname:</spn>
          <input
            placeholder="surname"
            onChange={e => {
              this.setState({ surname: e.target.value });
            }}
          />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <span>Birth Year:</span>
          <input
            placeholder="Birth Year"
            onChange={e => {
              this.setState({ birthYear: e.target.value });
            }}
          />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <span>Birth Place:</span>
          <input
            placeholder="Birth Place"
            onChange={e => {
              this.setState({ birthPlace: e.target.value });
            }}
          />
          </div>
          <Link to="/">
            <button
              onClick={() => {
                this.props.addUser(this.state);
              }}
            >
              Add User
            </button>
          </Link>
        
      </div>
      </center>
    );
  }
}
export default connect(
  null,
  { addUser }
)(AddUser);