import {  useNavigate } from "react-router-dom";
import RegistrationFeeInfo from "../../Components/RegistrationFeeInfo/RegistrationFeeInfo";
import SpecialNote from "../../Components/SpecialNote/SpecialNote";
import { useState } from "react";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";

const Registration = () => {
    const {user} = UseAuth();
    const navigate = useNavigate();

    const {email: userEmail, displayName, image ,division, phone } = user;

    const [phoneNumberError, setPhoneNumberError] = useState(false)

    console.log(user);


    const handleUserAccount = events =>{
        events.preventDefault();
        const form = events.target;
        const name = form.name.value
        const dateOfBirth = form.dateOfBirth.value
        const district = form.district.value
        const clas = form.clas.value
        const institute = form.institute.value
        const category = form.category.value
        const event = form.event.value
        const amountMoney = form.amountMoney.value
        const translationID = form.translation.value
        const senderNumber = form.senderNumber.value
        const receiverNumber= form.receiverNumber.value
        const refer = form.refer.value


        const ValidatePhoneNumber = /^(\(?\d{3}\)?[-\s]?)?\d{4}[-\s]?\d{4}$/;
        if( !ValidatePhoneNumber.test(senderNumber)){
            setPhoneNumberError(true)
            return
        }

        const userInfo = {name,userEmail, displayName, image ,division, phone,  dateOfBirth, district, clas, institute, category,event, amountMoney,translationID, senderNumber, receiverNumber, refer}



        fetch(`http://localhost:5000/registations`, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(() =>{
            navigate('/')
       })
       .catch(errror => {
        console.error(errror);
       })
    }


    return (
        <>
        <Helmet>
            <title>নিণীষ | রেজিস্ট্রেশন</title>
        </Helmet>
        <div >
            <div className="form flex justify-center  px-2 mt-5">
                <div>
                    {/* User Account info */}
                    <form onSubmit={handleUserAccount}>
                        <div className="max-w-3xl w-full"  >

                            <div>
                                <h3 className="text-3xl pb-3 text-center font-semibold">
                                    নিচের তথ্যগুলো সঠিকভাবে পূরন করুন
                                </h3>
                            </div>

                            {/* name */}
                            <div className="pb-10">
                                <label htmlFor="name">নামঃ (In English)</label>
                                <input id="name" name="name" required placeholder="নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                                <p className="mt-2 font-semibold text-red-600 text-sm">এখানে প্রদত্ত নামই সার্টিফিকেটের জন্য ব্যাবহার করা
                                    হবে। একবার জমা দিলে তা আর পরিবর্তনযোগ্য নয়।</p>
                            </div>

                            {/* date Of Birth */}
                            <div className="pb-10">
                                <label htmlFor="dateOfBirth">জন্ম তারিখঃ</label>
                                <input id="dateOfBirth" name="dateOfBirth" required placeholder="আপনার জন্ম সাল এবং তারিখ সিলেক্ট করুন" type="date" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                            </div>

                            {/* district */}
                            <div className="pb-10">
                                <label htmlFor="district">জেলাঃ</label>
                                <input id="district" name="district" required placeholder="আপনার জেলার নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                            </div>

                            {/* class */}
                            <div className="pb-10">
                                <label htmlFor="class">শ্রেণিঃ</label>
                                <input id="class" name="clas" required placeholder="আপনার বিদ্যালয়ের শ্রেণি লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                            </div>

                            {/* institute */}
                            <div className="pb-10">
                                <label htmlFor="institute">শিক্ষা প্রতিষ্ঠানঃ</label>
                                <input id="institute" name="institute" required placeholder="আপনার বিদ্যালয়ের নাম লিখুন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100"  />
                            </div>

                            {/* category */}
                            <div className="pb-10">
                                <label htmlFor="category">ক্যাটাগরীঃ</label>
                                <select id="category" name="category" className="bg-purple-100 rounded mt-3 w-full p-3" required>
                                    <option value="" hidden="">সিলেক্ট করুন</option>
                                    <option value="নিম্ন মাধ্যমিক - (৬ষ্ঠ থেকে ৮ম শ্রেণি)">নিম্ন মাধ্যমিক - (৬ষ্ঠ থেকে ৮ম শ্রেণি)</option>
                                    <option value="মাধ্যমিক - (৯ম এবং ১০ম শ্রেণি)">মাধ্যমিক - (৯ম এবং ১০ম শ্রেণি)</option>
                                    <option value="উচ্চ মাধ্যমিক - (১১শ, ১২শ, এইচএসসি ২০২৩ এবং পলিটেকনিক শিক্ষার্থীরা)">উচ্চ মাধ্যমিক - (১১শ, ১২শ, এইচএসসি ২০২৩ এবং পলিটেকনিক শিক্ষার্থীরা)</option>
                                </select>
                                <p className="mt-2 font-semibold text-red-600 text-sm">শ্রেণি অনুসারে ক্যাটাগরি সিলেক্ট করুন। ভুল
                                    ক্যাটাগরিতে পরীক্ষা দিলে তা বাতিল বলে গন্য হবে</p>
                            </div>


                            {/* event */}
                            <div className="pb-10">
                                <label htmlFor="event">ইভেন্টঃ</label>
                                <select id="event" name="event" className="bg-purple-100 rounded mt-3 w-full p-3" required>
                                    <option value="" hidden="">সিলেক্ট করুন</option>
                                    <option value="Science">Science</option>
                                    <option value="Programming">Programming</option>
                                    <option value="Math">Math</option>
                                    <option value="English">English</option>
                                </select>
                            </div>


                            {/* Registration form and Registration Fee Info */}
                            <div className="mt-3 mb-16 py-3 px-5 rounded-b-md bg-white">

                            <RegistrationFeeInfo/>


                            <h4 className="text-2xl font-semibold my-1">রেজিস্ট্রেশন ফি আবেদন ফর্ম</h4>

                            <div className="mt-4">

                             {/* amountMoney */}
                             <div className="pb-10">
                                <label htmlFor="amountMoney">টাকার পরিমানঃ</label>
                                <input id="amountMoney" name="amountMoney" required placeholder="টাকার পরিমান দিন" type="number" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />

                            </div>

                            {/* translation */}
                            <div className="pb-10">
                            <label htmlFor="translation">ট্রানজেকশন(Trx) আইডিঃ</label>
                            <input id="translation" name="translation" required placeholder="ট্রানজেকশন(Trx) আইডি লিখুন (AKMXXXXX0F)" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                            </div>

                            {/* senderNumber */}
                            <div className="pb-10">
                                <label htmlFor="senderNumber">সেন্ডার নম্বরঃ</label>
                                <input id="senderNumber" name="senderNumber" required placeholder="যে নম্বর থেকে রেজিস্ট্রেশন ফি পাঠিয়েছেন লিখুন(১১ ডিজিট)" type="number" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />

                                <div className="mt-2 text-sm">
                                {
                                    phoneNumberError ?
                                    <p className="text-red-600">১১ ডিজিট এর নম্বর দিন।</p>
                                    :
                                    <p className="text-slate-600">১১ ডিজিট এর নম্বর দিন। (In English)</p>
                                }
                                </div>
                            </div>


                            {/*receiverNumber  */}
                            <div className="pb-10">
                                <label htmlFor="receiverNumber">রিসিভার নম্বরঃ</label>
                                <select id="receiverNumber" name="receiverNumber" className="bg-purple-100 rounded mt-3 w-full p-3" required>
                                    <option value="" hidden="">সিলেক্ট করুন</option>
                                    <option value="01793000873(Bkash)">01793000873(Bkash)</option>
                                    <option value="01303351341(Bkash)">01303351341(Bkash)</option>
                                    <option value="01793000873(Nagad)">01793000873(Nagad)</option>
                                    <option value="01303351341(Nagad)">01303351341(Nagad)</option>
                                    <option value="01303351341(Rocket)">01303351341(Rocket)</option>
                                </select>
                                <p className="mt-2 text-sm font-semibold text-red-600">যে নম্বরে রেজিস্ট্রেশন ফি পাঠিয়েছেন সিলেক্ট করুন</p>
                            </div>

                            {/* refer */}
                            <div className="pb-10">
                                    <label htmlFor="refer">রেফারেন্সঃ (যদি থাকে)</label>
                                    <input id="refer" name="refer" placeholder="রেফারেন্স দিন" type="text" className="rounded text-black mt-3 w-full p-3 bg-purple-100" />
                            </div>

                             </div>

                        {/* form submit btn */}
                            <div className="  py-2">
                                <button type="submit" className="bg-gradient-to-tr shadow-md from-fuchsia-800 to-indigo-600 text-white font-bold py-3 px-7 rounded-full disabled:bg-slate-600">
                                    জমা দিন
                                </button>
                            </div>

                            {/* Special Note */}
                            <div className="py-8">
                                <SpecialNote/>
                            </div>

                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Registration;