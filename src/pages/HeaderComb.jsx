import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function HeaderComb({firstProp, firstLink}){
    return(
        <div>
            <Sidebar />
            <Header prop={firstProp} link={firstLink} />
        </div>
    );
}
export default HeaderComb;