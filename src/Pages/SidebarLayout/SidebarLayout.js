import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router";
function SidebarLayout(){

    return(
        <div className="PageContainer">
        <Sidebar />
        <Outlet/>
      </div>
    );
}

export default SidebarLayout;