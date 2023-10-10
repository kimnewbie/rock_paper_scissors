import { useEffect, useState } from "react"

const Rps = () => {
    const [userChoice, setUserChoice] = useState('rock')
    const [computerChoice, setComputerChoice] = useState('rock')
    const [userPoints, setUserPoints] = useState(0)
    const [computerPoints, setComputerPoints] = useState(0)
    const [turnResult, setTurnResult] = useState(null)
    const [result, setResult] = useState('Let\'s see who wins')
    const [gameOver, setGameOver] = useState(false)
    const choices = ['rock', 'paper', 'scissors']

    const handleClick = (value) => {
        setUserChoice(value)
        generateComputerChoice()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    const reset = () => {
        window.location.reload()
    }

    // 누군가 3번 이기면 게임 오버
    useEffect(() => {
        const comboMoves = userChoice + computerChoice
        if (userPoints <= 2 && computerPoints <= 2) {
            // 비기지 않는 상황 연출
            // 가지 경우, user가 이겼을때 computer가 이겼을 때
            if (comboMoves === 'scissorspaper' || comboMoves === 'rockscissors' || comboMoves === 'paperrock') {
                // userPoints.current += 1
                const updatedUserPoints = userPoints + 1
                setUserPoints(updatedUserPoints)
                setTurnResult('User gets the point!')
                if (updatedUserPoints === 3) {
                    setResult('User Wins')
                    const gameOff = true
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
            <div className='score'>
                <h1>Computer Points: {computerPoints}</h1>
                <h1>User Points: {userPoints}</h1>
            </div>

            <div className='choice'>
                <div className='choice-computer'>
                    <img className='computer-hand' src={`../images/${computerChoice}.png`} alt=''></img>
                </div>
                <div className='choice-user'>
                    <img className='user-hand' src={`../images/${userChoice}.png`} alt=''></img>
                </div>
            </div>

            <div className='button-div'>
                {choices.map((choice, index) =>
                    <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
                        {choice}
                    </button>
                )}
            </div>

            <div className='result'>
                <h1>Turn Result: {turnResult}</h1>
                <h1>Final Result: {result}</h1>
            </div>

            <div className='button-div'>
                {gameOver &&
                    <button className='button' onClick={reset}>다시 시작</button>
                }
            </div>
        </div>
    )
}

export default Rps;