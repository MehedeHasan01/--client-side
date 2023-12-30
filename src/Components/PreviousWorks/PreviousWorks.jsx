import { FaRegFlag } from "react-icons/fa";
import { Link } from "react-router-dom";
const PreviousWorks = () => {
    return (
        <div >
            <div className="px-3 pb-16 xl:px-0">

                <div className="text-center py-16">
                    <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                        <span>
                            <FaRegFlag/>
                        </span>
                        আয়োজন
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-2">পূর্ববর্তী আয়োজন সমূহ</h1>
                </div>

                <div className="pb-10 flex justify-center text-lg">
                <div className="flex justify-center  align-middle">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                        <div className="bg-green-900 circ text-white p-5  rounded-full">
                            <Link to={'/mujibOlympiad23'} > মুজিব অলিম্পিয়াড ২০২৩</Link>
                        </div>
                        <div className="bg-green-900 circ text-white p-5  rounded-full">
                            <Link to={'/mujibOlympiad20'} > মুজিব অলিম্পিয়াড ২০২০</Link>
                        </div>
                        <div className="bg-green-900 circ text-white p-5 rounded-full">
                            <Link to={'/mujibOlympiad20'} >মুজিবর্ষ বিতর্ক প্রতিযোগিতা</Link>
                        </div>
                        <div className="bg-green-900 circ  text-white p-5 rounded-full">
                            <Link to={'/wilderness20'} >Wilderness Open 2020</Link>
                        </div>
                    </div>
                </div>
              </div>

              <div className="max-w-fit mx-auto mt-12">
                <Link to={'/events'} className="rounded-md text-center bg-green-600 px-4 py-3 text-lg  text-white block hover:bg-green-700" >
                    বিস্তারিত জানুন
                </Link>
              </div>

            </div>

        </div>
    );
};

export default PreviousWorks;