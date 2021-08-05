import React from 'react'
import { useState,useContext  } from 'react';
import { Form,Button } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';


const AddUser = ()=> {
    const {addUser}= useContext(UserContext);
    const [newUser,setUser] =useState(
        { 
            firstName:'',
            lastName:"",
            status:"",
            createdDate:"",
            userName:"",
            registrationNumber:"",
          
        }   
    );
    const onInputChange =(e) =>{
        // console.log(e.target.value);
       setUser({...newUser,[e.target.name]: e.target.value})

    }
    const{firstName,lastName,status,createdDate,userName,registrationNumber}=newUser; 

    const handleSubmit =(e)=>{
        e.preventDefault();
        addUser(firstName,lastName,status,createdDate,userName,registrationNumber)
    }
    return (
       <Form className='row' onSubmit={handleSubmit}>
           <Form.Group className ='col-4'>
           <Form.Label>Nom</Form.Label>
                <Form.Control
                type ="text" 
                name ="firstName"
                value={firstName}     
                onChange={(e)=> onInputChange(e)}       
                required
                
           />
           </Form.Group>
           <Form.Group className ='col-4'>
           <Form.Label>Prénom</Form.Label>
                <Form.Control
                type ="text"
                name ="lastName"
                value={lastName}     
                onChange={(e)=> onInputChange(e)}                
                required     
           />
           </Form.Group>
           <Form.Group className ='col-4 mb-2'>
           <Form.Label>Etat</Form.Label>
                <Form.Control
                type ="text"
                name ="status"
                value={status}     
                onChange={(e)=> onInputChange(e)}   
                required
           />
           </Form.Group>
           <Form.Group className ='col-4 mb-2'>
           <Form.Label>Nom d'utilisateur</Form.Label>
                <Form.Control
                type ="text"
                name ="userName"
                value={userName}     
                onChange={(e)=> onInputChange(e)} 
                required
           />
           </Form.Group >
           <Form.Group className ='col-4 mb-2'>
           <Form.Label>Date de création</Form.Label>
                <Form.Control
                type ="date"
                name ="createdDate"
                value={createdDate}     
                onChange={(e)=> onInputChange(e)} 
                required
           />
           
           </Form.Group>
           <Form.Group className ='col-4 mb-2'>
          
           </Form.Group>
           <Form.Group className ='col-4 mb-2'>
           <Form.Label>Matricule</Form.Label>
                <Form.Control
                type ="text"
                name ="registrationNumber"
                value={registrationNumber}     
                onChange={(e)=> onInputChange(e)} 
                required
           />
           </Form.Group>
           <Form.Group className ='col-4 mb-2'>   
           </Form.Group>
           <div className ='col-4 mb-2 '>

            <Button id='buttonadd' type="submit" >Enregistrer</Button>
           </div>
         
       </Form>
    )
}


export default  AddUser;