import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {IoMdAddCircle} from "react-icons/io";
import { Link } from "react-router-dom";



const ModalAddPhoto=(props)=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
        <button className='styleButton' onClick={handleClickOpen}>Add new piture...</button>
        <IoMdAddCircle className='styleAddCircle'/>
    
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
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
                
              }}
            >
              Add Picture
            </button>
          </Link>
        
      </div>
      </center>
        
      </Dialog>
    </div>
  );
}
export default ModalAddPhoto;