import { Link } from 'react-router-dom';
import logoOlympiad from '../../assets/images/Logo/e-logo.png'

const EnglishOlympiad = () => {
    return (
        <>

         <div className="bg-white py-16">
            <div className="sm:flex justify-center gap-x-12 text-black py-16">
                <img className="py-6 w-3/4 sm:w-1/3 xl:w-1/4 mx-auto sm:mx-0" src={logoOlympiad} alt="English Olympiad Logo" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-center sm:text-start">English Olympiad 2024 সম্পর্কে
                        বিস্তারিত জানতে </h1>
                    <Link to={'/'} className="rounded-md bg-gradient-to-tr mx-auto sm:mx-0 from-blue-800 to-green-800 px-4 py-2 text-white text-lg cursor-pointer mt-2 max-w-fit">
                        এখানে ক্লিক করুন
                    </Link>
                </div>
            </div>
        </div>

        </>

    );
};

export default EnglishOlympiad;