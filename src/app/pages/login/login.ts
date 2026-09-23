import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  // form group initialization
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false],
  });

  showPassword = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<string | null>(null);
  submitError = signal<string | null>(null);
  isDarkMode = signal<boolean>(false);

  // Trigger signal to force Angular OnPush evaluation when form internal state changes
  private formChangeTick = signal<number>(0);

  ngOnInit(): void {
    // Listen to form value and status updates to trigger OnPush change detection
    this.loginForm.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.formChangeTick.update((t) => t + 1);
    });

    this.loginForm.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.formChangeTick.update((t) => t + 1);
    });
  }

  toggleShowPassword(): void {
    this.showPassword.update((val) => !val);
  }

  toggleTheme(): void {
    this.isDarkMode.update((dark) => !dark);
  }

  fillDemoCredentials(): void {
    this.loginForm.patchValue({
      email: 'angular@dev.com',
      password: 'Angular2026Password',
      rememberMe: true,
    });
    this.submitSuccess.set(null);
    this.submitError.set(null);
    this.formChangeTick.update((t) => t + 1);
  }
  resetForm(): void {
    this.loginForm.patchValue({
      email: '',
      password: '',
      rememberMe: false,
    });
    this.submitSuccess.set(null);
    this.submitError.set(null);
    this.formChangeTick.update((t) => t + 1);
  }

  onSubmit(): void {
    this.submitSuccess.set(null);
    this.submitError.set(null);

    if (this.loginForm.invalid) {
      this.submitError.set(
        'Please fix the validation errors in the highlighted fields before submitting.',
      );
      this.formChangeTick.update((t) => t + 1);
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      this.isSubmitting.set(false);
      const email = this.loginForm.value.email;
      this.submitSuccess.set(`Welcome back, ${email}! You have successfully signed in.`);
    }, 1200);
  }

  isTouchedOrDirty(controlName: string): boolean {
    this.formChangeTick(); // Reactivity tick
    const control = this.loginForm.get(controlName);
    return !!(control && (control.touched || control.dirty));
  }

  isControlInvalid(controlName: string): boolean {
    this.formChangeTick();
    const control = this.loginForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  getInputClass(controlName: string): string {
    const isInvalid = this.isControlInvalid(controlName);
    const control = this.loginForm.get(controlName);
    const isValid = control && control.valid && (control.touched || control.dirty);

    let base =
      'w-full pl-9 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none transition-all duration-200 ';

    if (isInvalid) {
      return (
        base +
        'border-rose-500 focus:ring-2 focus:ring-rose-500/20 text-rose-900 dark:text-rose-200'
      );
    } else if (isValid) {
      return base + 'border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20';
    }

    return (
      base +
      'border-slate-300 dark:border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
    );
  }

  getValidationStatusText(controlName: string): string {
    this.formChangeTick();
    const control = this.loginForm.get(controlName);
    if (!control) return '';
    if (control.untouched && control.pristine) return 'Pristine';
    if (control.valid) return 'Valid';
    return 'Invalid';
  }

  getValidationBadgeClass(controlName: string): string {
    this.formChangeTick();
    const control = this.loginForm.get(controlName);
    if (!control || (control.untouched && control.pristine)) {
      return 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500';
    }
    if (control.valid) {
      return 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400';
    }
    return 'text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400';
  }

  getControlStatusBadgeClass(controlName: string): string {
    this.formChangeTick();
    const control = this.loginForm.get(controlName);
    if (control?.valid) {
      return 'px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800';
    }
    return 'px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950 text-rose-400 border border-rose-800';
  }

  getControlInfo(controlName: string) {
    this.formChangeTick();
    const control = this.loginForm.get(controlName);
    if (!control) return null;

    return {
      value: control.value,
      status: control.status,
      valid: control.valid,
      invalid: control.invalid,
      touched: control.touched,
      dirty: control.dirty,
      errors: control.errors,
    };
  }

  maskPassword(pwd: string | null | undefined): string {
    if (!pwd) return '';
    return '•'.repeat(pwd.length);
  }

  formatJson(obj: unknown): string {
    if (!obj) return '';
    return JSON.stringify(obj, null, 2);
  }

  rawFormValueJson = computed(() => {
    this.formChangeTick();
    return JSON.stringify(this.loginForm.value, null, 2);
  });

  formSummaryJson = computed(() => {
    this.formChangeTick();
    return JSON.stringify(
      {
        valid: this.loginForm.valid,
        invalid: this.loginForm.invalid,
        status: this.loginForm.status,
        touched: this.loginForm.touched,
        dirty: this.loginForm.dirty,
        errors: this.loginForm.errors,
      },
      null,
      2,
    );
  });
}
