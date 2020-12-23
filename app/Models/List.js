import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ id, title }) {
    this.id = id || generateId()
    this.title = title
  }
  get Template() {
    return /*html*/`
    <div class="card col-4">
      <div class="card-body">
        <h4 class="card-title">${this.title} <button type="button" class="btn btn-danger"
                onclick="app.listsController.deleteList('${this.id}')">Delete</button></h4>
        <form onsubmit="app.tasksController.createTask('${this.id}')">
            <div class="form-group">
                <label for="taskDescription">Task Description</label>
                <input type="text" name="taskDescription" id="taskDescription" class="form-control"
                    placeholder="Task Description" aria-describedby="helpId">
                <button type="button" class="btn btn-success">Add</button>
            </div>
        </form>
        <p class="card-text">Tasks: </p>
        <div class="row">
            ${this.Tasks}
        </div>
    </div>
</div>
`
  }
  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
    tasks.forEach(task => template += task.Template)
    return template
  }
}