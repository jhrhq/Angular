import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Developer' | 'Designer' | 'Manager' | 'QA Lead';
  status: 'Active' | 'Pending' | 'Inactive';
  avatar: string;
  lastActive: string;
  score: number;
  projectsCount: number;
}

export interface LearningModule {
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
  template: `
    <div
      [class]="isDarkMode() ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'"
      class="min-h-screen transition-colors duration-300 font-sans flex flex-col"
    >
      <!-- TOP NAVIGATION BAR -->
      <header
        class="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <!-- Logo & Brand -->
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 font-black text-xl"
            >
              A
            </div>
            <div>
              <span
                class="font-extrabold text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-2"
              >
                Angular Studio
                <span
                  class="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                >
                  Page 3 of 4
                </span>
              </span>
            </div>
          </div>

          <!-- Navigation Tabs -->
          <nav
            class="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/60 p-1 rounded-xl border border-slate-200/80 dark:border-slate-700/50"
          >
            <button
              type="button"
              (click)="activeTab.set('home')"
              [class]="
                activeTab() === 'home'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              "
              class="px-3.5 py-1.5 text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              1. Home Portal
            </button>

            <button
              type="button"
              (click)="activeTab.set('auth')"
              [class]="
                activeTab() === 'auth'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              "
              class="px-3.5 py-1.5 text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              2. Auth Lab
            </button>

            <button
              type="button"
              (click)="activeTab.set('dashboard')"
              [class]="
                activeTab() === 'dashboard'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              "
              class="px-3.5 py-1.5 text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              3. Dashboard
            </button>

            <button
              type="button"
              (click)="activeTab.set('settings')"
              [class]="
                activeTab() === 'settings'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm font-bold'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium'
              "
              class="px-3.5 py-1.5 text-xs rounded-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
              </svg>
              4. Settings
            </button>
          </nav>

          <!-- Header Actions -->
          <div class="flex items-center gap-3">
            <button
              type="button"
              (click)="isDarkMode.update((d) => !d)"
              class="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              [title]="isDarkMode() ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            >
              @if (isDarkMode()) {
                <svg
                  class="w-4 h-4 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              } @else {
                <svg
                  class="w-4 h-4 text-slate-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              }
            </button>
          </div>
        </div>
      </header>

      <!-- MAIN CONTAINER -->
      <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        @if (activeTab() === 'dashboard') {
          <!-- DASHBOARD HEADER / HERO -->
          <section
            class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 p-8 sm:p-10 text-white shadow-xl"
          >
            <div
              class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div class="space-y-2 max-w-2xl">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-200 border border-white/10"
                >
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Module 3: User Management Dashboard
                </div>
                <h1 class="text-2xl sm:text-4xl font-black tracking-tight">
                  Team Operations & User Directory
                </h1>
                <p class="text-indigo-200 text-xs sm:text-sm leading-relaxed">
                  Manage organization access, monitor performance metrics, filter active personnel,
                  and inspect live Signal computed states.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  (click)="openAddUserModal()"
                  class="px-4 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-xs shadow-lg shadow-indigo-500/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Team Member
                </button>
                <button
                  type="button"
                  (click)="triggerExportToast()"
                  class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Export CSV
                </button>
              </div>
            </div>

            <div
              class="absolute -right-10 -bottom-10 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"
            ></div>
          </section>

          <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-xs font-bold uppercase tracking-wider">Total Users</span>
                <span
                  class="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
              </div>
              <p class="text-3xl font-black text-slate-900 dark:text-white">
                {{ totalUsersCount() }}
              </p>
              <p class="text-[11px] text-slate-500">Registered organization accounts</p>
            </div>

            <div
              class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-xs font-bold uppercase tracking-wider">Active Ratio</span>
                <span
                  class="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </div>
              <p class="text-3xl font-black text-slate-900 dark:text-white">
                {{ activeUsersCount() }} / {{ totalUsersCount() }}
              </p>
              <p
                class="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1"
              >
                <span>{{ activePercentage() }}% active online status</span>
              </p>
            </div>

            <div
              class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-xs font-bold uppercase tracking-wider">Admins & Managers</span>
                <span
                  class="p-1.5 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>
              </div>
              <p class="text-3xl font-black text-slate-900 dark:text-white">{{ adminCount() }}</p>
              <p class="text-[11px] text-slate-500">Elevated security clearance</p>
            </div>

            <div
              class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <div class="flex items-center justify-between text-slate-400">
                <span class="text-xs font-bold uppercase tracking-wider">Avg Team Score</span>
                <span
                  class="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </span>
              </div>
              <p class="text-3xl font-black text-slate-900 dark:text-white">{{ avgScore() }}%</p>
              <p class="text-[11px] text-amber-500 font-bold">Activity benchmark score</p>
            </div>
          </section>

          <section class="space-y-4">
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <!-- Search Bar -->
              <div class="relative flex-1">
                <svg
                  class="w-4 h-4 absolute left-3.5 top-3 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  [value]="searchQuery()"
                  (input)="updateSearch($event)"
                  placeholder="Search user name or email..."
                  class="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              <!-- Role & Status Filters -->
              <div class="flex flex-wrap items-center gap-3">
                <select
                  [value]="selectedRole()"
                  (change)="updateRoleFilter($event)"
                  class="px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="ALL">All Roles</option>
                  <option value="Admin">Admin</option>
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="QA Lead">QA Lead</option>
                </select>

                <select
                  [value]="selectedStatus()"
                  (change)="updateStatusFilter($event)"
                  class="px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="Active">Active Only</option>
                  <option value="Pending">Pending Only</option>
                  <option value="Inactive">Inactive Only</option>
                </select>

                <!-- View Switcher -->
                <div class="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                  <button
                    type="button"
                    (click)="viewMode.set('table')"
                    [class]="
                      viewMode() === 'table'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-400'
                    "
                    class="p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                    title="Table View"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    (click)="viewMode.set('grid')"
                    [class]="
                      viewMode() === 'grid'
                        ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-slate-400'
                    "
                    class="p-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
                    title="Grid Cards View"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            @if (filteredUsers().length === 0) {
              <div
                class="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div
                  class="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-500 mx-auto flex items-center justify-center font-bold text-xl"
                >
                  🔍
                </div>
                <p class="font-bold text-slate-800 dark:text-slate-100">
                  No team members match your criteria
                </p>
                <p class="text-xs text-slate-400">
                  Try adjusting your search terms or filter selections.
                </p>
                <button
                  type="button"
                  (click)="resetFilters()"
                  class="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold text-xs hover:bg-indigo-100 transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            } @else if (viewMode() === 'table') {
              <!-- TABLE VIEW -->
              <div
                class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs">
                    <thead
                      class="bg-slate-50 dark:bg-slate-800/60 uppercase font-bold text-slate-400 border-b border-slate-200 dark:border-slate-800"
                    >
                      <tr>
                        <th class="py-3.5 px-4">User Member</th>
                        <th class="py-3.5 px-4">Role</th>
                        <th class="py-3.5 px-4">Status</th>
                        <th class="py-3.5 px-4">Performance Score</th>
                        <th class="py-3.5 px-4">Last Active</th>
                        <th class="py-3.5 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                      @for (user of filteredUsers(); track user.id) {
                        <tr
                          class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <td class="py-3.5 px-4">
                            <div class="flex items-center gap-3">
                              <div
                                class="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-extrabold flex items-center justify-center text-xs shadow-sm"
                              >
                                {{ user.avatar }}
                              </div>
                              <div>
                                <p class="font-bold text-slate-900 dark:text-slate-100 text-sm">
                                  {{ user.name }}
                                </p>
                                <p class="text-slate-400 text-[11px]">{{ user.email }}</p>
                              </div>
                            </div>
                          </td>

                          <td class="py-3.5 px-4">
                            <span
                              class="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {{ user.role }}
                            </span>
                          </td>

                          <td class="py-3.5 px-4">
                            @switch (user.status) {
                              @case ('Active') {
                                <span
                                  class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 inline-flex items-center gap-1.5"
                                >
                                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  Active
                                </span>
                              }
                              @case ('Pending') {
                                <span
                                  class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 border border-amber-200 dark:border-amber-800 inline-flex items-center gap-1.5"
                                >
                                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                  Pending
                                </span>
                              }
                              @default {
                                <span
                                  class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 inline-flex items-center gap-1.5"
                                >
                                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                  Inactive
                                </span>
                              }
                            }
                          </td>

                          <td class="py-3.5 px-4">
                            <div class="flex items-center gap-2">
                              <div
                                class="w-20 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden"
                              >
                                <div
                                  class="bg-indigo-600 h-full rounded-full"
                                  [style.width.%]="user.score"
                                ></div>
                              </div>
                              <span class="text-[11px] font-mono text-slate-500"
                                >{{ user.score }}%</span
                              >
                            </div>
                          </td>

                          <td class="py-3.5 px-4 text-slate-400 text-[11px]">
                            {{ user.lastActive }}
                          </td>

                          <td class="py-3.5 px-4 text-right space-x-2">
                            <button
                              type="button"
                              (click)="selectedUser.set(user)"
                              class="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 font-bold text-xs cursor-pointer"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              (click)="toggleUserStatus(user.id)"
                              class="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-bold text-xs cursor-pointer"
                            >
                              Toggle Status
                            </button>
                            <button
                              type="button"
                              (click)="deleteUser(user.id)"
                              class="text-rose-500 hover:text-rose-700 font-bold text-xs cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            } @else {
              <!-- GRID VIEW -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                @for (user of filteredUsers(); track user.id) {
                  <div
                    class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4"
                  >
                    <div class="space-y-3">
                      <div class="flex items-center justify-between">
                        <div
                          class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-extrabold flex items-center justify-center text-base shadow-md"
                        >
                          {{ user.avatar }}
                        </div>
                        @switch (user.status) {
                          @case ('Active') {
                            <span
                              class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                            >
                              Active
                            </span>
                          }
                          @case ('Pending') {
                            <span
                              class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                            >
                              Pending
                            </span>
                          }
                          @default {
                            <span
                              class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            >
                              Inactive
                            </span>
                          }
                        }
                      </div>

                      <div>
                        <h3 class="font-bold text-base text-slate-900 dark:text-white">
                          {{ user.name }}
                        </h3>
                        <p class="text-xs text-slate-400">{{ user.email }}</p>
                      </div>

                      <div class="flex items-center gap-2 pt-1">
                        <span
                          class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                        >
                          {{ user.role }}
                        </span>
                        <span class="text-[11px] text-slate-400"
                          >Projects: {{ user.projectsCount }}</span
                        >
                      </div>
                    </div>

                    <div
                      class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between"
                    >
                      <button
                        type="button"
                        (click)="selectedUser.set(user)"
                        class="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                      >
                        View Profile Details →
                      </button>
                      <button
                        type="button"
                        (click)="deleteUser(user.id)"
                        class="text-xs font-bold text-rose-500 hover:text-rose-700 cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                }
              </div>
            }
          </section>
        }

        @if (activeTab() === 'home') {
          <section
            class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 p-8 sm:p-12 text-white shadow-2xl"
          >
            <div class="relative z-10 max-w-2xl space-y-4">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-indigo-100 border border-white/10"
              >
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                Angular Modern Architecture Studio
              </div>
              <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Master Angular through Interactive Labs
              </h1>
              <p class="text-indigo-100 text-sm sm:text-base leading-relaxed">
                Explore hands-on reactive patterns, signal state primitives, form validation
                engines, and live inspection tools built with clean Angular & Tailwind CSS.
              </p>
              <div class="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  (click)="activeTab.set('dashboard')"
                  class="px-5 py-2.5 rounded-xl bg-white text-indigo-700 font-bold text-xs hover:bg-indigo-50 transition-all shadow-md cursor-pointer"
                >
                  Go to User Dashboard (Page 3)
                </button>
              </div>
            </div>
          </section>
        }

        @if (activeTab() === 'auth') {
          <section
            class="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
          >
            <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span class="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400"
                >Page 2: Reactive Auth Lab</span
              >
              <h2 class="text-2xl font-black text-slate-900 dark:text-white">
                Form Builder & Strength Meter
              </h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div class="space-y-1">
                  <label class="block text-xs font-bold uppercase text-slate-500"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    value="developer@angularstudio.io"
                    class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <div class="space-y-1">
                  <label class="block text-xs font-bold uppercase text-slate-500">Password</label>
                  <input
                    type="password"
                    value="SuperSecret123!"
                    class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100"
                  />
                </div>
                <button
                  type="button"
                  class="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors"
                >
                  Submit Reactive Form
                </button>
              </div>

              <div class="bg-slate-900 text-slate-100 p-6 rounded-2xl font-mono text-xs space-y-2">
                <span class="text-indigo-400 font-bold">// Live Form Status Inspector</span>
                <p>Status: <span class="text-emerald-400 font-bold">VALID</span></p>
                <p>Touched: <span class="text-amber-400 font-bold">true</span></p>
                <p>Dirty: <span class="text-amber-400 font-bold">true</span></p>
              </div>
            </div>
          </section>
        }

        @if (activeTab() === 'settings') {
          <section
            class="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6"
          >
            <div class="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span class="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400"
                >Page 4: App Configuration</span
              >
              <h2 class="text-2xl font-black text-slate-900 dark:text-white">
                Studio Global Settings
              </h2>
            </div>

            <div class="space-y-4 max-w-xl">
              <div
                class="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <p class="font-bold text-xs text-slate-900 dark:text-white">
                    Dark Mode Preference
                  </p>
                  <p class="text-[11px] text-slate-400">
                    Toggle dark theme across all studio components.
                  </p>
                </div>
                <button
                  type="button"
                  (click)="isDarkMode.update((d) => !d)"
                  class="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer"
                >
                  Toggle Theme
                </button>
              </div>

              <div
                class="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
              >
                <div>
                  <p class="font-bold text-xs text-slate-900 dark:text-white">Reset User Dataset</p>
                  <p class="text-[11px] text-slate-400">
                    Restore the initial mock user directory signals.
                  </p>
                </div>
                <button
                  type="button"
                  (click)="resetUserList()"
                  class="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold cursor-pointer"
                >
                  Reset Data
                </button>
              </div>
            </div>
          </section>
        }
      </main>

      <!-- USER DETAILS MODAL -->
      @if (selectedUser()) {
        <div
          class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            class="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-extrabold text-lg text-slate-900 dark:text-white">
                User Profile Details
              </h3>
              <button
                type="button"
                (click)="selectedUser.set(null)"
                class="text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div class="flex items-center gap-4">
              <div
                class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg"
              >
                {{ selectedUser()?.avatar }}
              </div>
              <div>
                <h4 class="font-bold text-base text-slate-900 dark:text-white">
                  {{ selectedUser()?.name }}
                </h4>
                <p class="text-xs text-slate-400">{{ selectedUser()?.email }}</p>
                <span
                  class="inline-block mt-1 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400"
                >
                  {{ selectedUser()?.role }}
                </span>
              </div>
            </div>

            <div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 space-y-2 text-xs">
              <div class="flex justify-between">
                <span class="text-slate-400">Current Status:</span>
                <span class="font-bold text-emerald-500">{{ selectedUser()?.status }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Last Active:</span>
                <span class="font-bold text-slate-700 dark:text-slate-300">{{
                  selectedUser()?.lastActive
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Performance Index:</span>
                <span class="font-bold text-indigo-500">{{ selectedUser()?.score }}%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-slate-400">Assigned Projects:</span>
                <span class="font-bold text-slate-700 dark:text-slate-300">{{
                  selectedUser()?.projectsCount
                }}</span>
              </div>
            </div>

            <button
              type="button"
              (click)="selectedUser.set(null)"
              class="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold text-xs text-slate-700 dark:text-slate-200 cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      }

      <!-- ADD USER MODAL -->
      @if (isAddUserModalOpen()) {
        <div
          class="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            class="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4"
          >
            <div class="flex items-center justify-between">
              <h3 class="font-extrabold text-lg text-slate-900 dark:text-white">Add Team Member</h3>
              <button
                type="button"
                (click)="isAddUserModalOpen.set(false)"
                class="text-slate-400 hover:text-slate-600 font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form (submit)="submitNewUser($event)" class="space-y-3">
              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-slate-500">Full Name *</label>
                <input
                  type="text"
                  required
                  [value]="newUserName()"
                  (input)="newUserName.set($any($event.target).value)"
                  class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>

              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-slate-500"
                  >Email Address *</label
                >
                <input
                  type="email"
                  required
                  [value]="newUserEmail()"
                  (input)="newUserEmail.set($any($event.target).value)"
                  class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. sarah@company.com"
                />
              </div>

              <div class="space-y-1">
                <label class="block text-xs font-bold uppercase text-slate-500">Role</label>
                <select
                  [value]="newUserRole()"
                  (change)="newUserRole.set($any($event.target).value)"
                  class="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="QA Lead">QA Lead</option>
                </select>
              </div>

              <div class="pt-2 flex gap-3">
                <button
                  type="button"
                  (click)="isAddUserModalOpen.set(false)"
                  class="flex-1 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md cursor-pointer"
                >
                  Create Member
                </button>
              </div>
            </form>
          </div>
        </div>
      }

      <!-- TOAST NOTIFICATION -->
      @if (toastMessage()) {
        <div
          class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-800 text-xs font-bold flex items-center gap-2 animate-bounce"
        >
          <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
          {{ toastMessage() }}
        </div>
      }

      <!-- FOOTER -->
      <footer
        class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 mt-auto"
      >
        <p>Angular Studio • Page 3: User Management Dashboard</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class Dashboard {
  activeTab = signal<'home' | 'auth' | 'dashboard' | 'settings'>('dashboard');
  isDarkMode = signal<boolean>(false);

  // Dashboard Filters & View Controls
  searchQuery = signal<string>('');
  selectedRole = signal<string>('ALL');
  selectedStatus = signal<string>('ALL');
  viewMode = signal<'table' | 'grid'>('table');

  // Modal States
  selectedUser = signal<User | null>(null);
  isAddUserModalOpen = signal<boolean>(false);
  newUserName = signal<string>('');
  newUserEmail = signal<string>('');
  newUserRole = signal<'Admin' | 'Developer' | 'Designer' | 'Manager' | 'QA Lead'>('Developer');

  // Toast Notification Signal
  toastMessage = signal<string | null>(null);

  // User Dataset Signal
  users = signal<User[]>([
    {
      id: 1,
      name: 'Alex Rivera',
      email: 'alex.rivera@studio.io',
      role: 'Admin',
      status: 'Active',
      avatar: 'AR',
      lastActive: '2 mins ago',
      score: 98,
      projectsCount: 12,
    },
    {
      id: 2,
      name: 'Elena Rostova',
      email: 'elena.rostova@studio.io',
      role: 'Developer',
      status: 'Active',
      avatar: 'ER',
      lastActive: '15 mins ago',
      score: 92,
      projectsCount: 8,
    },
    {
      id: 3,
      name: 'Marcus Chen',
      email: 'marcus.chen@studio.io',
      role: 'Designer',
      status: 'Pending',
      avatar: 'MC',
      lastActive: '1 hour ago',
      score: 84,
      projectsCount: 5,
    },
    {
      id: 4,
      name: 'Samantha Vance',
      email: 'samantha.vance@studio.io',
      role: 'Manager',
      status: 'Active',
      avatar: 'SV',
      lastActive: 'Just now',
      score: 95,
      projectsCount: 15,
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'david.kim@studio.io',
      role: 'QA Lead',
      status: 'Inactive',
      avatar: 'DK',
      lastActive: '3 days ago',
      score: 76,
      projectsCount: 4,
    },
  ]);

  filteredUsers = computed(() => {
    const q = this.searchQuery().toLowerCase().trim();
    const role = this.selectedRole();
    const status = this.selectedStatus();

    return this.users().filter((u) => {
      const matchesSearch = u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      const matchesRole = role === 'ALL' || u.role === role;
      const matchesStatus = status === 'ALL' || u.status === status;
      return matchesSearch && matchesRole && matchesStatus;
    });
  });

  totalUsersCount = computed(() => this.users().length);

  activeUsersCount = computed(() => this.users().filter((u) => u.status === 'Active').length);

  adminCount = computed(
    () => this.users().filter((u) => u.role === 'Admin' || u.role === 'Manager').length,
  );

  activePercentage = computed(() => {
    const total = this.totalUsersCount();
    return total > 0 ? Math.round((this.activeUsersCount() / total) * 100) : 0;
  });

  avgScore = computed(() => {
    const list = this.users();
    if (list.length === 0) return 0;
    const sum = list.reduce((acc, curr) => acc + curr.score, 0);
    return Math.round(sum / list.length);
  });

  updateSearch(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  updateRoleFilter(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedRole.set(val);
  }

  updateStatusFilter(event: Event): void {
    const val = (event.target as HTMLSelectElement).value;
    this.selectedStatus.set(val);
  }

  resetFilters(): void {
    this.searchQuery.set('');
    this.selectedRole.set('ALL');
    this.selectedStatus.set('ALL');
  }

  toggleUserStatus(id: number): void {
    this.users.update((list) =>
      list.map((u) => {
        if (u.id === id) {
          const nextStatus: 'Active' | 'Pending' | 'Inactive' =
            u.status === 'Active' ? 'Inactive' : 'Active';
          return { ...u, status: nextStatus };
        }
        return u;
      }),
    );
    this.showToast('User status updated');
  }

  deleteUser(id: number): void {
    this.users.update((list) => list.filter((u) => u.id !== id));
    this.showToast('User removed from directory');
  }

  openAddUserModal(): void {
    this.newUserName.set('');
    this.newUserEmail.set('');
    this.newUserRole.set('Developer');
    this.isAddUserModalOpen.set(true);
  }

  submitNewUser(e: Event): void {
    e.preventDefault();
    if (!this.newUserName() || !this.newUserEmail()) return;

    const initials =
      this.newUserName()
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2) || 'U';

    const newUser: User = {
      id: Date.now(),
      name: this.newUserName(),
      email: this.newUserEmail(),
      role: this.newUserRole(),
      status: 'Active',
      avatar: initials,
      lastActive: 'Just now',
      score: 88,
      projectsCount: 1,
    };

    this.users.update((list) => [newUser, ...list]);
    this.isAddUserModalOpen.set(false);
    this.showToast(`Added ${newUser.name} to team`);
  }

  resetUserList(): void {
    this.users.set([
      {
        id: 1,
        name: 'Alex Rivera',
        email: 'alex.rivera@studio.io',
        role: 'Admin',
        status: 'Active',
        avatar: 'AR',
        lastActive: '2 mins ago',
        score: 98,
        projectsCount: 12,
      },
      {
        id: 2,
        name: 'Elena Rostova',
        email: 'elena.rostova@studio.io',
        role: 'Developer',
        status: 'Active',
        avatar: 'ER',
        lastActive: '15 mins ago',
        score: 92,
        projectsCount: 8,
      },
      {
        id: 3,
        name: 'Marcus Chen',
        email: 'marcus.chen@studio.io',
        role: 'Designer',
        status: 'Pending',
        avatar: 'MC',
        lastActive: '1 hour ago',
        score: 84,
        projectsCount: 5,
      },
    ]);
    this.showToast('Reset user directory data');
  }

  triggerExportToast(): void {
    this.showToast('CSV Export generated & ready');
  }

  private showToast(msg: string): void {
    this.toastMessage.set(msg);
    setTimeout(() => this.toastMessage.set(null), 3000);
  }
}
