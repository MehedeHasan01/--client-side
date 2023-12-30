import { ImGift } from "react-icons/im";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";
import CallAnyTime from "../CallAnyTime/CallAnyTime";
const Testimonials = () => {
    const testimonialsInfo =[
        {
            image: 'https://i.ibb.co/PWDwRCK/Armina-Jahan-Ahana.jpg',
            name: 'অরনিমা জাহান অহনা',
            title: 'সফিউদ্দিন সরকার একাডেমি এন্ড কলেজ',
            sub_Title: 'মুজিব অলিম্পিয়াড ২০২৩ - গাজীপুর পর্বের বিজয়ী',
            details: '"যেখানে হয় জ্ঞানের বারিশ, এরকম একটি প্রতিষ্ঠানের নাম নিণীষ।" আমি মুজিবের অনেক বড় ভক্ত, তিনি আমার আদর্শ। আজ তার সম্পর্কে এরকম একটি অনুষ্ঠান উপহার পেয়ে আমি সত্যিই খুব খুশি। তাই আমি নিণীষকে ধন্যবাদ জানাচ্ছি। আর আজ আমি উপলব্ধি করতে পেরেছি যে নিণীষ মানে জ্ঞান।'
        },
        {
            image: 'https://i.ibb.co/Yy3H4yQ/Gurdian.jpg',
            name: 'অভিভাবক',
            title: 'মুজিব অলিম্পিয়াড ২০২৩ - খুলনা পর্ব',
            details: 'নিণীষ কে যতই ধন্যবাদ দিবো আমরা কম, কারন তাদের জন্য-ই আমাদের বাচ্চা রা আজ সঠিক ইতিহাস জানতে পারছে এবং তাদের এই সুন্দর আয়োজন যেনো প্রতিবছর হয় এটাই আমাদের চাওয়া।',
        },
        {
            image: 'https://i.ibb.co/JdbfZkr/Nafisa-Islam-Shimu.jpg',
            name: 'নাফিসা ইসলাম শিমু',
            title: '২০২০ সালের জাতীয় পর্যায়ের বিজয়ী, ',
            sub_Title: ' লালমাটিয়া মহিলা কলেজ',
            details: '২০২০ সালের মুজিব অলিম্পিয়াড এ অংশগ্রহণ করে আমি খুলনা বিভাগীয় পর্যায়ে বিজয়ী হয়ে জাতীয় পর্যায়ে আমি চ্যাম্পিয়ন হই নিম্ন মাধ্যমিক ক্যাটাগরিতে। নিণীষ এর এই সুন্দর আয়োজনে আমি যুক্ত হতে পেরে আমি সত্যিই আনন্দিত। নিণীষ টিম কে ধন্যবাদ আমার মেধা কে মূল্যায়ন করে আমাকে নিণীষ একটা অংশ হিসেবে তাদের টিমে যুক্ত করানোর জন্য। ২০২৩ সালের মুজিব অলিম্পিয়াড এর আয়োজক কমিটির সদস্য হিসেবে কাজ করতে পেরে আমি সত্যিই গর্বিত।',
        },
    ]
    return (
        <div className=' py-16'>
            <div className="text-center pb-4 ">
                <p className="flex justify-center items-center gap-1 text-sm text-violet-700 font-semibold">
                    <span>
                    <ImGift/>
                    </span>
                    প্রশংসাপত্র
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold mt-2">নিণীষ</h1>
            </div>

            <div className="mx-auto px-3  xl:px-0 max-w-[1200px]">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 z-10">
                    {
                        testimonialsInfo?.map((info, idx)=> <Testimonial key={idx} testimonialInfo={info} /> )
                    }
                </div>

            <div className="max-w-fit mx-auto mt-12">
                    <Link to={'/about'} className="rounded-md text-center bg-green-600 px-4 py-3 text-lg text-white  block hover:bg-green-700" >
                        বিস্তারিত জানুন
                    </Link>
            </div>
            <div className="mt-12 -mb-12">
            <CallAnyTime/>
            </div>
            </div>


        </div>
    );
};

export default Testimonials;