import { useEffect, useState } from "react";
import Carosel from "../Slider/Carosel";
import CategorySection from "../CategorySection/CategorySection";
import { Helmet } from "react-helmet";


const Home = () => {


    const [categories, setCategories] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);


    return (
        <div className="my-12">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <div >
                <Carosel></Carosel>
            </div>

            <div>
                <h3 className="text-lg md:text-3xl font-extrabold text-center my-9">Our Book Categories</h3>
                <p className="md:w-3/6 mx-auto my-3 text-justify">
                    Libraries typically organize their collections using a classification system to help patrons easily locate books. One of the most widely used classification systems is the Dewey Decimal Classification (DDC) system.</p>
                <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        categories?.map(cate => <CategorySection
                            key={cate._id}
                            cate={cate}
                        ></CategorySection>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;