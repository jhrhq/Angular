import { Component, inject, Input } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TaskService } from './tasks.service';

@Component({
  imports: [Task, NewTask],
  selector: 'app-tasks',
  templateUrl: './tasks.html',
})
export class Tasks {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  isAddingTask = false;

  private taskService = inject(TaskService);

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
