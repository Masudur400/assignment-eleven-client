import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SingleBook = ({ book }) => {

    const { _id,name, authorName, rating, category, photo } = book;

    return (
        <div className='shadow-lg p-5 rounded-md flex flex-col border'>
            <div className='flex justify-center mb-4'>
                <img className='w-64 h-96' src={photo} alt="" />
            </div>
            <div className='flex-grow'>
            <h2 className="font-bold">Name: {name}</h2>
            <h2 className="font-bold">Author Name: {authorName}</h2>
            <div className='flex justify-between'>
                <h2 className="font-bold">Category: {category}</h2>
                <h2 className="font-bold text-red-500">Rating: <span className='mx-1'>{rating}</span> Star</h2> 
            </div>
            </div>
            <Link to={`/updateBook/${_id}`}><button className=" w-full my-5 text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold">Update</button></Link>
        </div>
    );
};

SingleBook.propTypes = {
    book: PropTypes.object,
}

export default SingleBook;