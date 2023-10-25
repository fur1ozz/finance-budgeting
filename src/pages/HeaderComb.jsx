import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function HeaderComb(){
    return(
        <div>
            <Sidebar />
            <Header prop="IZMAKSAS" link="Izmakas" />
        </div>
    );
}
export default HeaderComb;