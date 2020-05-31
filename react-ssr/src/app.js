/**
 * 这里是整个页面的入口，不负责添加redux
 */


import React, {useState, useEffect, Fragment} from 'react';

function App(props) {
    let [count, setCount] = useState(0);
    let [isClient, setIsClient] = useState(false);
    const onCount = event => {
        setCount(++count);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Fragment>
           <div>hello world!</div>
           计数： {count}
           <div>
                <button onClick={onCount}>点击计数</button>
           </div>
           {
            isClient ? (
                <div>in client</div>
            ) : null
           }
        </Fragment>
    );
};

export default App;