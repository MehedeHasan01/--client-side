import { CgDanger } from "react-icons/cg";

const RegistrationFeeInfo = () => {
    return (
        <>

        <div>
            <h3 className="text-3xl font-semibold">কুইজ এর রেজিস্ট্রেশন অবস্থাঃ</h3>
            <div className="flex text-lg py-4 items-center gap-3 my-1">
                <span className="text-4xl text-yellow-500">
                    <CgDanger/>
                </span>
                <p>
                আপনি এখনো রেজিস্ট্রেশন ফি দেন নি। অনলাইন কুইজে অংশ নিতে হলে রেজিস্ট্রেশন ফি দিতে হবে।
                </p>
            </div>

            <h4 className="text-2xl font-semibold">রেজিস্ট্রেশন ফি দেয়ার জন্যঃ</h4>
            <p className="py-2">নিমক্ত যেকোন একটি নম্বরে <span className="font-bold">১৫০ টাকা</span> রেজিস্ট্রেশন ফি পাঠিয়ে দিনঃ</p>
            <div className="grid gap-2 text-xl py-4 bg-slate-900 text-white px-4 rounded-md">
            <p className="py-2 flex gap-6"><span className="font-bold">01793000873</span> বিকাশ পার্সোনাল</p>
            <p className="py-2 flex gap-6"><span className="font-bold">01303351341</span> বিকাশ পার্সোনাল</p>
            <p className="py-2 flex gap-6"><span className="font-bold">01793000873</span> নগদ পার্সোনাল</p>
            <p className="py-2 flex gap-6"><span className="font-bold">01303351341</span> নগদ পার্সোনাল</p>
            <p className="py-2 flex gap-6"><span className="font-bold">01303351341</span>  রকেট পার্সোনাল</p>
          </div>
          <div className="py-2">
            <p>টাকা পাঠানো হয়ে গেলে ট্রানজেকশন(Trx) আইডি এবং যে নম্বর থেকে রেজিস্ট্রেশন ফি পাঠিয়েছেন সেই তথ্য দিন
            </p>
          </div>
          
        </div>

        </>
    );
};

export default RegistrationFeeInfo;