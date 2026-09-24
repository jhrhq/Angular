# 🅰️ Angular Mastery Lab & Study Tracker

> A hands-on progression repository tracking my journey from Angular core concepts to enterprise-grade architecture, Zoneless rendering, and fine-grained reactivity.

---

## 📊 Study Dashboard

| Phase       | Focus Area                            |     Status     | Sandbox / Code Demo                          |
| ----------- | ------------------------------------- | :------------: | -------------------------------------------- |
| **Phase 1** | Fundamentals & Modern Core            | 🔄 In Progress | [`/src/app/phase-1-core`](./src/app)         |
| **Phase 2** | Signals & Modern Reactivity           |   ⏳ Pending   | [`/src/app/phase-2-signals`](./src/app)      |
| **Phase 3** | Dependency Injection & Scoping        |   ⏳ Pending   | [`/src/app/phase-3-di`](./src/app)           |
| **Phase 4** | RxJS & Asynchronous Streaming         |   ⏳ Pending   | [`/src/app/phase-4-rxjs`](./src/app)         |
| **Phase 5** | Routing, Code Splitting & Performance |   ⏳ Pending   | [`/src/app/phase-5-perf`](./src/app)         |
| **Phase 6** | Change Detection & Internals          |   ⏳ Pending   | [`/src/app/phase-6-internals`](./src/app)    |
| **Phase 7** | Advanced Architecture & Production    |   ⏳ Pending   | [`/src/app/phase-7-architecture`](./src/app) |

_Status Legend:_ ⬜ Not Started | 🔄 In Progress | ✅ Completed | 🧪 Verifying in Code

---

## 🎯 Verification Rules

Before checking off any box, I must meet the **Three-Gate Criteria**:

1. **Explain the "Why":** Articulate what architectural trade-off or performance problem this API solves.
2. **Build from Scratch:** Implement a working demo without copying boilerplate.
3. **Link Proof:** Attach the local component directory or a runnable StackBlitz sandbox directly under the topic.

---

## 🗺️ Progressive Curriculum & Tracking

### Phase 1: Fundamentals & Modern Core

_Goal: Master standalone bootstrapping, property binding mechanics, and modern control flow._

- [ ] **CLI & Standalone Setup**
  - [ ] Standalone application bootstrapping (`bootstrapApplication`, `provideRouter`)
  - [ ] CLI project structure (`angular.json`, `tsconfig.json`, standalone-first flags)
- [ ] **Components & Directives**
  - [ ] Attribute, class, and style bindings (`[attr.x]`, `[class.active]`, `[style.color]`)
  - [ ] Event binding and template reference variables (`#inputRef`)
  - [ ] Two-way data binding (`[(ngModel)]`)
- [ ] **Modern Control Flow Syntax**
  - [ ] `@if`, `@else if`, `@else` conditions
  - [ ] `@for` with mandatory `track` expression and context variables (`$index`, `$first`, `$count`)
  - [ ] `@empty` placeholder blocks
  - [ ] `@switch`, `@case`, `@default` branches
- [ ] **Pipes**
  - [ ] Built-in pipes (`date`, `currency`, `json`, `slice`)
  - [ ] Custom pure vs. impure pipes

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-1-core/`](./) — _Interactive catalog built using native `@for (track item.id)` and `@empty`._

---

### Phase 2: Signals & Modern Reactivity

_Goal: Replace legacy change tracking with fine-grained synchronous reactivity._

- [ ] **Signal Primitives**
  - [ ] `signal()`, `.set()`, and `.update()`
  - [ ] Derived state with `computed()` (dynamic dependency graphs, memoization)
  - [ ] Side effects with `effect()` and lifecycle cleanup via `onCleanup`
  - [ ] Untracked reads via `untracked()`
- [ ] **Signal-Based Component APIs**
  - [ ] `input()` and `input.required()`
  - [ ] `output()` (replacing EventEmitter)
  - [ ] `model()` and `model.required()` (signal-native two-way binding)
  - [ ] View queries: `viewChild()`, `viewChildren()`, `contentChild()`, `contentChildren()`
- [ ] **Reactive Forms with Signals**
  - [ ] `FormControl`, `FormGroup`, `FormArray` integration
  - [ ] Custom synchronous and asynchronous validators
  - [ ] Dynamic form validation status bridged to signals

> **Artifacts & Drills:**
>
> - Demo: [StackBlitz - Signal Shopping Cart](#) — _Cart total, tax, and inventory counts purely derived through `computed()`._

---

### Phase 3: Dependency Injection (DI) & Hierarchical Scoping

_Goal: Inversion of control, custom tokens, and element vs. environment injectors._

- [ ] **Modern DI Mechanics**
  - [ ] Modern `inject()` function vs. constructor injection
  - [ ] The **Injection Context** and legal execution boundaries
  - [ ] Executing outside constructors using `runInInjectionContext()`
- [ ] **Hierarchical Injector Tree**
  - [ ] Environment Injector (Root, Routes) vs. Element Injector (DOM/Component Tree)
  - [ ] Component-scoped providers (`providers: [...]`) and garbage collection lifecycle
  - [ ] Resolution modifiers: `@Self()`, `@SkipSelf()`, `@Optional()`, `@Host()`
- [ ] **Custom Providers**
  - [ ] Custom `InjectionToken<T>` implementations
  - [ ] `useClass`, `useValue`, `useFactory` (with `deps`), and `useExisting`
  - [ ] Multi-providers (`multi: true`) for extensible plugins

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-3-di/`](./) — _Dynamic toast service instantiated at runtime via `runInInjectionContext()`._

