import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({title, id}) {
    this.title = title
    this.id = id || generateId()
  }
  get Template() {
    return /*html*/`
    <div class="card col-6 col-md-4">
      <div class="card-body">
        <h4 class="card-title">${this.title} <button type="button" class="btn btn-danger"
                onclick="app.listsController.deleteList('${this.id}'); app.tasksController.deleteTask('${this.id}')">Delete</button></h4>
        <form onsubmit="app.tasksController.createTask('${this.id}')">
            <div class="form-inline">
                <div class="form-row">
                  <label for="taskDescription">Task Description</label>
                  <input type="text" name="taskDescription" id="taskDescription"  class="form-control"
                      placeholder="Task description" aria-describedby="helpId">
                  <button type="submit" class="btn btn-success p-1" onsubmit="">Add</button>
                </div>
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
  console.log(template)
  return template
}
}