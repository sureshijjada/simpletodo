// Write your code here
import './index.css'

// const TodoItem = props => {
//   const {todoDetails, deleteTodo} = props
//   const {id, title} = todoDetails

//   const onDeleteTodo = () => {
//     deleteTodo(id)
//   }

//   return (
//     <li>
//       <p className="title">{title}</p>
//       <button type="button" className="delete-btn" onClick={onDeleteTodo}>
//         Delete
//       </button>
//     </li>
//   )
// }

// export default TodoItem

const TodoItem = props => {
  const {Todo, onDelete} = props
  const {id, title} = Todo
  console.log(title)

  const removeItem = () => {
    onDelete(id)
  }

  return (
    <div>
      <li className="card">
        <div className="div">
          <p className="paragraph">{title}</p>
          <button type="button" onClick={removeItem} className="button">
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
