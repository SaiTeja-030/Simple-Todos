import './index.css'

const TodoItem = props => {
  const {itemDetails, deleteUser} = props
  const {id, title} = itemDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <div className="items">
      <p className="para">{title}</p>
      <div className="btn-container">
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
