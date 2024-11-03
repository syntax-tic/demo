"use client";
import React, {createContext, useContext, useEffect, useState} from "react";
interface TokenContextType{
    token : string |null,
    setToken: (token:string | null) => void
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

interface TokenProviderProps{
    children: React.ReactNode
}
export const TokenProvider: React.FC<TokenProviderProps> = ({children}) =>{
    const [token, setToken] = useState<string|null>(null);

    useEffect(()=>{
        const storedToken = localStorage.getItem('token');
        if(storedToken) setToken(storedToken);
    }, []);
    const updateToken = (newToken: string|null)=>{
        setToken(newToken); 
        if(newToken){
            localStorage.setItem('token', newToken);
        }
        else{}
            localStorage.removeItem('token');
    }
   
  return (
    <TokenContext.Provider value={{ token, setToken: updateToken }}>
      {children}
    </TokenContext.Provider>
  );
    }

    export const useToken = (): TokenContextType => {
        const context = useContext(TokenContext);
        if (!context) {
          throw new Error("useToken must be used within a TokenProvider");
        }
        return context;
      };


