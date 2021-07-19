import React from 'react';

import './NotesList.css'
import { NoteBlock } from './NoteBlock/NoteBlock';

export function NotesList(props) {

    return (
        <div className='notes_list_style'>
            <div className='uk-child-width-1-2 uk-child-width-1-4@m uk-grid'>

                {props.list.list.map(el => <NoteBlock id={el.id} text={el.text} list={props.list} setList={props.setList} />)}

            </div>

        </div>
    )
}