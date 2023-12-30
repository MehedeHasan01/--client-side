import { FaRegFlag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { FaSmileWink } from "react-icons/fa";
import { FaSmileBeam } from "react-icons/fa";

const FutureWorks = () => {
    const futureWorksInfo =[
        {
            name: 'বাংলাদেশ প্রোগ্রামিং কন্টেস্ট ২০২৪',
            place: 'সমগ্র বাংলাদেশ',
            date: 'মার্চ থেকে মে - ২ মাস ব্যাপী',
            imogi: `${<FaFaceSmile/>}`,
            color: 'from-slate-950 to-slate-700'
        },
        {
            name: 'Youth Skill Fest 2024',
            place: 'ঢাকা, গাজীপুর',
            date: 'জুন, জুলাই',
            imogi: `${<FaSmileWink/>}`,
            color: 'from-slate-950 to-cyan-700'
        },
        {
            name: 'Smart Bangladesh Debate Fest 2024',
            place: 'সমগ্র বাংলাদেশ',
            date: 'সেপ্টেম্বর',
            imogi: `${<FaSmileBeam/>}`,
            color: 'from-slate-950 to-violet-700'
        },
    ]

    return (
        <>
        <div className="px-3  xl:px-0 pb-20 bg-slate-300 mb-4">

            <div className="text-center py-16">
                <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                    <span>
                    <FaRegFlag/>
                    </span>
                    আয়োজন
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold mt-2">পরবর্তী কার্যক্রম সমূহ</h1>
            </div>

            <div className="max-w-[1200px] mx-auto">
                <div className="grid gap-4">
                    {
                        futureWorksInfo.map((futureWorks, idx)=>

                        <div key={idx}
                        className={`
                        bg-gradient-to-tr text-white  rounded-md px-10 py-6 flex flex-col-reverse md:flex-row items-center justify-between
                        ${futureWorks.color}
                        `}>
                       <div className="text-center md:text-start">
                            <h3 className=" text-3xl font-semibold text-violet-400">
                                {futureWorks.name}
                            </h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-12 mt-4">
                                <div className="grid gap-4 text-lg">
                                    <p className="text-xl font-bold">স্থান</p>
                                    <p>{futureWorks.place}</p>
                                </div>
                                <div className="grid gap-4 text-lg">
                                    <p className="text-xl font-bold">সম্ভাব্য সময়</p>
                                    <p>{futureWorks.date}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-8xl">
                                <FaFaceSmile/>
                            </span>
                        </div>
                        </div>

                        )
                    }
                </div>
            </div>

        </div>

        </>
    );
};

export default FutureWorks;