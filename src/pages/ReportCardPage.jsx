import HeaderComb from "./HeaderComb";
import ReportCard from "../components/ReportCard";
import Footer from "../components/Footer";

function ReportCardPage(){
    return (
        <>
            <HeaderComb firstProp="REPORT CARD" firstLink="ReportCard" />
            <ReportCard />
            <Footer />
        </>
    );
}
export default ReportCardPage;