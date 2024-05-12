import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import BorrowedBooksCard from "../BorrowedBooksCard/BorrowedBooksCard";

 
const BorrowedBooks = () => {

    const {user} = useAuth();
    const allBooks = useLoaderData()

    const borrowedBooks = allBooks?.filter(item => item.buyersEmail=== user?.email)
    console.log(borrowedBooks)

    console.log(allBooks)



    return (
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
            <Helmet>
                <title>Borrowed Books</title>
            </Helmet>
             {
                borrowedBooks?.map(book =><BorrowedBooksCard key={book._id} book={book}></BorrowedBooksCard>)
             }
            
        </div>
    );
};

export default BorrowedBooks;