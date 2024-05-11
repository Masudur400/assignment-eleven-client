import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

 
const AllBooks = () => {

    const [allbooks, setAllBooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setAllBooks(data))
    },[])
    console.log(allbooks);

    return (
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
             {
                allbooks?.map(book => <SingleBook
                     key={book._id}
                      book={book}
                      ></SingleBook>)
             }
        </div>
    );
};

export default AllBooks;