import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const MyRegistationDetails = () => {
    const myRegistationsData = useLoaderData()
    console.log(myRegistationsData);
    const {name,userEmail, displayName,
        image ,division, phone,  dateOfBirth, district, clas, institute, category,event, amountMoney,translationID, senderNumber, receiverNumber, refer} = myRegistationsData;



    return (
        <>
       <Helmet>
            <title>নিণীষ | আমার রেজিস্ট্রেশন বিস্তারিত</title>
        </Helmet>

        <div className=" pb-14 px-2 lg:px-0">
            <div className="max-w-3xl px-2 lg:px-0 mx-auto  bg-white rounded-b-lg">
            <div>
                <img src={image} alt="Ninish Image Not Found" className="w-full  h-[400px]" />
            </div>

            <div className="p-6  md:p-12 flex   justify-start flex-col md:flex-row gap-6">
                <div >
                <img src={image} alt="Ninish Image Not Found" className=" h-[8rem] rounded-lg" />
                </div>
                <div className="space-y-3 ">
                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">নামঃ <span className="text-xl text-gray-700">{name}</span></h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ডিসপ্লে নামঃ
                        <span className="text-xl text-gray-700">{displayName}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ইমেইলঃ
                        <span className="text-xl text-gray-700">{userEmail}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ফোন নাম্বারঃ
                        <span className="text-xl text-gray-700">{phone}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    বিভাগঃ
                        <span className="text-xl text-gray-700">{division}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    জন্ম তারিখঃ
                        <span className="text-xl text-gray-700">{dateOfBirth}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    জেলাঃ
                        <span className="text-xl text-gray-700">{district}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    শ্রেণিঃ
                        <span className="text-xl text-gray-700">{clas}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    শিক্ষা প্রতিষ্ঠানঃ
                        <span className="text-xl text-gray-700">{institute}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ক্যাটাগরীঃ
                        <span className="text-xl text-gray-700">{category}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ইভেন্টঃ
                        <span className="text-xl text-gray-700">{event}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    টাকার পরিমানঃ
                        <span className="text-xl text-gray-700">{amountMoney}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    ট্রানজেকশন আইডিঃ
                        <span className="text-xl text-gray-700">{translationID}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    সেন্ডার নম্বরঃ
                        <span className="text-xl text-gray-700">{senderNumber}</span>
                    </h1>

                    <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                    রিসিভার নম্বরঃ
                        <span className="text-xl text-gray-700">{receiverNumber}</span>
                    </h1>

                    {
                        myRegistationsData?.refer &&
                        <h1 className="text-2xl font-medium flex items-center gap-1 text-gray-900">
                        রেফারেন্সঃ
                            <span className="text-xl text-gray-700">{refer}</span>
                        </h1>
                    }

                </div>
            </div>

        </div>
        </div>
        </>
    );
};

export default MyRegistationDetails;