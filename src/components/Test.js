import React, { useState } from 'react'

const Test = () => {
    const [userPoints, setuserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);

    return (
        <div className="App">
            <h1 className='heading'>가위 바위 보</h1>
            <div>
                <h1>User Points:{userPoints}</h1>
                <h1>Computer Points: {computerPoints} </h1>
            </div>
        </div>
    )
}

export default Test