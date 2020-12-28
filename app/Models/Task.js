import { generateId } from "../Utils/GenerateId.js"

export default class Task{
  constructor({description, id, listId, complete}){
    this.description = description
    this.id = id || generateId()
    this.listId = listId
    this.complete = complete || false
  }
  get Template(){
    return /*html*/`
    <div class="col">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="check${this.id}" ${this.complete ? 'checked' : ""} onclick="app.tasksController.updateComplete('${this.id}')">
            <label class="form-check-label" for="check${this.id}">
            ${this.description} <i role="button" class="fa fa-xing text-danger cursor-pointer" onclick="app.tasksController.deleteTask('${this.id}')" aria-hidden="true"></i>
            </label>
        </div>
    </div>
    `
  }
}