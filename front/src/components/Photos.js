import React from 'react';
import{connect}from 'react-redux';
import {getPhotoById,deletePhotos } from '../actions';
import { IoIosTrash,IoMdAddCircle} from "react-icons/io";
import ModalPhoto from './ModalPhoto';
import ModalAddPhoto from './ModalAddPhoto';
import SearchPicture from "./SearchPicture";

 
class Photos extends React.Component {
componentDidMount(){
    const {id} = this.props.match.params
    this.props.getPhotoById(id)
}
render(){
 
  return (<div>
      <div className='headerImage'>
        <SearchPicture/>
        <ModalAddPhoto/>
       
      </div>
  <div className='blockImages'>
     {this.props.photo && this.props.photo.map(el => {
         return <div className='stylePartImage' key={el._id}>
                <img src={el.path_photo} />
                <div className='partInformation'>
                <span>{el.title}</span>
                <span  style={{display:"flex", justifyContent:'row'}}><IoIosTrash 
                onClick={() => {
                  this.props.deletePhotos(el._id);
                    }}
          />                   
                
                <ModalPhoto photo={el.path_photo}/>
                </span>
                </div>
            </div>
            
     })}
    </div>
    </div>
  );
}
}
export default connect ((state)=>{
    return {photo : state.photoById}
}, {getPhotoById,deletePhotos })(Photos);