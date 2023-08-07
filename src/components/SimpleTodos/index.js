import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
// class SimpleTodos extends Component {
//   state = {
//     todosList: initialTodosList,
//   }

//   deleteTodo = id => {
//     const {todosList} = this.state
//     const updatedTodosList = todosList.filter(eachTodo => eachTodo.id !== id)
//     this.setState(prevState => ({todosList: updatedTodosList}))
//   }

//   render() {
//     const {todosList} = this.state

//     return (
//       <div className="app-container">
//         <div className="simple-todos-container">
//           <h1 className="heading">Simple Todos</h1>
//           <ul className="todos-list">
//             {todosList.map(eachTodo => (
//               <TodoItem
//                 key={eachTodo.id}
//                 todoDetails={eachTodo}
//                 deleteTodo={this.deleteTodo}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default SimpleTodos

class SimpleTodos extends Component {
  state = {list: initialTodosList}

  onDelete = value => {
    const {list} = this.state
    const newList = list.filter(item => value !== item.id)
    this.setState({list: newList})
  }

  render() {
    const {list} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul className="ul">
            {list.map(item => (
              <TodoItem Todo={item} key={item.id} onDelete={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
