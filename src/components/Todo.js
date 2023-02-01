import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './Todo.css'

export const Todo = () => {

    const dispatch = useDispatch()
    const list = useSelector((state) => state.todoReducers.list)
    const [inputData, setInputData] = useState("")

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>
                            Add Your List Here ✌...
                        </figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍ Add Items...' onChange={(event) => setInputData(event.target.value)} value={inputData} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                    </div>
                    <div className="showItems">
                        {list.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className="todo-btn">
                                        <i className='far fa-trash-alt add-btn' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="remove All" onClick={()=> dispatch(removeTodo())}><span>check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}
