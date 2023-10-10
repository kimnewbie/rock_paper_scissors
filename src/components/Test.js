import React, { useEffect, useState } from 'react'

const Test = () => {
    const [userPoints, setuserPoints] = useState(0);
    const [computerPoints, setComputerPoints] = useState(0);
    const [userChoice, setUserChoice] = useState('rock');
    const [computerChoice, setComputerChoice] = useState('rock')
    const [turnResult, setTurnResult] = useState(null)
    const [result, setResult] = useState('Let\'s see who wins')
    const [gameOver, setGameOver] = useState(false)
    const choices = ['rock', 'paper', 'scissors']


    const handleClick = (value) => {
        setUserChoice(value);
        generateComputerChoice();
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    const reset = () => {
        window.location.reload();
    }

    useEffect(() => {
        const comboMoves = userChoice + computerChoice;
        if (userPoints <= 2 && computerPoints <= 2) {
            if (comboMoves === 'scissorspaper' || comboMoves === "rockscissors" || comboMoves === 'paperrock') {
                const updatedUserPoints = userPoints + 1;
                setuserPoints(updatedUserPoints)
                setTurnResult('User gets the point')
                if (updatedUserPoints === 3) {
                    setResult('User Wins')
                    const gameOff = true;
                    setGameOver(gameOff)
                }
            }

            if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockpaper') {
                // computerPoints.current += 1
                const updatedComputerPoints = computerPoints + 1
                setComputerPoints(updatedComputerPoints)
                setTurnResult('Computer gets the point!')
                if (updatedComputerPoints === 3) {
                    setResult('Computer Wins')
                    const gameOff = true
                    setGameOver(gameOff)
                }
            }

            if (comboMoves === 'paperpaper' || comboMoves === 'rockrock' || comboMoves === 'scissorsscissors') {
                setTurnResult('No one gets a point!')
            }
        }
    }, [computerChoice, userChoice])

    return (
        <div className="App">
            <h1 className='heading'>가위 바위 보</h1>
            <div>
                <h1>User Points:{userPoints}</h1>
                <h1>Computer Points: {computerPoints} </h1>
            </div>

            <div>
                <div>
                    <img src={`../images/${computerChoice}.png`} alt=""></img>
                </div>
                <div>
                    <img src={`../images/${userChoice}.png`} alt=""></img>
                </div>

                <div>
                    {
                        choices.map((c, i) =>
                            <button key={i} onClick={() => handleClick(c)} disabled={gameOver}>
                                {c}
                            </button>
                        )
                    }
                </div>
                <div>
                    <h1>Turn Result: {turnResult}</h1>
                    <h1>Final Result: {result}</h1>
                </div>

                <div>
                    {
                        gameOver &&
                        <button onClick={reset}>
                            다시시작
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Test