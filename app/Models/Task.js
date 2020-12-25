import { generateId } from "../Utils/GenerateId.js"

export default class Task{
  constructor(id, listId, description){
    this.id = id || generateId()
    this.listId = listId
    this.description = description
  }
  get Template(){
    return /*html*/`
    <div class="col">
    <h5>${this.description} <i class="fa fa-xing text-danger cursor-pointer" onclick="app.tasksController.deleteTask('${this.id}')" aria-hidden="true"></i></h5>
    </div>
    `
  }
}