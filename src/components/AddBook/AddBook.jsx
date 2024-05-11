import { Helmet } from "react-helmet";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
 
 
const AddBook = () => {

    const {user} = useAuth()

    const handleAddBook = e =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const authorName = form.authorName.value
        const quantity = form.quantity.value
        const shortDescription = form.shortDescription.value
        const rating = form.rating.value
        const category =form.category.value
        const email = user?.email
        const photo = form.photo.value
        form.reset()
         

        const addBook ={name,authorName,quantity,shortDescription,rating,category,email,photo}
        console.table(addBook);


        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Added book successfully!",
                        icon: "success"
                    });
                    // navigate('/borrowedBooks')
                }
            })

    }
 
    return (
        <div>
            <Helmet>
                <title>Add Book</title>
            </Helmet>
            <div data-aos="flip-left" className="md:w-2/3 w-4/5 mx-auto shadow-lg     mt-5 md:my-10 p-5 rounded-lg">
                <h3 className="text-2xl font-extrabold text-center">Add a single Book</h3>
                <form 
                onSubmit={handleAddBook}
                >
                    <div className="grid md:grid-cols-2 gap-5 mt-5">


                        <div>
                            <p className="text-start">Book Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Book Name" name="name" id="" />
                        </div>

                        <div>
                            <p className="text-start">Author Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Author Name" name="authorName" id="" />
                        </div>

                        <div>
                            <p className="text-start">Quantity of the book </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Quantity of the book" name="quantity" id="" />
                        </div>

                        <div>
                            <p className="text-start">Short description </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Short description" name="shortDescription" id="" />
                        </div>

                        <div>
                            <p className="text-start">Rating </p>
                            <select  className="w-full border-2 px-4 py-3 rounded-lg" name="rating" id=""> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                            {/* <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Rating" name="rating" id="" /> */}
                        </div>
                        <div>
                            <p className="text-start">Category </p>
                             <select  className="w-full border-2 px-4 py-3 rounded-lg" name="category" id=""> 
                                <option value="Novel">Novel</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                             </select>
                            
                        </div> 
                         
                        <div>
                            <p className="text-start">User Email </p>
                            <input disabled="disabled" className="w-full border-2 px-4 py-3 rounded-lg" type="email" placeholder="Email" 
                            defaultValue={user?.email}
                             name="email" id="" />
                        </div>
                        {/* <div>
                            <p className="text-start">User Name </p>
                            <input  disabled="disabled" className="w-full border-2 px-4 py-3 rounded-lg  " type="text" placeholder="User Name" 
                            defaultValue={user?.displayName}
                             name="name" id="" />
                        </div> */}
                        <div>
                            <p className="text-start">Image </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" placeholder="Image URL" name="photo" id="" />
                        </div> 


                    </div> 
                        

                    <input className=" w-full text-center px-4 py-2 rounded-md bg-gray-500 hover:bg-gray-400 border hover:border-red-500 text-white font-bold my-5" type="submit" value="Add Book" />

                </form>
            </div>
        </div>
    );
};

export default AddBook;