import React, { useEffect, useState } from 'react';
import './Activity.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Activity = ({ timeSum }) => {
    const notify = () => toast('WOW... Completed the all event!');
    const [time, setTime] = useState([]);
    const addBreakTime = (timeAdd) => {
        setTime(timeAdd);
        localStorage.setItem('time', timeAdd);
    };
    useEffect(() => {
        const prevTime = localStorage.getItem('time');
        if (prevTime) {
            setTime(prevTime);
        }
    }, []);

    let total = 0;
    for (const sumCount of timeSum) {
        total = total + sumCount.time;
    }
    return (
        <div>
            <div className="studyContainer">
                <div className="m-10">
                    <div className="grid grid-cols-4 myProfile">
                        <div>
                            <img
                                className="myPic"
                                src="download.png"
                                alt=""
                            />
                        </div>
                        <div className="col-span-3 pl-3">
                            <h1 className="text-xl font-semibold">
                                Tanvir
                            </h1>
                            <p>Chittagong, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="mx-10">
                    <div className="flex justify-around myDetails bg-gray-200">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">59</span>kg
                            </h1>
                            <h1 className="font-semibold ml-3">Weight</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">5.7</span>
                            </h1>
                            <h1 className="font-semibold ml-2">Height</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">25</span>
                                yrs
                            </h1>
                            <h1 className="font-semibold ml-2">Age</h1>
                        </div>
                    </div>
                </div>
                <h1 className="my-5 ml-10 text-xl font-semibold">
                    Add A Break
                </h1>
                <div className="mx-10 pb-5">
                    <div className="flex justify-around secBtn">
                        <div className="time">
                            <div>
                                <h5 onClick={() => addBreakTime('50s')}>50s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('60s')}>60s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('70s')}>70s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('80s')}>80s</h5>
                            </div>
                        </div>
                    </div>
                    <h1 className="riding-details text-xl font-semibold mt-20 mb-5">
                        Study Details
                    </h1>
                    <div className="flex justify-around myDetails mb-5 bg-gray-200">
                        <h3 className="font-bold text-xl p-2">Study time</h3>
                        <h3 className="font-semibold p-2 text-gray-400">
                            {total} seconds
                        </h3>
                    </div>
                    <div className="flex justify-around myDetails bg-gray-200">
                        <h3 className="font-bold text-xl p-2">Break Time</h3>
                        <h3 className="font-semibold p-2 text-gray-400">
                            {time}
                        </h3>
                    </div>

                    <button
                        onClick={notify}
                        className="btn btn-primary btn-block mt-10">
                        Activity Completed
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Activity;
