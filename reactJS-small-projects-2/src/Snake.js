import React, { useState, useEffect } from 'react';

const DIRECTIONS = {
    UP: 'up',
    RIGHT: 'right',
    DOWN: 'down',
    LEFT: 'left',
};

const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 20;

const KEY_UP = 'ArrowUp';
const KEY_RIGHT = 'ArrowRight';
const KEY_DOWN = 'ArrowDown';
const KEY_LEFT = 'ArrowLeft';


const getRandomCoord = () => {
    const x = Math.round(Math.random() * (BOARD_WIDTH - 1));
    const y = Math.round(Math.random() * (BOARD_HEIGHT - 1));
    return [x, y];
}

const mainSnakeLogic = ({ snake, direction, appleCoords }) => {
    const newSnake = [...snake];
    let newAppleCoord = { ...appleCoords };

    switch (direction) {
        case DIRECTIONS.UP:
            newSnake.unshift({
                x: snake[0].x,
                y: snake[0].y - 1,
            });
            break;
        case DIRECTIONS.RIGHT:
            newSnake.unshift({
                x: snake[0].x + 1,
                y: snake[0].y,
            });
            break;
        case DIRECTIONS.DOWN:
            newSnake.unshift({
                x: snake[0].x,
                y: snake[0].y + 1,
            });
            break;
        case DIRECTIONS.LEFT:
            newSnake.unshift({
                x: snake[0].x - 1,
                y: snake[0].y,
            });
            break;
        default:
            break;
    }

    if (newSnake[0].x < 0)                newSnake[0].x = BOARD_WIDTH - 1;
    if (newSnake[0].x > BOARD_WIDTH - 1)  newSnake[0].x = 0;
    if (newSnake[0].y < 0)                newSnake[0].y = BOARD_HEIGHT - 1;
    if (newSnake[0].y > BOARD_HEIGHT - 1) newSnake[0].y = 0;

    if (appleCoords.x !== newSnake[0].x || appleCoords.y !== newSnake[0].y) {
        newSnake.pop();
    } else {
        const [x, y] = getRandomCoord();
        newAppleCoord = { x, y };
    }

    const isDead = newSnake.find((coord, index) =>
        index !== 0 && coord.x === newSnake[0].x && coord.y === newSnake[0].y)

    return {
        isDead,
        appleCoords: newAppleCoord,
        snake: newSnake,
        direction,
    };
}

const Square = (props) => {
    if (props.type === 'snake') {
        return <span className="square snake-char"></span>
    }
    if (props.type === 'apple') {
        return <span className="square apple-char"></span>
    }
    return (
        <span className="square empty-char"></span>
    )
}

const Game = () => {
    const [state, setState] = useState({
        isDead: false,
        direction: DIRECTIONS.LEFT,
        appleCoords: { x: 5, y: 5 },
        snake: [
            { x: 15, y: 5 },
            { x: 16, y: 5 },
            { x: 17, y: 5 },
        ]
    });

    const direction = state.direction;
    const appleCoords = state.appleCoords;
    const snake = state.snake;

    useEffect(() => {
        document.addEventListener('keyup', handleKeyboard)
        const interval = setInterval(() => {
            setState((state) => {
                return mainSnakeLogic(state);
            });
        }, 300);

        if (state.isDead) {
            clearInterval(interval);
        }
        return () => {
            document.removeEventListener('keyup', handleKeyboard);
            clearInterval(interval);
        }
    }, [state.isDead]);


    const handleKeyboard = (event) => {
        const { key } = event;
        switch (key) {
            case KEY_UP:
                setState((state) => {
                    return {
                        ...state,
                        direction: DIRECTIONS.UP,
                    };
                });
                break;
            case KEY_RIGHT:
                setState((state) => {
                    return {
                        ...state,
                        direction: DIRECTIONS.RIGHT,
                    };
                });
                break;
            case KEY_DOWN:
                setState((state) => {
                    return {
                        ...state,
                        direction: DIRECTIONS.DOWN,
                    };
                });
                break;
            case KEY_LEFT:
                setState((state) => {
                    return {
                        ...state,
                        direction: DIRECTIONS.LEFT,
                    };
                });
                break;
            default:
                break;
        }
    }

    const renderBoard = () => {
        const tempBoard = [];

        for (let i = 0; i < BOARD_HEIGHT; i++) {
            tempBoard.push(Array(BOARD_WIDTH).fill('*'));
        }

        const [head] = snake;

        for(let coord of snake) {
            tempBoard[coord.y][coord.x] = 'snake';
        }

        tempBoard[head.y][head.x] = 'snake';
        tempBoard[appleCoords.y][appleCoords.x] = 'apple';

        return tempBoard.map((row, rowIndex) => {
            return (
                <div className="row" key={ rowIndex }>
                    {
                        row.map((square, index) => {
                            return (
                                <Square type={ square } key={ index } />
                            )
                        })
                    }
                </div>
            )
        });
    }

    return (
        <div>
            { state.isDead && <h1>Game Over!</h1> }
            { renderBoard() }
        </div>
    )
}

export default Game;