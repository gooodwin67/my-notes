import React from 'react';
import './AddForm.css'

export function AddForm() {
    return (
        <div className = 'add_form_style'>
            
        <h5>Type new note</h5>
        <textarea placeholder = 'type here...'/>
        <button>SAVE NOTE</button>
        </div>
    )
}