import { Component, inject, Input } from '@angular/core';
import { TaskService } from '../tasks.service';
import { type Task as TaskType } from './task.model';

@Component({
  imports: [],
  selector: 'app-task',
  templateUrl: './task.html',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  private tasksService = inject(TaskService);

  onComplteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
