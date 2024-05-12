import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";



const Details = () => {

    const {user} =  useContext(AuthContext)
     
const navigate = useNavigate();
    const { id } = useParams();
    const allBook = useLoaderData();
    const details = allBook?.find(item => item._id === id)

    const { _id, name,borrowedBooks, authorName, quantity, shortDescription, rating, category, photo } = details;

    const updatedBooks = { _id, name, authorName, quantity:quantity-1,borrowedBooks:parseInt(borrowedBooks)+1, shortDescription, rating, category, photo, isSold: true ,buyersEmail:user?.email};


     

    const handleUpdate = (_id) => {

        if(borrowedBooks > 3 ){
           return  Swal.fire({
            title: "error!",
            text: "You can not buy Book more then 3 !",
            icon: "error"
        });
        }

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
                        text: "Buy Book successfully!",
                        icon: "success"
                    });
                }
                navigate('/borrowedBooks')
            })

    }

    return (
        <div className="my-12 md:flex shadow-lg  gap-10 md:p-10 p-5">
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className="md:flex-1 flex justify-center">
                <img className="w-44 h-80 max-sm:mb-5" src={photo} alt="" />
            </div>
            <div className='md:flex-1 md:space-y-3'>
                <h2 className="font-bold">Name: {name}</h2>
                <h2 className="font-bold">Author Name: {authorName}</h2>
                <p>{shortDescription}</p>
                <div className='flex justify-between'>
                    <h2 className="font-bold">Category: {category}</h2>
                    <h2 className="font-bold text-red-500">Rating: <span className='mx-1'>{rating}</span> Star</h2>
                </div>
                <p className="font-bold">Quantity: {quantity} pis</p>

                <div className="flex justify-between">
                    <Link to={-1}><button className="  my-5 text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold">Back</button></Link>

                    <Link ><button onClick={() => handleUpdate(_id)} className="my-5 text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold">Buy Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Details;