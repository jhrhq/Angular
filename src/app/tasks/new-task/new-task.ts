import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  imports: [FormsModule],
  selector: 'app-new-task',
  styleUrl: './new-task.css',
  templateUrl: './new-task.html',
})
export class NewTask {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TaskService);

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId,
    );
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
