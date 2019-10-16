import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import {IoMdEye} from "react-icons/io";

const ModalPhoto=(props)=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <IoMdEye onClick={handleClickOpen}/>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
       
      >
        
        <img src={props.photo} style={{width:"300px",height:"300px"}}/>
        
      </Dialog>
    </div>
  );
}
export default ModalPhoto;