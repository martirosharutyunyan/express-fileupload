import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { action } from './components/redux/actions/action';
import {animateScroll as scroll} from 'react-scroll';
import {useSelector,useDispatch} from 'react-redux';
import 'react-scroll'
import './App.css';
import Container1 from './components/containers/container1/container1';
import Navigation from './components/routs/navigation';
import Routs from './components/routs/routner';
import { input, Redux } from './components/types/types';
import { post } from './components/AxiosPost/AxiosPost';
import axios from 'axios';

let App:FC = () => {
    const [image, setimage] = useState<any>('');
    const [name, setname] = useState<any>('example.png');
    return(
        <>
            <Navigation />
            <Routs/>
            {/* <Container1 /> */}
            <input type="text" value={name} onChange={(e:input)=>setname(e.target.value)}/>
            <img src={'http://localhost:5000/example.png'} alt="none"/>
        </>
    )
}


export default App = memo(App);