import { useEffect, useState } from 'react'

import './Table.css'

const Table = ({headList, tableValues}) => {
    
    if (!headList){headList=[]}
    if (!tableValues){tableValues=[]}

    const [head, setHead] = useState(headList)
    const [tValues, setTValues] = useState(tableValues)

    const $ = require('jquery')
    $.DataTable = require('datatables.net')
    useEffect(() => {
        $("#tableProdutos").DataTable()
    })

    useEffect(() => {
        if (headList) {setHead(headList)}
        if (tableValues){setTValues(tableValues)}
    }, [headList, tableValues])


    
    
    return(
        <div className='div_table'>
            <table id='tableProdutos'>
                <thead>
                    <tr>
                        {head.map((value, index) => {
                            return(
                                <th key={index}>{value}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tValues.map((value, index) => {
                        return(
                        <tr key={index}>
                            {value.map((value) => {
                                return(
                                    <td>{value}</td>
                                )
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table