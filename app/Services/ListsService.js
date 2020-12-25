import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import { saveState } from "../Utils/localStorage.js"

class ListsService {
  constructor(){
    console.log("Lists Service constructor")
    ProxyState.on("lists", saveState)
    ProxyState.on("tasks", saveState)
  }
  createList(newList){
    console.log(newList)
    let list = new List(newList)
    let lists = ProxyState.lists
    lists.push(list)
    ProxyState.lists = lists
  }
  deleteList(listId){
  ProxyState.lists = ProxyState.lists.filter(list => list.id != listId)
  ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != listId)
  }
}

export const listsService = new ListsService()