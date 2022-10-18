import React, {useState} from 'react';
import {Button} from "antd";

function Index(props) {
    let [name, setName] = useState('duxiang')
    const onClickName = () => {
        setName('改变后杜翔')
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