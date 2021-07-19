import React from 'react';
import { NavLink } from "react-router-dom";
import './EditBlock.css';

export function EditBlock(props) {
    let indexBlock;
    let textBlock
    props.list.list.map(function (el, index) {
        if (el.id == props.id) {
            indexBlock = index
            textBlock = el.text
        }
    })
    let editNoteChangeValue = (e) => {

        let list = props.list
        list.list[indexBlock].text = e.target.value

        props.setList({
            ...list,
            value: ''
        })

    }


    return (
        <div className='edit_block_style uk-animation-slide-top-medium'>
            <div className='wrap1300'>

                <h5>Edit note</h5>
                <textarea onChange={editNoteChangeValue} value={textBlock} placeholder='type here...'></textarea>
                <NavLink to='/' className='edit_btn'>SAVE NOTE</NavLink>
            </div>
        </div>
    )
}