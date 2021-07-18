import React from 'react';
import './NoteBlock.css'

export function NoteBlock(props) {
    return (
        <div className = 'note_block_style'>
            
                <span>{props.text}</span>
            
        </div>
    )
}