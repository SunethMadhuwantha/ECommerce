import { Outlet } from "react-router-dom";


import Sidebar1 from "../Dashboard/Sidebar";

const AppLayoutE = () => {
    return <div >
        <div className="flex">
        <div className="flex-auto"><Sidebar1 /></div>
        <div className="flex-auto" ><Outlet /></div>
</div>
        
    </div>;
};

export default AppLayoutE;