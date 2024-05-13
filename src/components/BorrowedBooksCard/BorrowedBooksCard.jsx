import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";


const BorrowedBooksCard = ({ book }) => {

    const {user} = useAuth();
    const navigate = useNavigate();


    const { _id, name, authorName, quantity,shortDescription, borrowedBooks, rating, category, photo } = book;

    const updatedBooks = { _id, name, authorName,quantity:parseInt(quantity)+1, borrowedBooks: parseInt(borrowedBooks) - 1, shortDescription, rating, category, photo, isSold: true, buyersEmail: user?.email };

    const handleUpdate = (_id) => {

        if(borrowedBooks < 1 ){
           return  Swal.fire({
            title: "error!",
            text: "No book Available !",
            icon: "error"
        });
        } 


        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to Return this Book!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/books/${_id}`, {
            method: 'PATCH',
              headers: {
                  'content-type': 'application/json'
             },
             body: JSON.stringify(updatedBooks)
          })
              .then(res => res.json())
               .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                     Swal.fire({
                         title: "Success!",
                         text: "Return Book successfully!",
                         icon: "success"
                     });
                 }
                 navigate('/borrowedBooks')
              })
            }
        });

    }





    return (
        <div className='shadow-lg p-5 border rounded-md flex flex-col'>
            <p className="my-2">Borrowed: {borrowedBooks}</p>
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
            <Link><button onClick={()=>handleUpdate(_id)} className=" w-full my-5 text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold">Return</button></Link>
        </div>
    );
};

BorrowedBooksCard.propTypes = {
    book: PropTypes.object
}

export default BorrowedBooksCard;