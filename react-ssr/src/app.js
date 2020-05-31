/**
 * 这里是整个页面的入口，不负责添加redux
 */


import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

function App(props) {
    let [count, setCount] = useState(0);
    let [isClient, setIsClient] = useState(false);
    let [courseList, setCourseList] = useState([]);
    const onCount = event => {
        setCount(++count);
    };

    useEffect(() => {
        setIsClient(true);
        axios.get('/api/course/list')
            // axios定义在data中的为服务端的数据，除此之外还有header,config，status等字段
            .then(res => {
                console.log(res)
                setCourseList(res.data.list);
            });

    }, []);

    return (
        <Fragment>
           <div>hello world!</div>
                计数： {count}
           <div>
                <button onClick={onCount}>点击计数</button>
           </div>
           {
            isClient ? <div>in client</div> : null
           }
           <div>
               <span>课程信息</span>
               {
                   courseList.map((item, index) => {
                       return (
                            <div key={index}>
                                <span>课程名称: {item.name}</span>
                                <span>课程价格: {item.price}</span>
                            </div>
                       );
                   })
               }
           </div>
        </Fragment>
    );
};

export default App;