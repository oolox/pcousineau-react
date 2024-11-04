import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { decrement, increment } from '../../store/counterSlice';
import React from "react";


const Skills = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return <div>
        <code style={{backgroundColor: '#0080ff'}}>

            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span>{count}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

        </code>


        SKILLS PAGE</div>;
}

export default Skills;


