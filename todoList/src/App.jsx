import "./styles.css"

export default function App () {
  return <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item</label>
      <input type="text" name="item" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
}