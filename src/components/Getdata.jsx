import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_PROGRESS } from '../redux-saga/product/action/action'
import axios from 'axios'
import { BASE_URL, GET_API } from '../redux-saga/constant'

const Getdata = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.productReducer)

    useEffect(() => {
        dispatch({ type: GET_PRODUCT_PROGRESS })
    }, [])
    console.log(data);


    const removeData = (id) => {
        axios.delete(`${BASE_URL}/${GET_API}/${id}`)
        data.product.filter(v => v.id != id)
    }
    return (
        <>
            <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Action</th>
                </tr>
                {
                    data.product.map(v =>
                        <tr key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.title}</td>
                            <td>{v.author}</td>
                            <td>
                                <button onClick={() => removeData(v.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}

export default Getdata