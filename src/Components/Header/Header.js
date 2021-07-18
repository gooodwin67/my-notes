import React from 'react';
import './Header.css';
import { HeaderAccount } from './HeaderAccount/HeaderAccount';
import { HeaderMenu } from './HeaderMenu/HeaderMenu';

export function Header() {
    return (
        <div className = 'header_style'>
            <div className = 'wrap1300'>
                <HeaderMenu />
                <strong>MYNotes</strong>
                <HeaderAccount />
            </div>
        </div>
    )
}