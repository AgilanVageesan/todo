import { Component, OnInit } from "@angular/core";
import { Task } from "./task";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "todo";
  currentTask: Task = { Text: "", Completed: false };
  tasks: Array<Task> = [];
  checkBtnStyle: string = "";
  ngOnInit() {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
      this.tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  }

  AddTask() {
    if (this.currentTask.Text.length > 1) {
      let newTask:Task={
        Id: this.tasks.length + 1,
        Text: this.currentTask.Text,
        Completed: false
      }
      this.tasks.push(newTask);
      this.currentTask={}
    }
    this.SetLocalStorage();
  }

  DeleteTask(index) {
    this.tasks.splice(index, 1);
    this.SetLocalStorage();
  }

  SetLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  TodoComplete(taskId) {
    const index=this.tasks.findIndex(x=>x.Id==taskId);
    this.tasks[index].Completed=true;
    this.SetLocalStorage();
  }
}
