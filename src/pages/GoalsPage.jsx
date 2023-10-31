import Header from "../components/Header";
import GoalsComponent from "../components/GoalsComponent";
import HeaderComb from "./HeaderComb";
import Footer from "../components/Footer";

function GoalsPage(){
    return(
        <>
            <HeaderComb firstProp="IEKRĀJUMI" firstLink="Goals" />
            <GoalsComponent />
            <Footer />
        </>
    );
}
export default GoalsPage;