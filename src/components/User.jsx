import { useContext } from 'react'
import {UserContext} from '../contexts/UserContext'

const User= ({user})=> {


    const {deleteUser} = useContext(UserContext) 

    return (
        
            < >
                <td>{user.id}</td>
                <td>{user.createdDate}</td>
                <td>{user.status}</td>
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