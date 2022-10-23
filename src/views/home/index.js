import React, {useState} from 'react';
import {Button} from "antd";
import {loginApi} from '../../api'

function Index(props) {
    let [name, setName] = useState('duxiang')
    const onClickName = () => {
        setName('改变name')
        loginApi().then((res) => {
            console.log(res.data)
        })
    }
    return (
        <div>
            <Button onClick={onClickName}>设置名字</Button>
            <span>
                {name}
            </span>
        </div>
    );
}

export default Index;