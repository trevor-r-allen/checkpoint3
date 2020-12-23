import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"

function _drawLists(){
  let template = ""
  ProxyState.lists.forEach(list => template += list.Template)
  document.getElementById("lists").innerHTML = template
}

export default class ListsController{
  constructor(){
    console.log("Lists Controller constructor")
    ProxyState.on("lists", _drawLists)
    ProxyState.on("tasks", _drawLists)
    _drawLists()
  }

  createList(){
    window.event.preventDefault()
    let form = window.event.target
    let newList = {
      //@ts-ignore
      title: form.listTitle.value
    }
    listsService.createList(newList)
      //@ts-ignore
    form.reset()
      //@ts-ignore
    $("#listModal").modal('hide')
  }

  deleteList(listId){
    listsService.deleteList(listId)
  }
}