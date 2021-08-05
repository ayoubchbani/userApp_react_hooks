import User from './User'
import 'font-awesome/css/font-awesome.min.css';
import { useContext,useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Form,Modal,Button } from 'react-bootstrap';
import AddUser from './AddUser';
import { useEffect } from 'react';


const UsersLists = () =>{
    const{users}=useContext(UserContext);
    const [show,setShow]=useState(false)

    const handleshow =()=>{
        setShow(true)

            }
    const handleClose= ()=>{
         setShow(false)
}

useEffect(() =>{
    handleClose()
},{users})
    return (
        <>
    <table className="table">
    <thead>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Date de création</th>
            <th scope="col">Etat</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
            <th scope="col">Nom d'utilisateur</th>
            <th scope="col">Matricule</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        
            {users.map(user=>(
                  <tr key={user.id}>

                    <User user={user} />
                </tr>
            )
              
            )}
       
        
    </tbody>
    </table>
    <Modal show={show} onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
            <Modal.Title>
                Ajout d'utilisateur
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <AddUser />
        </Modal.Body>   
    </Modal>
    <button type="button" className="addUser" onClick={handleshow}>Ajouter utilisateur</button>

</>

        
    )
}
export default UsersLists ;