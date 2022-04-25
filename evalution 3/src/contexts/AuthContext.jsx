import {createContext,useState} from "react";
import axios from "axios"

export const AuthContext  = createContext();
const initState={
    email:'',
    password:'',
}

export const AuthContextProvider = ({children})=>{
    const [query,setQuery] = useState(initState);
    const [isAuth,setIsAuth] = useState(false);
     const [data, setData] = useState([]);


    const {email,password} = query;

    const handleChange =(e)=>{
      const {name,value}= e.target;
      setQuery({
          ...query,
          [name]:value})

    }
    const handleLogin =(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in/api/login",{
            email,
            password
        })
        .then((res)=>{
            console.log(res.data)
            setIsAuth(true)
        })
    }

     const getdata = () => {
       axios.get("http://localhost:8080/employee").then((res) => {
         setData(res.data);
       });
     };

    const value={isAuth,setIsAuth,handleChange,handleLogin,query,setQuery,data,setData,getdata}
    return (<AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
}
