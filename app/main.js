import ListsController from "./Controllers/ListsController.js";
import TasksController from "./Controllers/TasksController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/localStorage.js";

class App {
  valuesController = new ValuesController();
  listsController = new ListsController();
  tasksController = new TasksController();
}

window["app"] = new App();
loadState()
