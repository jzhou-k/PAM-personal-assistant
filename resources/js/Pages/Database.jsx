import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "/home/julia/pam/resources/css/led.css";
export default function Database({ user }) {
    console.log("wtf huh");
    // console.log(user[0].id);

    console.log(user[0].led);
    const [isLed, setisLed] = useState(user[0].led);

    const toggleLed = async () => {
        console.log("???");
        // try {
        // 	const res = await axios.get(`/databasefuck`, {

        // 	});
        // 	// Set the response to the state.
        // 	console.log(res.data.user[0].led);
        //     setisLed(res.data.user[0].led);
        // } catch (err) {
        // 	console.log(err);
        // }
        if (isLed == 0) {
            setisLed(1);
        } else {
            setisLed(0);
        }

        axios
            .post('/databasefuck', {
                // Data to be sent to the server
                id: '1',
                led: isLed,
            })
            .then(response => {
                console.log(response.data);
                setisLed(response.data.input[0].led);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    function wtf() {
        console.log("wtf");

    }

    return (
        <>
            {/* <div className="h-screen w-screen bg-gray-200 z-10 absolute"></div> */}
            {/* <h1 className='bg-gray-200 h-10 z-20 fixed'>LED {isLed}</h1> */}
            {/* <input className='fixed z-20 bg-gray-200 top-10' type="button" value="Toggle Led" onClick={() => toggleLed()}></input> */}
            <div class = "ledContainer">
            <h1>LED {isLed}</h1>
            <input type="button" value="Toggle Led" onClick={() => toggleLed()}></input>
            </div>
        </>

    );
}