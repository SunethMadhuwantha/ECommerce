import { Outlet } from "react-router-dom";


import Sidebar1 from "../Dashboard/Sidebar1";

const AppLayoutA = () => {
    return <div >
        <div className="flex">
        <div className="flex-auto"><Sidebar1 /></div>
        <div className="flex-auto" ><Outlet /></div>
</div>
        
    </div>;
};

export default AppLayoutA;