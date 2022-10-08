import React from 'react';
import { useState } from 'react';

const Tasks = () => {
    const [boards, setBoards] = useState([
        {id:1, title:'ToDo', items: [{id: 1, title:'1st'}, {id:2, title:'2nd'}]},
        {id:2, title:'In Progress', items: [{id: 4, title:'Code review'}, {id:5, title:'Some tasks'}]},
        {id:3, title:'Done', items: [{id: 6, title:'Coffe break'}, {id:7, title:'Tea break'}]}
    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setcurrentItem] = useState(null)

    function dragOverHandler(e) {
        e.preventDefault()
    }

    function dragLeaveHandler(e) {}

    function dragStartHandler(e, board, item){
        setCurrentBoard(board)
        setcurrentItem(item)
    }

    function dragEndHandler(e) {}

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    function dropCardHandler(e, board) {
        const currentId = board.items.map(item => item.id)
            if (!currentId.includes(currentItem.id)) {
                board.items.push(currentItem)
                const currentIndex = currentBoard.items.indexOf(currentItem)
                currentBoard.items.splice(currentIndex, 1)
                setBoards(boards.map(b => {
                    if (b.id === board.id) {
                    return board
                    }
                    if (b.id === currentBoard.id) {
                    return currentBoard
                    }
                    return b
                }))
      }
    }

    return (
        <div className='kanban'>
            {boards.map(board =>
                <div 
                className="board"
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropCardHandler(e, board)}
                >
                    <div className="board__title">{board.title}</div>
                    {board.items.map(item =>
                        <div 
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={e => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                            draggable={true}
                            className="item"
                        >
                            {item.title}
                        </div>    
                    )}
                </div>
                )}
        </div>
    );
};

export default Tasks;