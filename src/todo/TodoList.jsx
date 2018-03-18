import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
    console.log('a porra do pros no list', props)

    const renderRows = () => {
        const list = props.list || []
        return list.map(
            todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton 
                        style='danger' 
                        icon='trash-o' 
                        onClick={ () => props.handleRemove(todo)}/>
                    </td>
                </tr>
            )
        )
    }
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                   {renderRows()}
                </tbody>
            </table>
        )
}