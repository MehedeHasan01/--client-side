import { Helmet } from "react-helmet";
import EnglishOlympiad from "../../Components/EnglishOlympiad/EnglishOlympiad";
import Banner from "../../Components/Header/Banner";
import Testimonials from "../../Components/Testimonial/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>নিণীষ | হোম</title>
            </Helmet>
            <Banner/>
            <EnglishOlympiad/>
            <Testimonials/>
        </div>
    );
};

export default Home;