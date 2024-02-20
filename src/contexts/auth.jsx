import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user-token");
        const usersStorage = localStorage.getItem("users-local-db");
        if (userToken && usersStorage) {
          const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (hasUser) setUser(hasUser[0]);
        }
      }, []);

    const signup = (name, username, email, password) => {
        const storage = JSON.parse(localStorage.getItem("users-local-db"));

        const hasUser = storage?.filter((userItem) => userItem.email === email);

        if(hasUser?.length){
            return "E-mail já cadastrado no sistema.";
        }

        const newUser = {
            name,
            username,
            email,
            password,
            profile_image_url: "",
            profile_cover_url: "",
            library: [],
            wishlist: [],
            recents: [],
            payment_methods: []
        }

        let updateStorage;

        if(storage) {
            updateStorage = [...storage, newUser];
        } else{
            updateStorage = [newUser];
        }

        localStorage.setItem("users-local-db", JSON.stringify(updateStorage));

        return;
    }

    const login = (email, password) => {
        const storage = JSON.parse(localStorage.getItem("users-local-db"));

        const hasUser = storage?.filter((userItem) => userItem.email === email);

        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user-token", JSON.stringify({email, token}));
                setUser({email, token});
                return;
            } else{
                return "E-mail ou senha incorreto!";
            }
        } else {
            return "Usuário não cadastrado.";
        }
    };

    return(
        <AuthContext.Provider value={{user, signed: !!user, signup, login}}>
            {children}
        </AuthContext.Provider>
    )
}