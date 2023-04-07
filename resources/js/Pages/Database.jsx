import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import "/home/julia/pam/resources/css/led.css";
export default function Database({ user }) {
    console.log("wtf huh");
    // console.log(user[0].id);
    //dumbass react
    console.log(user[0].led);
    const [isLed, setisLed] = useState(0);

    if(isLed ==1)
    {
        console.log("if its one i set to 0");
        var nextLed = 0;
    }else
    {
        var nextLed = 1; 
    }

    const toggleLed = async () => {
        console.log("button pressed");
        
        axios
            .post('/databasefuck', {
                // Data to be sent to the server
                id: '1',
                led: nextLed,
            })
            .then(response => {
                console.log(response);
                setisLed(nextLed);
                console.log("current user data" + nextLed);
                
                // if(nextLed ==1)
                // {
                //     console.log("if its one i set to 0");
                //     nextLed = 0;
                // }else
                // {
                //     nextLed = 1; 
                // }
                
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
                console.log("get user data" + response.data.user[0].led)
                setisLed(response.data.user[0].led)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        const interval = setInterval(() => {
          getUserData();
        }, 2000); // call getUserData every 5 seconds

        return () => clearInterval(interval);
      }, []); //just add variable that refreshes, so it calls this function

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