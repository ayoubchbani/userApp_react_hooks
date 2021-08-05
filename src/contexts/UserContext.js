import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid'

export const UserContext =createContext()

    const UserContextProvider =(props)=>{
  
        const [users,setUsers]= useState([

        {
            id: 123456789,
            createdDate: "2021-01-06T00:00:00.000Z",
            status: "En validation",
            firstName: "Mohamed",
            lastName: "Taha",
            userName: "mtaha",
            registrationNumber: "2584",
          },
           {
            id: 987654321,
            createdDate: "2021-07-25T00:00:00.000Z",
            status: "Validé",
            firstName: "Hamid",
            lastName: "Orrich",
            userName: "horrich",
            registrationNumber: "1594",
          },
             {
            id: 852963741,
            createdDate: "2021-09-15T00:00:00.000Z",
            status: "Rejeté",
            firstName: "Rachid",
            lastName: "Mahidi",
            userName: "rmahidi",
            registrationNumber: "3576",
          }
    ])
const addUser = (firstName,lastName,status,createdDate,userName,registrationNumber) =>{
        setUsers([...users , {id:uuidv4(),firstName,lastName,status,createdDate,userName,registrationNumber}])
}
const  deleteUser = (id) => {
    setUsers(users.filter( user => user.id !== id ))
}
    


    return (
        <UserContext.Provider value={{users, addUser , deleteUser}}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;