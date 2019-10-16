import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/index";
import { Link } from "react-router-dom";

class AddPicture extends Component {
  state = {
    title: "",
    path_photo: ""
  };
  componentDidMount(){
    const {id} = this.props.match.params
}
  render() {
    
    return (
        <center>
        <div className='containerAddUser'>
         <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <span>Title:</span>
          <input
            placeholder="Title"
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
          />
          </div>
          <div style={{display:'flex',justifyContent:'space-between',width:'260px'}}>
          <spn>Path Picture:</spn>
          <input
            placeholder="Path of picture"
            onChange={e => {
              this.setState({ path_photo: e.target.value });
            }}
          />
          </div>
          <Link to="/">
            <button
              onClick={() => {
                this.props.addUser(this.state);
              }}
            >
              Add Picture
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
)(AddPicture);