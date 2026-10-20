import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

interface LearningModule {
  id: number;
  title: string;
  description: string;
  badge: string;
  status: 'active' | 'next' | 'upcoming';
  icon: string;
  topics: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.html',
  styles: [],
})
export class Home {
  // Theme Toggle Signal
  isDarkMode = signal<boolean>(false);

  // Home Page Metrics & Data Signals
  activeSignalsCount = signal<number>(4);

  // Sandbox State Signals
  quantity = signal<number>(2);
  unitPrice = signal<number>(45);

  // Computed Signal Calculations
  subtotal = computed(() => this.quantity() * this.unitPrice());
  taxAmount = computed(() => +(this.subtotal() * 0.08).toFixed(2));
  totalWithTax = computed(() => +(this.subtotal() + this.taxAmount()).toFixed(2));

  // Module Directory Data
  modules = signal<LearningModule[]>([
    {
      id: 1,
      title: 'Home Portal & Architecture',
      description:
        'Master app navigation layout, header design tokens, signal reactivity sandbox, and dark mode toggling.',
      badge: 'Current',
      status: 'active',
      icon: '🏠',
      topics: ['Header Navigation', 'Signals Sandbox', 'Theme Switcher', 'Standalone'],
    },
    {
      id: 2,
      title: 'Auth & Reactive Forms Lab',
      description:
        'Build robust forms with FormGroup, FormBuilder, custom matching validators, password strength meter, and JSON state inspector.',
      badge: 'Next',
      status: 'next',
      icon: '🔒',
      topics: ['FormGroup', 'Custom Validators', 'Strength Meter', 'Live Inspector'],
    },
    {
      id: 3,
      title: 'User Management Dashboard',
      description:
        'Interactive data directory with search, status filters, dynamic metrics, and modal dialogs.',
      badge: 'Upcoming',
      status: 'upcoming',
      icon: '📊',
      topics: ['Real-time Search', 'Data Table', 'Filter Chips', 'Modals'],
    },
    {
      id: 4,
      title: 'Global State & App Settings',
      description:
        'Manage app-wide singleton stores with signals, theme preferences, and multi-tab setting forms.',
      badge: 'Upcoming',
      status: 'upcoming',
      icon: '⚙️',
      topics: ['Global Service', 'Singleton Store', 'Preferences', 'Toasts'],
    },
  ]);

  incrementQuantity(): void {
    this.quantity.update((q) => q + 1);
  }

  decrementQuantity(): void {
    if (this.quantity() > 1) {
      this.quantity.update((q) => q - 1);
    }
  }

  updateUnitPrice(event: Event): void {
    const val = parseFloat((event.target as HTMLInputElement).value);
    this.unitPrice.set(isNaN(val) ? 0 : val);
  }

  resetSandbox(): void {
    this.quantity.set(2);
    this.unitPrice.set(45);
  }
}
