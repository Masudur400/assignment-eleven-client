import {  useLoaderData, useParams } from "react-router-dom";
import SingleCategory from "../SingleCategory/SingleCategory";
import { Helmet } from "react-helmet";

 
const ShowAllCategory = () => {
    const {category} = useParams()  
    const allBook = useLoaderData();
    // const { _id, name, authorName,rating,  photo } = allBook;
    const filerCategory = allBook.filter(item => item.category === category)
    
    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
            <Helmet>
                <title>Single Category</title>
            </Helmet>
            {
                filerCategory?.map(card => <SingleCategory
                     key={card._id} 
                     card={card}
                     ></SingleCategory>)
            }
        </div>
    );
};

export default ShowAllCategory;