import { createContext } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const authInfo = {
        name:'nodi er sagor'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/**
 * 1. create context with null as default
 * 2. create Provider
 * 3.set value with something (authInfo)
 * 4.[attention Please !!]
 * 5. use the authProvider in the main .jsx
 * 6. access the children inside the authProvider in the main.jsx
 * 7. export AuthProvider
 * 
 */