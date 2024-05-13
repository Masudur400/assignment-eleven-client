import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import BorrowedBooksCard from "../BorrowedBooksCard/BorrowedBooksCard";

 
const BorrowedBooks = () => {

    const {user} = useAuth();
    const allBooks = useLoaderData()

    const borrowedBooks = allBooks?.filter(item => item.buyersEmail=== user?.email && item?.borrowedBooks > 0)
    console.log(borrowedBooks)

    console.log(allBooks)



    return (
        <div >
            <Helmet>
                <title>Borrowed Books</title>
            </Helmet>
            <p className="my-5 font-bold">Borrowed Books : {borrowedBooks.length}</p>
             <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
             {
                borrowedBooks?.map(book =><BorrowedBooksCard key={book._id} book={book}></BorrowedBooksCard>)
             }
            
             </div>
        </div>
    );
};

export default BorrowedBooks;