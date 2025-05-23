
import { User } from "./types";

   

export const login = ({ username, password }: User,message:string): Promise<string> => {

  return new Promise((resolve, reject) => {
    
   
    setTimeout(() => {
      if ((username === 'admin' || username === 'marko' ) && password === 'Admin123$') {
        resolve('Login successful');
      } else {
        reject(new Error(message));
      }
    }, 300); 
  });
};