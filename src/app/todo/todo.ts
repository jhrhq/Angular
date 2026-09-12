import { Component, input, output, ChangeDetectionStrategy, signal, computed } from '@angular/core';

export interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}
export type FilterType = 'all' | 'active' | 'completed';

@Component({
  imports: [],
  selector: 'app-todo',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './todo.css',
  templateUrl: './todo.html',
})
export class Todo {
  todos = signal<TodoItem[]>([
    { id: 1, text: 'Enable Angular dev defaults', completed: true },
    { id: 2, text: 'Configure Tailwind CSS framework', completed: true },
    { id: 3, text: 'Adopt default OnPush strategy', completed: false },
  ]);

  newTodoText = signal<string>('');
  currentFilter = signal<FilterType>('all');

  filteredTodos = computed(() => {
    const list = this.todos();
    const filter = this.currentFilter();

    if (filter === 'active') return list.filter((t) => !t.completed);
    if (filter === 'completed') return list.filter((t) => t.completed);
    return list;
  });

  completedCount = computed(() => this.todos().filter((t) => t.completed).length);
  activeCount = computed(() => this.todos().filter((t) => !t.completed).length);

  updateText(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.newTodoText.set(inputElement.value);
  }

  addTodo() {
    const text = this.newTodoText().trim();
    if (!text) return;

    this.todos.update((current) => [...current, { id: Date.now(), text, completed: false }]);
    this.newTodoText.set(''); // Clear input
  }

  toggleTodo(id: number) {
    this.todos.update((current) =>
      current.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    );
  }

  deleteTodo(id: number) {
    this.todos.update((current) => current.filter((todo) => todo.id !== id));
  }

  changeFilter(filter: FilterType) {
    this.currentFilter.set(filter);
  }
}
