import React, {useState} from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    height: 64px;
    background: #24292E;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .fa-github {
        margin-right: 16px;
        font-size: 32px;
        color: white;
    }

    form input {
        padding: 8px;
        height: 28px;
        width: 300px;
        background: hsla(0,0%,100%,.125);
        border: none;
        border-radius: 3px;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-weight: 500;
        color: white;
    }
`

const Header = props => {
    const [input, setInput] = useState('');

    const onChange = event => {
        setInput(event.target.value);
    }

    const onSubmit = event => {
        event.preventDefault();
        props.helperFunction(input);
        setInput('');
    }

    return (
        <Nav>
            <i className="fab fa-github"></i>
            <form onSubmit={onSubmit} autoComplete='off'>
                <input name='input' type='text' placeholder='Search GitHub username' value={input} onChange={onChange}/>   
            </form>
        </Nav>
    )
};

export default Header;