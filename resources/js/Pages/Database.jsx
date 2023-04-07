import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "/home/julia/pam/resources/css/led.css";
export default function Database({ user }) {
    console.log("wtf huh");
    // console.log(user[0].id);

    console.log(user[0].led);
    const [isLed, setisLed] = useState(0);
    var setLed = 0;

    const toggleLed = async () => {
        console.log("button pressed");

        axios
            .post('/databasefuck', {
                // Data to be sent to the server
                id: '1',
                led: setLed,
            })
            .then(response => {
                console.log("Set led" + setLed);
                setLed = response.data.user[0].led;
                if(setLed == 0)
                {   
                    console.log("set led to 1");
                    setLed = 1;
                    setisLed(setLed);
                }else 
                {
                    console.log("set led to 0");
                    setLed = 0;
                    setisLed(setLed);
                }
                
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    function wtf() {
        console.log("wtf");

    }

    const getUserData = async () => {
        axios
            .get("/getUserData")
            .then(response => {
                setisLed(response.data.user[0].led)
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       getUserData();
    //     }, 1000); // call getUserData every 5 seconds

    //     return () => clearInterval(interval);
    //   }, []);

    return (
        <>
            {/* <div className="h-screen w-screen bg-gray-200 z-10 absolute"></div> */}
            {/* <h1 className='bg-gray-200 h-10 z-20 fixed'>LED {isLed}</h1> */}
            {/* <input className='fixed z-20 bg-gray-200 top-10' type="button" value="Toggle Led" onClick={() => toggleLed()}></input> */}
            <div class="ledContainer">
                <h1>LED {isLed}</h1>
                <input type="button" value="Toggle Led" onClick={() => toggleLed()}></input>
            </div>
        </>

    );
}