---

### Phase 4: RxJS & Asynchronous Streaming

_Goal: Handle high-frequency events, cancellation, and clean interop with signals._

- [ ] **Observables & Multicasting**
  - [ ] Cold vs. Hot observables
  - [ ] `Subject`, `BehaviorSubject`, `ReplaySubject`
  - [ ] Essential operators: `map`, `filter`, `tap`, `distinctUntilChanged`, `debounceTime`
  - [ ] Automatic subscription teardown with `takeUntilDestroyed(destroyRef)`
- [ ] **Flattening Operators (Concurrency Control)**
  - [ ] `switchMap` (Search queries, cancellation of obsolete requests)
  - [ ] `concatMap` (Sequential processing queues)
  - [ ] `mergeMap` (Parallel request execution)
  - [ ] `exhaustMap` (Ignoring inputs during active operations / login clicks)
- [ ] **Signal Interoperability (`@angular/core/rxjs-interop`)**
  - [ ] Converting observables to signals: `toSignal(stream$, { initialValue })`
  - [ ] Converting signals to observables: `toObservable(mySignal)`

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-4-rxjs/`](./) — _Typeahead live search combining `toObservable()`, `debounceTime()`, `switchMap()`, and `toSignal()`._

---

### Phase 5: Routing, Code Splitting & Performance

_Goal: Zero layout shifts, optimal bundle sizes, and seamless route transitions._

- [ ] **Standalone Routing**
  - [ ] `provideRouter`, `withComponentInputBinding()` for route/query params
  - [ ] Functional guards: `canActivate`, `canDeactivate`, `canMatch`
  - [ ] Functional resolvers retrieving prerequisite data via `inject()`
- [ ] **Lazy Loading & Deferrable Views**
  - [ ] Route-level lazy loading (`loadComponent`, `loadChildren`)
  - [ ] `@defer` blocks: triggers (`on viewport`, `on idle`, `on interaction`, `when condition`)
  - [ ] Sub-blocks: `@placeholder`, `@loading`, `@error`
  - [ ] Pre-fetching strategies: `@defer (on interaction; prefetch on idle)`
- [ ] **Core Web Vitals & Assets**
  - [ ] `NgOptimizedImage` (`ngSrc`, `priority`, `fill`) to eliminate Cumulative Layout Shift (CLS)

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-5-perf/`](./) — _Dashboard view loading heavy chart widgets on viewport intersection with `@defer`._

---

### Phase 6: Change Detection Internals & Zoneless

_Goal: Master the DOM render pipeline and migrate from Zone.js to native Zoneless._

- [ ] **Zone.js Mechanics**
  - [ ] How Zone.js monkey-patches browser macrotasks/microtasks
  - [ ] Top-down change detection tree traversal
  - [ ] Escaping the zone via `NgZone.runOutsideAngular()`
- [ ] **`ChangeDetectionStrategy.OnPush`**
  - [ ] Reference identity equality checks (`===`)
  - [ ] `ChangeDetectorRef`: `markForCheck()` vs. `detectChanges()` vs. `detach()`
- [ ] **Zoneless Angular**
  - [ ] Enabling `provideExperimentalZonelessChangeDetection()`
  - [ ] Signal notification scheduler dispatching microtask renders

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-6-internals/`](./) — _Benchmarking re-renders: Default vs. OnPush vs. Zoneless with 1,000 DOM nodes._

---

### Phase 7: Advanced Architecture & Production Readiness

_Goal: Reusable component systems, global state boundaries, and automated testing._

- [ ] **Dynamic & Reusable UI Systems**
  - [ ] Single and multi-slot content projection (`<ng-content select="...">`)
  - [ ] Dynamic template rendering with `ng-template`, `TemplateRef`, and `ViewContainerRef`
  - [ ] Custom structural directives manipulating the DOM
- [ ] **Enterprise HTTP Architecture**
  - [ ] `provideHttpClient(withInterceptors([...]))`
  - [ ] Functional interceptors: Bearer token injection, retry strategies, global error traps
- [ ] **Scalable State Management**
  - [ ] Scoped services vs. `@ngrx/signals` SignalStore
- [ ] **Testing Strategies**
  - [ ] Unit testing signal-driven components and services with modern test runners
  - [ ] Component harnesses via `@angular/cdk/testing`

> **Artifacts & Drills:**
>
> - Demo: [`src/app/phase-7-architecture/`](./) — _Polymorphic DataTable component built with custom structural directives and projected templates._

---

## 🛠️ Local Setup & Running Demos

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/angular-mastery-lab.git
   cd angular-mastery-lab
   ```
