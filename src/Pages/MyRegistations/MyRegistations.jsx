import { useLoaderData } from "react-router-dom";

import MyRegistation from "./MyRegistation";
import { Helmet } from "react-helmet";

const MyRegistations = () => {

    const myRegistationsData = useLoaderData();

    return (
        <>
        <Helmet>
            <title>নিণীষ | আমার রেজিস্ট্রেশন</title>
        </Helmet>

        <div className=" py-24 ">
            <div className="max-w-[1200px] mx-auto px-2 lg:px-0 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    myRegistationsData?.map(myRegistation => <MyRegistation key={myRegistation._id} myRegistation={myRegistation} />)
                }
            </div>

        </div>
        </div>
        </>

    );
};

export default MyRegistations;