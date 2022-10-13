import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
// import Break from '../Break/Break';
import Studies from '../Studies/Studies';
import './Main.css';
const Main = () => {
    const [studies, setStudies] = useState([]);
    const [timeSum, setTimeSum] = useState([]);
    useEffect(() => {
        fetch('study.json')
            .then((res) => res.json())
            .then((data) => setStudies(data));
    }, []);
    const handelAddToCart = (studies) => {
        const sum = [...timeSum, studies];
        setTimeSum(sum);
    };
    return (
        <div>
            <div className="grid md:grid-cols-12 gap-4 justify-center">
                <div className="md:col-span-9 mt-10 mx-20">
                    <div>
                        <div className="flex">
                            <img src="logo.png" className="logo" alt="" />
                            <h1 className="text-3xl text-indigo-500 font-bold">
                                Study Routine
                            </h1>
                        </div>
                        <h3 className="text-xl font-semibold my-5">
                            Select today’s Routine
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {studies.map((study) => (
                            <Studies
                                study={study}
                                key={study.id}
                                handelAddToCart={handelAddToCart}></Studies>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-3">
                    <Activity timeSum={timeSum}></Activity>
                </div>
            </div>
            <div className="qus-container">
                <h2>3 most ques for react</h2>
                <hr />
                <h3>1. What does react work?</h3>
                <br />
                <h4>
                    React uses a declarative paradigm that makes it easier to
                    reason about your application and aims to be both efficient
                    and flexible. It designs simple views for each state in your
                    application, and React will efficiently update and render
                    just the right component when your data changes.
                </h4>
                <br />
                <br />
                <h3>2. What are the different of props and state?</h3>
                <br />
                <h4>
                    Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the
                    component only and cannot be passed to other components.
                </h4>
                <br />
                <br />
                <h3>3. What can do useEffect without data load?</h3>
                <br />
                <h4>
                    <ul>
                        <li>1. Running once on mount: fetch API data.</li>
                        <li>
                            2. Running on state change: validating input field.
                        </li>
                        <li>3. Running on state change: live filtering.</li>
                        <li>
                            4. Running on state change: trigger animation on new
                            array value.
                        </li>
                        <li>
                            5 .Running on props change: update paragraph list on
                            fetched API data update.
                        </li>
                        <li>
                            6. Running on props change: updating fetched API
                            data to get BTC updated price.
                        </li>
                    </ul>
                </h4>
            </div>
        </div>
    );
};

export default Main;
