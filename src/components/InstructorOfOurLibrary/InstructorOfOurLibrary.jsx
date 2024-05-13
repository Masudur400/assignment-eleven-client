 import p1 from '../../assets/images/client-1.jfif';
import p2 from '../../assets/images/client-2.jpg';
import p3 from '../../assets/images/client-3.jpg';
import { Typewriter } from "react-simple-typewriter";



const InstructorOfOurLibrary = () => {
    return (
        <div className='mt-20 px-6'>
            <div>
                <h1 className='font-bold text-2xl text-center'>Instructor of Our Library</h1>
                <p className='md:w-1/2 text-center mt-5 m-auto'>
                    A library instructor, also known as a library educator or library teacher, is a professional who specializes in teaching information literacy skills and promoting library resources and services. </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                <div className="card bg-base-100 shadow-xl border py-2">
                    <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Jhon Hardy
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <span style={{ color: '', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Chief Executive Officer (CEO)']}
                                    loop={50}
                                    cursor
                                    cursorStyle='✒️'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span> </p>
                        {/* <div className="card-actions justify-end">
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ width: '20px', height: '20px' }} />
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border py-2">
                    <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Ben tenechen
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <span style={{ color: '', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Chief Operating Officer (COO)']}
                                    loop={50}
                                    cursor
                                    cursorStyle='✒️'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </p>
                        {/* <div className="card-actions justify-end">
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border py-2">
                    <figure><img className='w-[300px] h-[200px] rounded-2xl' src={p3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Harry Petter
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>
                            <span style={{ color: '', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Associate Manager,']}
                                    loop={50}
                                    cursor
                                    cursorStyle='✒️'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}

                                />
                            </span>
                        </p>
                        {/* <div className="card-actions justify-end">
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ color: 'yellow', width: '20px', height: '20px' }} />
                            <IoStarSharp style={{ width: '20px', height: '20px' }} />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorOfOurLibrary;