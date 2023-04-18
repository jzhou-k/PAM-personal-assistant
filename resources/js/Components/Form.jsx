import { useState } from "react";
import React from "react";

export default function Form(props) {


    const [name, setName] = useState(''); 

    function handleSubmit(e) {
        e.preventDefault();
        
        //alert('Hello, world!');
        props.addTask(name);
        
    }

    function handleChange(e)
    {
        setName(e.target.value); 
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3 className='label-wrapper'>
                <label htmlFor="new-todo-input" className="label__lg">
                    Add new habit
                </label>
            </h3>

            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value = {name}
                onChange={handleChange}
            ></input>
            <button type='submit' className="btn btn__primary btn__lg">Add</button>
        </form>
    )
}