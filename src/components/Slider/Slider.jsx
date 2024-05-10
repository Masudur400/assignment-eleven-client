import { Link } from "react-router-dom";

 
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
              <Link to='/addBook' className='w-full  bg-green-600  font-bold px-5 py-4 mt-4 text-sm   text-white capitalize transition-colors duration-300 transform   rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none  '>
                Add Book
              </Link>
            </div>
          </div>
        </div>
      )
};

export default Slider;