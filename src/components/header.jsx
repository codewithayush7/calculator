import logo from '../assets/investment-calculator-logo.png';
import React from 'react';

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt="logo showing a money bag" />
            <h1>Investment Calculator</h1>
        </header>
    )
}