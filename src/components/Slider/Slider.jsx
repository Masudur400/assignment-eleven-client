import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

 
const Slider = ({image,text}) => {
    return (
        <div
          className='w-full bg-center bg-cover h-[500px]'
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className='flex items-center justify-center w-full h-full bg-black/50'>
            <div className='text-center'>
              <h1 className='text-xl md:w-2/3 mx-auto font-semibold mb-5 text-white lg:text-3xl'>
                {text}
              </h1>
              <br /> 
              <div className="flex justify-center">
              <Link to='/addBook'><button className="flex items-center gap-2 bg-black/70 hover:border-red-500 border-white border font-bold px-4 py-2 text-white rounded-md">Add Book <FaArrowRight></FaArrowRight></button></Link>
              </div>
            </div>
          </div>
        </div>
      )
};

Slider.propTypes = {
    image: PropTypes.backgroundImage,
    text: PropTypes.string,

}

export default Slider;