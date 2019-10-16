import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUsers,deleteUsers } from "../actions";
import ReactTable from 'react-table';
import "react-table/react-table.css";
import { IoIosTrash,IoMdCreate,IoMdImage,IoMdAddCircle} from "react-icons/io";
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';




class ListUsers extends Component {
  constructor(){
    super()
  }
  componentDidMount() {
    this.props.getUsers();
  }

  
  render() {
      const columns=[
          {
            Header:"Name",
            accessor:"name",
            style:{backgroundColor:"white",marginTop:"15px",height:"50px"},
            filterable:true
          },
          {
            Header:"Surname",
            accessor:"surname",
            style:{backgroundColor:"white",marginTop:"15px",height:"50px"}
          },
          {
            Header:"Birth Year",
            accessor:"birthYear",
            style:{backgroundColor:"white",marginTop:"15px",height:"50px"}
          },
          {
            Header:"Birth Place",
            accessor:"birthPlace",
            style:{backgroundColor:"white",marginTop:"15px",height:"50px"}
          },
          {
            Header:"Actions",
            sortable:false,
            style:{backgroundColor:"white",marginTop:"15px",height:"50px",alignItem:"center"},
            Cell:row=>{
                return(<div style={{display:"flex", justifyContent:'spaceBetween',marginLeft:'5px'}}>
                  <Link to={`/utilisateurs/${row.original._id}`} style={{textDecoration:"none",color:"black"}}>
                    <IoMdImage/>
                    </Link>
                    <Link to={`/modifierUtilisateur/${row.original._id}`} style={{textDecoration:"none",color:"black"}}><IoMdCreate/> </Link>
                    <IoIosTrash onClick={() => {
                this.props.deleteUsers(row.original._id);
              }}/>
                    
                    
                    </div>
                    
                )
            }
            
          }]
    return (
      <div className="containerTable">
        <div className='styleHead'>
        <h2>Users List</h2>
        <div className='styleSearch'>
        <SearchIcon/>
        <Input
        placeholder="Search"
        inputProps={{
          'aria-label': 'description',
        }}
      />
      <Link to="/addUser">
        <IoMdAddCircle/>
      </Link>
      
       </div>
      </div>
          <ReactTable
          columns={columns}
          data={this.props.user}
          defaultPageSize={5}
          
          >

          </ReactTable>


      </div>
    );
  }
}
export default connect(
  state => {
    return { user: state.user };
  },
  { getUsers,deleteUsers }
)(ListUsers);
