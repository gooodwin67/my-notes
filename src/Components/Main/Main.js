import React from 'react';
import { useState } from 'react';
import './Main.css';
import { AddForm } from './AddForm/AddForm';
import { NotesList } from './NotesList/NotesList';

export function Main() {
    const [list, setList] = useState({
        value: '',
        list: [
            {id: 1, text: '11111'},
            {id: 2, text: '22222'},
            {id: 3, text: '33333'}
        ]
    });

    
    let addNote = () => {
        list.list.push({id: list.list[list.list.length-1].id+1, text: list.value})
        setList({
            ...list,  
            value:''
        })
        console.log(list.list)
    }
    let changeTextArea = (e) => {
        setList({
            ...list,
            value: e
            
        });
        
        
    }
    return (
        <div className = 'main_style'>
            <div className = 'wrap1300'>
                <AddForm value={list.value} addNote={addNote} changeTextArea={changeTextArea}/>
                <NotesList state = {list.list} />
            </div>
        </div>
    )
}