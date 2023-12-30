import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyRegistation = ({myRegistation}) => {
    const {_id,image, event} = myRegistation;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow rounded-md">
            <figure><img src={image} alt="" className='h-full' /></figure>
            <div className="card-body ">
                <div className='font-semibold text-lg flex space-x-1 items-center '>
                    <span className='text-2xl font-bold text-gray-900'>
                        Event:
                    </span>
                    <h1 className='text-gray-700'>{event}</h1>
                </div>

                    <Link to={`/myRegistationDetails/${_id}`} className="w-fit cursor-pointer rounded-md bg-gradient-to-tr  from-violet-700 to-indigo-800 px-4 py-2 text-white">
                    আরো জানুন
                    </Link>
            </div>
            </div>
        </div>
    );
};

MyRegistation.propTypes = {
    myRegistation: PropTypes.object
};

export default MyRegistation;