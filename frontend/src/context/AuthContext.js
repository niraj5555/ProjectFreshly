import React,{createContext, useState} from 'react';


export const AuthContext = createContext(); 

const initState = {
    isAuth:false,
    token:null
}

const AuthContextProvider = ({children}) => {
    const [authState, setAuthState] = useState(initState);
    const loginHandle = (token)=>{
        setAuthState({...authState,isAuth:true, token})
    }
    const logoutHandle = ()=>{
        setAuthState({...authState,isAuth:false, token:null})
    }
  return (
    <AuthContext.Provider value={{authState, loginHandle, logoutHandle}}>
          {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider