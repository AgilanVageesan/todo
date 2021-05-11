import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "retro";
  currentText: string;
  tasks: Array<string> = [];

  ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  AddTask() {
    if (this.currentText.length > 1) {
      this.tasks.push(this.currentText);
      this.currentText = "";
    }
    this.SetLocalStorage()
  }

  DeleteTask(index) {
    this.tasks.splice(index, 1);
    this.SetLocalStorage();
  }

  SetLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
