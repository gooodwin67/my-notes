import React from 'react';

import './Main.css';
import { AddForm } from './AddForm/AddForm';
import { NotesList } from './NotesList/NotesList';

export function Main(props) {

    let list = props.list;
    let setList = props.setList;

    let addNote = () => {
        if (list.list.length > 0) list.list.push({ id: list.list[list.list.length - 1].id + 1, text: list.value })
        else list.list.push({ id: 1, text: list.value })
        setList({
            ...list,
            value: ''
        })

    }
    let changeTextArea = (e) => {
        setList({
            ...list,
            value: e

        });


    }
    return (
        <div className='main_style uk-animation-slide-bottom-medium'>
            <div className='wrap1300'>
                <AddForm value={list.value} addNote={addNote} changeTextArea={changeTextArea} />
                <NotesList list={list} setList={setList} />
            </div>
        </div>
    )
}