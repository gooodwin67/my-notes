import React from 'react';
import './NotesList.css'
import { NoteBlock } from './NoteBlock/NoteBlock';

export function NotesList() {
    return (
        <div className = 'notes_list_style'>
            
                <NoteBlock />
                <NoteBlock />
                <NoteBlock />
                <NoteBlock />
                <NoteBlock />
                <NoteBlock />
                <NoteBlock />

            
        </div>
    )
}