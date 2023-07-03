import { useState } from 'react';
import {UserContext} from './UserContext';

// const user={id:1,
//             nombre:'Luis',
//             edad:22,
//             email:'Luis@gmail.com'}

export const UserProvider=({children})=>{

    const [user,setUser] = useState();

    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}