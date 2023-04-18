import React, { useState, useRef, useEffect } from 'react';
import "/home/julia/pam/resources/css/reminder.css";
import Reminder from "../Components/Reminder.jsx";
import Form from "../Components/Form.jsx";

export default function ReminderApp({ name }) {

    
    const HABIT_DATA = [
        { id: "habit-0", name: "Eat", completed: true },
        { id: "habit-1", name: "Sleep", completed: false },
        { id: "habit-2", name: "Repeat", completed: false }
    ]

    const habitList = HABIT_DATA.map(habit => <Reminder name={habit.name} completed={habit.completed} id={habit.id} key={habit.id} />);

    const [habits, setHabits] = React.useState(habitList)


    function addTask(name){
        alert(name)
        const habits_num = habits.length;
        const newList = habits.concat(<Reminder name = {name} completed = {false} id = {habits_num} key={habits_num}/>)
        setHabits(newList);
    }

    


    return (
        <div className='main-habit'>
            <h1>DAILY HABIT</h1>
            <div className="habit-list">
                <ul>
                    {habits}
                </ul>
            </div>
            <Form addTask = {addTask}/> 


        </div>
    )
}
