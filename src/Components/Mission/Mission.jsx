import { SiCrunchyroll } from "react-icons/si";
const Mission = () => {
    const missionInfo =[
        {
         nameBangla: 'দৃষ্টিকোণ পরিবর্তন',
         nameEnglish: 'Perspective Shift'
        },
        {
         nameBangla: 'প্রতিযোগিতা মূলক শিক্ষা',
         nameEnglish: 'Competitive Education'
        },
        {
         nameBangla: 'উদ্ভাবনী শিক্ষা',
         nameEnglish: 'Innovative Education'
        },
        {
         nameBangla: 'সম্প্রেষণ উন্নতি ও নেতৃত্ব',
         nameEnglish: 'Communication Enhancement & Leadership'
        },
        {
         nameBangla: 'প্রযুক্তি ও কর্ম',
         nameEnglish: 'Technology & Work'
        },
        {
         nameBangla: 'স্মার্ট সিটিজেন',
         nameEnglish: 'Smart Citizen'
        },
    ]
    return (
        <div className="max-w-[1200px] mx-auto px-3 xl:px-0">

            <div className="text-center py-16">
                <p className="flex justify-center items-center gap-1 text-sm text-violet-800 font-semibold">
                    <span>
                        <SiCrunchyroll />
                    </span>
                    মিশন
                </p>
                <h1 className="text-4xl sm:text-5xl font-semibold mt-2">আমাদের মিশন</h1>
            </div>
            <div className="pb-8">
               <p className="text-lg italic text-center">
                    আগামীর ভবিষ্যৎকে সঠিকভাবে মূল্যায়নের জন্য আমরা সবার জন্য সমান এবং সহজভাবে সহ-শি ক্ষা চর্চার
                    পরিবেশ তৈরি করি। স্মার্ট বাংলাদেশ গঠনে আগামীর ভবিষ্যৎ কে নিরলস প্রচেষ্টা ও উদ্ভাবনের মাধ্যমে
                    সহ-শিক্ষা কার্যক্রমের প্রতি আগ্রহ গড়ে তুলে , গুণগত শিক্ষার সকল প্রতি বন্ধকতা ভেঙে, একটি সহজ
                    অনলাইন ভিত্তিক সহ-শিক্ষার ইকোসিস্টেম গড়ে তুলে আগামীর স্মার্ট সিটিজেন এবং স্মার্ট কমিউনিটি কে
                    পুরো বিশ্বের সামনে আমরা তুলে ধরতে চাই
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 py-8 text-lg gap-4">
                    {
                        missionInfo.map((mission,idx) => <div key={idx}
                        className="text-center bg-gradient-to-tr from-green-950 to-green-700 text-white p-4 rounded-md"
                        >
                            <p>{mission.nameBangla}</p>
                            <p>{mission.nameEnglish}</p>
                        </div> )
                    }
                </div>


            </div>


        </div>
    );
};

export default Mission;