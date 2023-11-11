import { useEffect, useState } from "react";
import Home from "./home";

const Dashboard = () => {

    const [user, setUser] = useState(null);
    return (
       <div>
           <Home /> 
       </div>
    )
}

export default Dashboard;