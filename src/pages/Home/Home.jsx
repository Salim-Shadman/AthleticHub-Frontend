import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    useEffect(() => {


        document.title = 'AthleticHub | Home';
        axios.get(`${import.meta.env.VITE_API_URL}/events`)
            .then(res => {
                if (Array.isArray(res.data)) {
                    setEvents(res.data.slice(0, 6));
                } else {
                    console.error("API did not return an array of events.");
                }
            })
            .catch(() => {


                Swal.fire('Error', 'Could not load featured events.', 'error');


            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSubscribe = (e) => {

        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        
        if (email && emailRegex.test(email)) {

            Swal.fire({
                title: 'Thank You!',
                text: `You have successfully subscribed with ${email}`,
                icon: 'success',
                confirmButtonText: 'Great!'

            });

            setEmail('');
        } else {

            Swal.fire({
                title: 'Invalid Email',
                text: 'Please enter a valid email address.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    };




    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };




    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };




    return (
        <div>
            <section className="mb-12">
                <Slider {...sliderSettings}>
                    {events.length > 0 ? (
                        events.slice(0, 3).map(event => ( 
                            <div key={event._id} className="relative h-[500px]">
                               
                                <img 

                                    src={event.image} 
                                    alt={event.eventName} 
                                    className="w-full h-full object-cover" 
                                    loading="lazy"
                                    width="1280"
                                    height="500"

                                />

                                <div className="absolute inset-0  bg-opacity-60 flex flex-col items-center justify-center text-center p-4">
                                    <motion.h2 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl text-white font-bold mb-4">{event.eventName}</motion.h2>
                                    <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-white text-lg">{new Date(event.date).toLocaleDateString()}</motion.p>
                                </div>
                            </div>


                        ))
                    ) : (
                        [1, 2, 3].map(i => (
                             <div key={i} className="relative h-[500px]">
                                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
                            </div>
                        ))
                    )}
                </Slider>
            </section>
            


            <section className="container mx-auto px-4 py-8">

                <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
                {loading ? (
                    <div className="text-center"><span className="loading loading-spinner loading-lg"></span></div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event._id}
                                className="card bg-base-100 shadow-xl overflow-hidden"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <figure>
                                    

                                    <img 
                                        src={event.image} 
                                        alt={event.eventName} 
                                        className="h-56 w-full object-cover" 
                                        loading="lazy"
                                        width="400"
                                        height="224"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h3 className="card-title">{event.eventName}</h3>
                                    <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                                    <p><strong>Location:</strong> {event.location || 'TBD'}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <Link to={`/events/${event._id}`} className="btn btn-primary">View Details</Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
                
                <div className="text-center mt-12">
                    <Link to="/events" className="btn btn-outline btn-primary">See All Events</Link>
                </div>
            </section>

             <section className="bg-base-200 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">What Our Athletes Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="p-6 bg-base-100 rounded-lg shadow-lg">
                            <p className="italic">"AthleticHub is the best platform for finding local competitions. I've discovered so many great events I never would have known about otherwise!"</p>
                            <p className="font-bold mt-4">- Alex Johnson, Sprinter</p>
                        </motion.div>
                         <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="p-6 bg-base-100 rounded-lg shadow-lg">
                            <p className="italic">"Organizing our annual marathon has never been easier. The tools for event management are simple and effective. Highly recommended!"</p>
                            <p className="font-bold mt-4">- Maria Garcia, Event Organizer</p>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto px-4 py-16">
                 <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
                    <p className="mb-8 text-lg text-base-content/70">
                        Subscribe to our newsletter to get the latest updates on upcoming events, success stories, and special offers delivered right to your inbox.
                    </p>
                    <motion.form 
                        onSubmit={handleSubscribe}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="form-control w-full max-w-sm">
                            <div className="join">
                                <input 
                                    type="email" 
                                    placeholder="your-email@example.com" 
                                    className="input input-bordered join-item w-full"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </section>




            <section className="bg-base-200 py-16">
                 <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Popular Sports Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                        {['Swimming', 'Sprinting', 'Long Jump', 'High Jump', 'Hurdles'].map(sport => (
                            <motion.div key={sport} whileHover={{ y: -10 }} className="p-6 bg-base-100 rounded-lg shadow-md">
                                <h3 className="font-semibold">{sport}</h3>
                            </motion.div>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
};

export default Home;