import React from 'react'
import { useState } from 'react'
import data from './data'
import './style.css'

// single selection
// multi selection

const Accordion = () => {
    const [selected, setSelected] = useState(null)
    const [enableMS, setEnableMS] = useState(false)
    const [multiple, setMultiple] = useState([])
    
    function singleSelection(id) {
        setSelected(id === selected ? null : id)
    }

    function multiSelection(id) {
        let cpy = [...multiple]
        const findCurrIdx = cpy.indexOf(id)
            if(findCurrIdx === -1) {
                cpy.push(id)
        } else {
            cpy.splice(findCurrIdx, 1)
        }
        setMultiple(cpy)
    }
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMS(!enableMS)}>Enable Multi Selection</button>
            <div className='accordion'>
                {
                    data && data.length > 0 ? (
                    data.map(dataItem => (
                        <div className = "item">
                            <div className='title' 
                            onClick={()=> 
                                enableMS ? multiSelection(dataItem.id) :
                                singleSelection(dataItem.id)
                            }>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMS ? (
                                    multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className='content'>
                                            {dataItem.answer}
                                        </div>
                                    )
                                ) : selected === dataItem.id && (
                                    <div className='content'>
                                        {dataItem.answer}
                                    </div>
                                )
                            }
                        </div>
                    ))
                )
                : (
                    <div >No data found!</div>
                )}
            </div>

        </div>
    )
}

export default Accordion