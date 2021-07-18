import React from 'react';
import './AddForm.css'

export function AddForm(props) {
    let changeTextArea = (e) => {
        props.changeTextArea(e.target.value);
    }
    let addNote = () => {
        props.addNote();
    }
    return (
        <div className = 'add_form_style'>
            <h5>Type new note</h5>
            <textarea value={props.value} onChange={changeTextArea} placeholder = 'type here...'/>
            <button onClick={addNote}>SAVE NOTE</button>
        </div>
    )
}