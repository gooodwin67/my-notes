import React from 'react';
import './Main.css';
import { AddForm } from './AddForm/AddForm';
import { NotesList } from './NotesList/NotesList';

export function Main() {
    return (
        <div className = 'main_style'>
            <div className = 'wrap1300'>
                <AddForm />
                <NotesList />
            </div>
        </div>
    )
}