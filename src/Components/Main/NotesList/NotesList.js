import React from 'react';
import './NotesList.css'
import { NoteBlock } from './NoteBlock/NoteBlock';

export function NotesList(props) {
    
    return (
        <div className = 'notes_list_style'>
            
                {props.state.map(el => <NoteBlock id={el.id} text={el.text} />)}
                

            
        </div>
    )
}