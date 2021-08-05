import { useContext } from 'react'
import {UserContext} from '../contexts/UserContext'

const User= ({user})=> {


    const {deleteUser} = useContext(UserContext) 

       let color 
        if(user.status === 'Validé'){
            color = 'valide'   
        }else if(user.status ==='Rejeté') {
            color = 'rejected' 
        }else if(user.status ==='En validation') {
            color='on-validation'
        }

    
   
    return (
           <> 
                <td>{user.id}</td>
                <td>{user.createdDate}</td>
                <td> <button className={color}>{user.status}</button> </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.registrationNumber}</td>
                <td><button onClick={  () => deleteUser(user.id ) } className="btn btn-act"><i className="fa fa-trash" ></i></button> 
                </td>
            </>
)
}
export default User ;