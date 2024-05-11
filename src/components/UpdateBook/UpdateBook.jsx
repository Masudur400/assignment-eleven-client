import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
 


const UpdateBook = () => {

    const book = useLoaderData();
     
    const { name, authorName,rating, category,photo } = book;
 
    const updateBook = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const authorName = form.authorName.value
        const rating = form.rating.value
        const category = form.category.value
        const photo = form.photo.value

        const updateBooks = {name, authorName,rating,category,photo}  ;
        console.table(updateBooks);
    }

    return (
        <div>
            <Helmet>
                <title>Update Card & Craft</title>
            </Helmet>
             
            <div className="md:w-2/3 w-4/5 mx-auto shadow-lg bg-green-100 text-black mt-5 md:mt-10 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-center">Update a Book</h3>
                <form
                onSubmit={updateBook}
                >
                    <div className="grid md:grid-cols-2 gap-5 mt-5"> 

                        <div>
                            <p className="text-start">Book Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" defaultValue={name} placeholder="Book Name" name="name" id="" />
                        </div>

                        <div>
                            <p className="text-start">Author Name </p>
                            <input className="w-full border-2 px-4 py-3 rounded-lg" type="text" defaultValue={authorName} placeholder="Author Name" name="authorName" id="" />
                        </div> 

                        <div>
                            <p className="text-start">Rating </p>
                            <select defaultValue={rating}  className="w-full border-2 px-4 py-3 rounded-lg" name="rating" id=""> 
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                           
                        </div>  

                        <div>
                            <p className="text-start">Category </p>
                             <select defaultValue={category} className="w-full border-2 px-4 py-3 rounded-lg" name="category" id=""> 
                                <option value="Novel">Novel</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History">History</option>
                                <option value="Drama">Drama</option>
                             </select>
                            
                        </div> 

                    </div>
                    <div>
                        <p className="text-start">Image </p>
                        <input className="w-full rounded-lg border-2 px-4 py-2" type="text" placeholder="Image URL" defaultValue={photo} name="photo" id="" />
                    </div>



                    <input className="w-full py-2 mb-6 font-bold hover:bg-green-400 text-white bg-green-500 mt-5" type="submit" value="Update Craft Item" />

                </form>
            </div>
        </div>
    );
};

export default UpdateBook;