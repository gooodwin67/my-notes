import { NavLink } from "react-router-dom";
import React from 'react';
import './NoteBlock.css'

export function NoteBlock(props) {




    let delNoteBlock = () => {
        let indexBlock;

        props.list.list.map(function (el, index) {
            if (el.id == props.id) {
                indexBlock = index
            }
        })
        let list = props.list;
        list.list.splice(indexBlock, 1)
        props.setList({
            ...list,
            value: ''
        })
    }
    return (
        <div>
            <div className='note_block_style uk-animation-slide-bottom-small'>
                <button className='note_block_close' onClick={delNoteBlock}>x</button>
                <button className='button_edit'><strong>EDIT</strong></button>
                <NavLink to={`/${props.id}`} className='navlink'><pre>{props.text}</pre></NavLink>


            </div>
        </div>
    )
}