import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { action } from '../../redux/actions/action';
// import Media from '../../media';
import './container1.scss';
import { post } from '../../AxiosPost/AxiosPost';
import 'react-scroll';
//types
import {  input, Redux } from '../../types/types';

let Container1:FC = () => {
    const [file1, setFile] = useState<any>('');
    const [file2, setfile2] = useState<any>('');
    const [name, setname] = useState<string>('');
    const change = (e:input):void => {
        // @ts-ignore
        setFile(e.target.files[0])
    }    
    const change2 = (e:input):void => {
        // @ts-ignore
        setfile2(e.target.files[0])
    }
    const click =async () => {
        const data = new FormData()
        data.append('fileName',name)
        data.append('file1',file1)
        data.append('file2',file2)
        const response = await post('upload/fileupload',data)
        console.log(response)
    }
    return (
        <>
            <section className='container1'>
                <input type="file" onChange={change} />
                <input type="file" onChange={change2}/>
                <input type="text" onChange={(e:input)=> setname(e.target.value)}/>
                <button onClick={click}>click</button>
            </section>
        </>
    )
}

export default Container1 = memo(Container1);

        