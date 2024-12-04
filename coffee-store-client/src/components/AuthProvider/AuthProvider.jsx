import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect} from 'react';
import { auth } from '../../firebase/firebase.init';
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    // const [users,serUsers] = useState([]);

    const createSignUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     console.log(result)
        // }).catch(error => {
        //     console.log(error)
        // })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
            if(currenUser){
                console.log("User is Logged In ", currenUser);
            }
            else{
                console.log("User is Currently Logged Out");
            }
        });
        
        return () => {
            unSubscribe();
          };
    },[])


    const authUsers = {
        createSignUpUser,
        signInUser
    }

    return (
       <AuthContext.Provider value={authUsers}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;