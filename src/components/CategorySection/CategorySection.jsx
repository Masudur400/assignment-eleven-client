 
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';


const CategorySection = ({cate }) => {


    const {photo, category, shortDescription} = cate;

    return (
        <div data-aos="zoom-in" className='flex flex-col shadow-md p-3 border rounded-md'>
            
            <div className='flex justify-center'>
                <img className='w-52 h-72' src={photo} alt="" />
            </div>
           <div className='flex-grow'>
           <h3 className="font-bold text-xl my-2">Category: {category}</h3>
            <p className='text-justify'>{shortDescription}</p>
           </div>
           <Link to={`/showAll/${category}`}><button className=" w-full text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold my-5">Show All</button></Link>
        </div>
    );
};

CategorySection.propTypes ={
    cate:PropTypes.object
}

export default CategorySection;