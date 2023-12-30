import { Helmet } from "react-helmet";
import AboutNinish from "../../Components/AboutNinish/AboutNinish";
import FutureWorks from "../../Components/FutureWorks/FutureWorks";
import Mission from "../../Components/Mission/Mission";
import PreviousWorks from "../../Components/PreviousWorks/PreviousWorks";



const About = () => {
    return (
       <>
       <Helmet>
            <title>নিণীষ সম্পর্কে</title>
        </Helmet>
         <div >
            <AboutNinish/>

            <div className="bg-white mb-8">
            <Mission/>
            </div>

            <PreviousWorks/>

            <FutureWorks/>


         </div>

       </>
    );
};

export default About;