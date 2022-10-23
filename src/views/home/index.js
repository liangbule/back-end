import React, {useState} from 'react';
import {Button} from "antd";
import {loginApi, getUserInfo} from '../../api'

function Index(props) {
    let [name, setName] = useState('duxiang')
    const onClickName = () => {
        setName('改变name')
        loginApi('liangbule', 'qwer12345').then((res) => {
            setName(res.data.message)
        })
    }
    const onClickUser = () => {
        getUserInfo().then((res) => {
            console.log(res)
        })
    }
    return (
        <div>
            <Button onClick={onClickName}>设置名字</Button>
            <Button onClick={onClickUser}>查询用户信息</Button>
            <span>
                {name}
            </span>
        </div>
    );
}

export default Index;