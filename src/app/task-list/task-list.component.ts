import { Component, Input } from '@angular/core';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  toggleTaskCompletion(id: number): void {
    this.taskService.toggleCompletion(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
