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
    this.tasks.push("lala");
    this.tasks.push("lets build a retro app");
  }

  AddRetroPoint() {
    if (this.currentText.length > 1) {
      this.tasks.push(this.currentText);
      this.currentText = "";
    }
  }
  DeleteTask(index){
    this.tasks.splice(index,1)
  }

}
