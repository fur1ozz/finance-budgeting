import Header from "../components/Header";
import NewGoal from "../components/NewGoal";
import HeaderComb from "./HeaderComb";

function NewGoalsPage(){
    return (
      <>
          <HeaderComb firstProp="IEKRĀJUMI" firstLink="Goals" />
          <NewGoal />
      </>
    );
}
export default NewGoalsPage;