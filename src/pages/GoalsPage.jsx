import Header from "../components/Header";
import GoalsComponent from "../components/GoalsComponent";
import HeaderComb from "./HeaderComb";

function GoalsPage(){
    return(
        <>
            <HeaderComb firstProp="IEKRĀJUMI" firstLink="Goals" />
            <GoalsComponent />
        </>
    );
}
export default GoalsPage;