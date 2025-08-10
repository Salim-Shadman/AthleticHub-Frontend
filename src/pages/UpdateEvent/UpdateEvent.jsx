import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const UpdateEvent = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        const fetchEventData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/events/${id}`, { withCredentials: true });
                const eventData = response.data;

                if (eventData.creatorEmail !== user.email) {
                    Swal.fire('Forbidden', 'You are not authorized to edit this event.', 'error');
                    navigate('/manage-events');
                } else {
                    setEvent(eventData);
                    document.title = `Update | ${eventData.eventName}`;
                }
            } catch (error) {
                toast.error('Failed to load event data.');
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchEventData();
        }
    }, [id, user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        const updatedEventData = {
            eventName: form.eventName.value,
            eventType: form.eventType.value,
            date: form.date.value,
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            creatorEmail: user.email, 
        };

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/events/${id}`, updatedEventData, { withCredentials: true });
            Swal.fire('Success!', 'Event updated successfully.', 'success');
            navigate('/manage-events');
        } catch (error) {
            toast.error('Failed to update the event.');
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card bg-base-100 shadow-xl max-w-4xl mx-auto"
            >
                <div className="card-body">
                    <h2 className="card-title text-3xl justify-center mb-8">Update Event</h2>
                    
                    
                    {event && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                           
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                <label className="md:text-right font-semibold">Event Name</label>
                                <input 
                                    name="eventName" 
                                    type="text" 
                                    className="input input-bordered w-full md:col-span-3" 
                                    defaultValue={event.eventName} 
                                    required 
                                />
                            </div>

                           
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                <label className="md:text-right font-semibold">Event Type</label>
                                <select 
                                    name="eventType" 
                                    className="select select-bordered w-full md:col-span-3" 
                                    defaultValue={event.eventType} 
                                    required
                                >
                                    <option value="Swimming">Swimming</option>
                                    <option value="Sprinting">Sprinting</option>
                                    <option value="Long Jump">Long Jump</option>
                                    <option value="High Jump">High Jump</option>
                                    <option value="Hurdle Race">Hurdle Race</option>
                                </select>
                            </div>

                           
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                <label className="md:text-right font-semibold">Date</label>
                                <input 
                                    name="date" 
                                    type="date" 
                                    className="input input-bordered w-full md:col-span-3" 
                                    defaultValue={event.date} 
                                    required 
                                />
                            </div>

                          
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                <label className="md:text-right font-semibold">Location</label>
                                <input 
                                    name="location" 
                                    type="text" 
                                    className="input input-bordered w-full md:col-span-3" 
                                    defaultValue={event.location} 
                                    required 
                                />
                            </div>

                          
                            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                <label className="md:text-right font-semibold">Image URL</label>
                                <input 
                                    name="image" 
                                    type="url" 
                                    className="input input-bordered w-full md:col-span-3" 
                                    defaultValue={event.image} 
                                    required 
                                />
                            </div>

                            
                            <div className="form-control">
                                <label className="label font-semibold justify-start">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea 
                                    name="description" 
                                    className="textarea textarea-bordered h-24 w-full" 
                                    defaultValue={event.description} 
                                    required
                                ></textarea>
                            </div>

                            
                            <div className="form-control mt-8">
                                <button type="submit" className="btn btn-primary w-full max-w-xs mx-auto">Update Event</button>
                            </div>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default UpdateEvent;