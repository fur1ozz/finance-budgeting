import Header from "../components/Header";
import NewGoal from "../components/NewGoal";
import HeaderComb from "./HeaderComb";
import Footer from "../components/Footer";

function NewGoalsPage(){
    return (
      <>
          <HeaderComb firstProp="IEKRĀJUMI" firstLink="Goals" />
          <NewGoal />
          <Footer />
      </>
    );
}
export default NewGoalsPage;