import PropTypes from 'prop-types';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

const Testimonial = ({testimonialInfo}) => {
    const {image, name, title, sub_Title, details,} = testimonialInfo;

    return (
        <>

         <div className="bg-white shadow relative  py-10 px-4 md:px-10 rounded-md mt-36 ">

            <div className="testimonialImageStyle shadow absolute -top-24 left-1/2 -translate-x-1/2 ">
                <img src={image}  alt="Armina Jahan Ahana Picture" />
            </div>
            <div className="text-center pt-8 flex flex-col">
                <div className="mb-6 text-lg flex-grow">
                    <p className="font-bold">{name}</p>
                    <p>{title}</p>
                    <p>{sub_Title}</p>
                </div>
                <div className="grid gap-2 ">
                    <span className="text-slate-700 text-xl w-fit mx-auto">
                       <BiSolidQuoteAltLeft/>
                    </span>
                    <p className="text-justify">{details}</p>
                    <span className="text-slate-700 text-xl  w-fit mx-auto">
                        <BiSolidQuoteAltRight/>
                    </span>
                </div>
            </div>
        </div>

        </>
    );
};

Testimonial.propTypes = {
    testimonialInfo: PropTypes.object
};

export default Testimonial;