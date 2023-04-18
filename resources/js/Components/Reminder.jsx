import React from "react";

export default function Reminder(props) {
    return (
        <li>
            <input id="todo-0" type="checkbox" defaultChecked={props.completed}/>
            <label htmlFor={props.id}>{props.name}</label>
            <div className="btn-group">
                <button type='button'>Edit</button>
                <button type='button'>Archive</button>
            </div>

        </li>
    );
}
