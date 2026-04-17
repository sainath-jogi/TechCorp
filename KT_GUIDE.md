# TechCorp Enterprise Portal - Knowledge Transfer Guide

> **Complete onboarding guide for Angular trainees**  
> Read this document thoroughly before starting work on the project.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Technology Stack](#-technology-stack)
3. [Getting Started](#-getting-started)
4. [Project Architecture](#-project-architecture)
5. [Folder Structure Explained](#-folder-structure-explained)
6. [Key Angular Concepts Used](#-key-angular-concepts-used)
7. [Authentication Flow](#-authentication-flow)
8. [Mock API System](#-mock-api-system)
9. [Routing & Navigation](#-routing--navigation)
10. [State Management](#-state-management)
11. [Styling Guide](#-styling-guide)
12. [Available Scripts](#-available-scripts)
13. [Development Workflow](#-development-workflow)
14. [Testing Your Changes](#-testing-your-changes)
15. [Training Resources](#-training-resources)
16. [FAQ & Troubleshooting](#-faq--troubleshooting)

---

## 🎯 Project Overview

### What is this project?

TechCorp Enterprise Portal is a **professional e-commerce web application** built with Angular 21. It simulates a real-world enterprise shopping platform with:

- User authentication (Login/Register)
- Product catalog with search & filters
- Shopping cart functionality
- Order management
- Dashboard with analytics

### Why this project for training?

| Aspect | Benefit |
|--------|---------|
| **Real-world patterns** | Same architecture used in enterprise apps |
| **Progressive complexity** | Start simple, build up skills |
| **Complete stack** | Auth, HTTP, Forms, Routing, State management |
| **Mock API** | No backend dependency - work independently |
| **Professional styling** | Learn Bootstrap integration with Angular |

### Current Implementation Status

| Feature | Status | Trainees Do |
|---------|--------|-------------|
| Login/Register | ✅ Complete | Study & understand |
| Dashboard | ✅ Complete | Study & understand |
| Products List | ✅ Complete | Study & understand |
| Cart | ✅ Complete | Study & understand |
| Product Detail | 🟡 Stub | **Implement** |
| Checkout | 🟡 Stub | **Implement** |
| Orders List | 🟡 Stub | **Implement** |
| Order Detail | 🟡 Stub | **Implement** |
| Profile Page | ❌ Not created | **Implement** |

---

## 🛠 Technology Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **Angular** | 21.x | Frontend framework |
| **TypeScript** | 5.9.x | Type-safe JavaScript |
| **Bootstrap** | 5.3.3 | CSS framework for styling |
| **RxJS** | 7.8.x | Reactive programming |
| **Node.js** | 20+ | Runtime environment |
| **npm** | 10+ | Package manager |

### Key Angular Features Used

- **Standalone Components** (no NgModules)
- **Functional Guards & Interceptors** (modern pattern)
- **Signal-ready architecture** (Angular 21 feature)
- **Lazy loading** for feature modules
- **Reactive Forms** for form handling
- **HttpClient** for API calls

---

## 🚀 Getting Started

### Prerequisites Checklist

Before starting, ensure you have:

```bash
# Check Node.js version (should be 20+)
node -v

# Check npm version (should be 10+)
npm -v

# Check Angular CLI
ng version
```

### Installation Steps

```bash
# 1. Navigate to project folder
cd c:\Users\Public\Projects\UKStore\frontend\ukstore-angular21

# 2. Install dependencies (do this once)
npm install

# 3. Start the development server
npm start

# 4. Browser opens automatically at http://localhost:4200
```

### Demo Login Credentials

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@techcorp.com | demo123 |
| **User** | user@techcorp.com | demo123 |
| **Developer** | developer@techcorp.com | demo123 |

---

## 🏗 Project Architecture

### Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        Angular App                          │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   App Component                      │   │
│  │  ┌─────────────┐ ┌────────────┐ ┌─────────────────┐ │   │
│  │  │   Header    │ │ Router     │ │    Footer       │ │   │
│  │  │   Component │ │ Outlet     │ │    Component    │ │   │
│  │  └─────────────┘ └────────────┘ └─────────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│                     FEATURE MODULES                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │   Auth   │ │Dashboard │ │ Products │ │   Cart   │  ...  │
│  │(login/  │ │          │ │(list/   │ │          │       │
│  │register)│ │          │ │detail)  │ │          │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
├─────────────────────────────────────────────────────────────┤
│                      CORE MODULE                            │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐   │
│  │ Services  │ │  Guards   │ │Interceptors│ │  Models   │   │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘   │
├─────────────────────────────────────────────────────────────┤
│                      MOCK API LAYER                         │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Mock Interceptor → Returns fake data instantly     │   │
│  │  (No real backend needed for development)           │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Design Patterns Used

| Pattern | Where Used | Why |
|---------|------------|-----|
| **Singleton** | Services | One instance shared across app |
| **Observable** | HTTP calls, Auth state | Reactive data flow |
| **Guards** | Route protection | Prevent unauthorized access |
| **Interceptors** | HTTP requests | Add auth headers, handle errors |
| **Lazy Loading** | Feature routes | Faster initial load |
| **Dependency Injection** | Everywhere | Loose coupling, testability |

---

## 📁 Folder Structure Explained

```
src/
├── app/
│   ├── core/                    # 🔒 SINGLETON SERVICES & UTILITIES
│   │   ├── constants/           # App-wide constants (API URLs, configs)
│   │   ├── errors/              # Error handling utilities
│   │   ├── guards/              # Route guards (authGuard)
│   │   │   └── auth.guard.ts    # Protects routes from unauthenticated users
│   │   ├── interceptors/        # HTTP interceptors
│   │   │   ├── http-auth.interceptor.ts    # Adds JWT token to requests
│   │   │   ├── http-error.interceptor.ts   # Handles HTTP errors globally
│   │   │   └── http-logging.interceptor.ts # Logs all HTTP requests
│   │   ├── mock/                # Mock API system
│   │   │   ├── mock-api.interceptor.ts     # Intercepts requests, returns fake data
│   │   │   └── mock-data.ts                # All mock data (users, products, etc.)
│   │   ├── models/              # TypeScript interfaces
│   │   │   └── index.ts         # User, Product, Order, Cart interfaces
│   │   └── services/            # Business logic services
│   │       ├── auth.service.ts        # Login, logout, token management
│   │       ├── api.service.ts         # HTTP wrapper with error handling
│   │       ├── notification.service.ts # Toast notifications
│   │       └── logger.service.ts      # Console logging utility
│   │
│   ├── features/                # 📦 FEATURE COMPONENTS (lazy loaded)
│   │   ├── auth/                # Authentication feature
│   │   │   └── pages/
│   │   │       ├── login/       # Login page component
│   │   │       └── register/    # Register page component
│   │   ├── dashboard/           # Dashboard feature
│   │   │   └── pages/
│   │   │       └── dashboard/   # Dashboard page with stats
│   │   ├── products/            # Products feature
│   │   │   └── pages/
│   │   │       ├── product-list/   # Products grid with filters
│   │   │       └── product-detail/ # Single product view (TODO)
│   │   ├── cart/                # Shopping cart feature
│   │   │   └── pages/
│   │   │       └── cart/        # Cart page with items
│   │   ├── checkout/            # Checkout feature (TODO)
│   │   └── orders/              # Orders feature (TODO)
│   │
│   ├── shared/                  # 🔄 REUSABLE COMPONENTS
│   │   ├── components/
│   │   │   ├── header/          # App header with navigation
│   │   │   └── footer/          # App footer
│   │   ├── directives/          # Custom directives
│   │   ├── pipes/               # Custom pipes
│   │   └── validators/          # Form validators
│   │
│   ├── app.component.ts         # Root component
│   ├── app.component.html       # Root template
│   └── app.routes.ts            # All route definitions
│
├── environments/                # Environment configs
│   └── environment.ts           # Dev environment settings
│
├── styles/                      # Global SCSS styles
│   ├── styles.scss              # Main stylesheet
│   └── _variables.scss          # SCSS variables (colors, fonts)
│
├── assets/                      # Static assets (images, fonts)
├── index.html                   # HTML entry point
└── main.ts                      # Angular bootstrap file
```

### What Goes Where?

| Type of Code | Location | Example |
|--------------|----------|---------|
| Singleton services | `core/services/` | AuthService, ApiService |
| Route guards | `core/guards/` | authGuard |
| HTTP interceptors | `core/interceptors/` | httpAuthInterceptor |
| TypeScript interfaces | `core/models/` | User, Product interfaces |
| Feature pages | `features/*/pages/` | LoginComponent, DashboardComponent |
| Reusable UI | `shared/components/` | HeaderComponent |
| Custom directives | `shared/directives/` | HighlightDirective |
| Custom pipes | `shared/pipes/` | TruncatePipe |
| Form validators | `shared/validators/` | passwordMatchValidator |

---

## 🔑 Key Angular Concepts Used

### 1. Standalone Components

**What:** Components without NgModule (Angular 15+ feature)

**Where:** Every component in this project

```typescript
// Example: login.component.ts
@Component({
  selector: 'app-login',
  standalone: true,                              // ← No NgModule needed
  imports: [CommonModule, ReactiveFormsModule],  // ← Import dependencies directly
  templateUrl: './login.component.html'
})
export class LoginComponent { }
```

**Why learn this:** This is the modern Angular pattern. NgModules are being phased out.

---

### 2. Functional Guards (Angular 15+)

**What:** Route guards as functions instead of classes

**Where:** `src/app/core/guards/auth.guard.ts`

```typescript
// Modern way (used in this project)
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isAuthenticated().pipe(
    map(isAuth => isAuth ? true : router.createUrlTree(['/auth/login']))
  );
};

// Old way (don't use)
@Injectable()
export class AuthGuard implements CanActivate { }
```

---

### 3. Functional Interceptors (Angular 15+)

**What:** HTTP interceptors as functions

**Where:** `src/app/core/interceptors/`

```typescript
// Modern way (used in this project)
export function httpAuthInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  const authService = inject(AuthService);
  const token = authService.getToken();
  
  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }
  
  return next(req);
}
```

---

### 4. Dependency Injection with inject()

**What:** Modern way to inject services

**Where:** All components and services

```typescript
// Modern way (used in this project)
export class DashboardComponent {
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);
}

// Old way (still works)
export class DashboardComponent {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
}
```

---

### 5. Reactive Forms

**What:** Form handling with FormGroup, FormControl, Validators

**Where:** Login, Register components

```typescript
// Creating a form
loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});

// Using in template
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <input formControlName="email">
  <div *ngIf="loginForm.get('email')?.errors?.['required']">
    Email is required
  </div>
</form>
```

---

### 6. RxJS Observables

**What:** Reactive streams for async data

**Where:** HTTP calls, Auth state

```typescript
// Making HTTP request
this.http.get<Product[]>('/api/products')
  .pipe(
    takeUntil(this.destroy$),  // Auto-unsubscribe on destroy
    catchError(err => {
      console.error(err);
      return of([]);  // Return empty array on error
    })
  )
  .subscribe(products => this.products = products);
```

**Key RxJS operators to learn:**
- `map` - Transform data
- `filter` - Filter emissions
- `tap` - Side effects (logging)
- `catchError` - Handle errors
- `takeUntil` - Auto-unsubscribe
- `switchMap` - Cancel previous, start new
- `debounceTime` - Wait before emitting

---

### 7. Lazy Loading

**What:** Load features only when needed

**Where:** `src/app/app.routes.ts`

```typescript
// Route with lazy loading
{
  path: 'dashboard',
  loadComponent: () => 
    import('./features/dashboard/pages/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
}
```

**Benefit:** Initial app loads faster (smaller bundle)

---

## 🔐 Authentication Flow

### How Login Works

```
┌──────────────┐     ┌───────────────┐     ┌────────────────┐
│  Login Form  │ ──▶ │  AuthService  │ ──▶ │ Mock API       │
│  (Component) │     │  .login()     │     │ Interceptor    │
└──────────────┘     └───────────────┘     └────────────────┘
                            │                       │
                            ▼                       ▼
                     ┌───────────────┐     ┌────────────────┐
                     │ Store token   │ ◀── │ Return user +  │
                     │ in localStorage│     │ JWT token      │
                     └───────────────┘     └────────────────┘
                            │
                            ▼
                     ┌───────────────┐
                     │ Navigate to   │
                     │ /dashboard    │
                     └───────────────┘
```

### Key Files

| File | Purpose |
|------|---------|
| `auth.service.ts` | Login/logout logic, token management |
| `auth.guard.ts` | Protects routes from unauthenticated users |
| `http-auth.interceptor.ts` | Adds JWT token to all API requests |
| `mock-api.interceptor.ts` | Validates credentials, returns mock user |

### Token Storage

```typescript
// Token is stored in localStorage
localStorage.setItem('authToken', token);
localStorage.setItem('currentUser', JSON.stringify(user));

// Retrieved on app start to restore session
const token = localStorage.getItem('authToken');
```

---

## 🔌 Mock API System

### How It Works

Instead of a real backend, this project uses an HTTP interceptor to simulate API responses:

```
Component makes HTTP request
        │
        ▼
┌───────────────────────────┐
│  Mock API Interceptor     │
│  (mock-api.interceptor.ts)│
├───────────────────────────┤
│  Is URL /api/*?           │
│  ├─ NO → Pass to real API │
│  └─ YES → Return mock data│
└───────────────────────────┘
        │
        ▼
Component receives response
(same as if from real API)
```

### Available Mock Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | Login with email/password |
| `/api/auth/register` | POST | Register new user |
| `/api/auth/logout` | POST | Logout |
| `/api/products` | GET | List products (paginated) |
| `/api/products/:id` | GET | Single product |
| `/api/categories` | GET | List categories |
| `/api/cart` | GET | Get cart items |
| `/api/cart/items` | POST/PUT/DELETE | Cart operations |
| `/api/orders` | GET/POST | List/create orders |
| `/api/dashboard/stats` | GET | Dashboard statistics |

### Mock Data Location

All mock data is in: `src/app/core/mock/mock-data.ts`

```typescript
// Example: Mock users
export const MOCK_USERS: User[] = [
  {
    id: 'usr-001',
    email: 'admin@techcorp.com',
    firstName: 'James',
    lastName: 'Wilson',
    role: 'admin',
    // ...
  }
];

// Example: Mock products
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Premium Wireless Headphones',
    price: 249.99,
    // ...
  }
];
```

---

## 🧭 Routing & Navigation

### Route Configuration

**File:** `src/app/app.routes.ts`

```typescript
export const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  // Auth routes (no guard - public)
  {
    path: 'auth',
    children: [
      { path: 'login', loadComponent: () => import(...) },
      { path: 'register', loadComponent: () => import(...) }
    ]
  },
  
  // Protected routes (require login)
  {
    path: 'dashboard',
    canActivate: [authGuard],  // ← Guard protects this route
    loadComponent: () => import(...)
  },
  
  // Wildcard - catch all unknown routes
  { path: '**', redirectTo: '/dashboard' }
];
```

### Navigation Methods

```typescript
// Programmatic navigation (in component)
this.router.navigate(['/dashboard']);
this.router.navigate(['/products', productId]);

// Template navigation
<a routerLink="/products">Products</a>
<a [routerLink]="['/products', product.id]">View</a>
```

---

## 💾 State Management

This project uses **simple service-based state** (not NgRx/Akita):

### Auth State

```typescript
// auth.service.ts
export class AuthService {
  private currentUser$ = new BehaviorSubject<User | null>(null);
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);
  
  // Components subscribe to these
  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }
  
  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
```

### Using State in Components

```typescript
// dashboard.component.ts
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;
  
  ngOnInit() {
    this.authService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => this.currentUser = user);
  }
}
```

---

## 🎨 Styling Guide

### Technologies Used

| Tech | Purpose |
|------|---------|
| Bootstrap 5.3 | CSS framework |
| SCSS | CSS pre-processor |
| Bootstrap Icons | Icon library |

### Global Styles

**File:** `src/styles/styles.scss`

```scss
// Import Bootstrap
@import 'bootstrap/scss/bootstrap';

// Custom variables
$primary-red: #da291c;  // Company brand color

// Global component styles
.card { /* ... */ }
.btn-primary { /* ... */ }
```

### Component Styles

Each component has its own `.scss` file:

```
login.component.scss     → Styles only for login page
dashboard.component.scss → Styles only for dashboard
```

### Using Bootstrap Classes

```html
<!-- Grid system -->
<div class="row">
  <div class="col-md-6">Half width on medium+</div>
  <div class="col-md-6">Half width on medium+</div>
</div>

<!-- Cards -->
<div class="card shadow-sm">
  <div class="card-body">Content</div>
</div>

<!-- Buttons -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>

<!-- Icons -->
<i class="bi bi-cart"></i>
<i class="bi bi-person"></i>
```

---

## 📝 Available Scripts

```bash
# Development
npm start           # Start dev server with auto-open
npm run dev         # Start on port 4200

# Building
npm run build       # Development build
npm run build:prod  # Production build (optimized)

# Testing
npm test            # Run unit tests
npm run test:watch  # Run tests in watch mode
npm run test:coverage # Run with coverage report

# Code Quality
npm run lint        # Check for linting errors
npm run lint:fix    # Auto-fix linting errors
npm run format      # Format code with Prettier
```

---

## 👩‍💻 Development Workflow

### When Starting a New Task

1. **Pull latest code** (if using Git)
   ```bash
   git pull origin main
   ```

2. **Create a branch** (optional but recommended)
   ```bash
   git checkout -b feature/TASK-XXX-description
   ```

3. **Read the JIRA task** - Understand requirements

4. **Find related files** - Study existing similar code

5. **Implement the feature**

6. **Test your changes** - Manual testing + console checks

7. **Check for errors**
   ```bash
   npm run lint
   ```

### Typical File Changes

| Task Type | Files to Modify |
|-----------|-----------------|
| New page | Create component in `features/`, add route in `app.routes.ts` |
| New service | Create in `core/services/`, provide in root |
| New form | Component + template + validators |
| API endpoint | Add handler in `mock-api.interceptor.ts`, data in `mock-data.ts` |
| Styling | Component `.scss` file or `styles.scss` for global |

---

## 🧪 Testing Your Changes

### Manual Testing Checklist

Before saying "done", check:

- [ ] Feature works as expected
- [ ] No console errors (F12 → Console)
- [ ] No network errors (F12 → Network)
- [ ] Responsive on mobile (F12 → Device toolbar)
- [ ] Navigation works correctly
- [ ] Form validation works
- [ ] Loading states show/hide properly
- [ ] Error states handle gracefully

### Debug Tips

```typescript
// Add console.log to trace issues
console.log('[ComponentName] Method called with:', data);

// Check if Observable emits
this.someObservable$.subscribe(data => {
  console.log('Observable emitted:', data);
});

// Check component state
ngOnInit() {
  console.log('Component initialized, state:', {
    user: this.currentUser,
    products: this.products
  });
}
```

---

## 📚 Training Resources

### Documents in This Project

| File | Purpose |
|------|---------|
| `README.md` | Project overview, quick start |
| `KT_GUIDE.md` | This document - complete KT |
| `PROJECT_STATUS.md` | Implementation status, test flows |
| `JIRA_TASKS.md` | 44 tasks to complete (training work) |
| `JIRA_BUGS.md` | 54 bugs for debugging practice |

### External Learning Resources

**Angular Official:**
- [Angular.io Docs](https://angular.io/docs) - Official documentation
- [Angular Tutorial](https://angular.io/tutorial) - Tour of Heroes
- [Angular Style Guide](https://angular.io/guide/styleguide) - Best practices

**RxJS:**
- [Learn RxJS](https://www.learnrxjs.io/) - Operator reference
- [RxJS Marbles](https://rxmarbles.com/) - Visual diagrams

**TypeScript:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)

**Bootstrap:**
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### Recommended VS Code Extensions

1. **Angular Language Service** - IntelliSense for Angular
2. **ESLint** - Linting support
3. **Prettier** - Code formatting
4. **GitLens** - Git integration
5. **Auto Import** - Auto import TypeScript
6. **Angular Snippets** - Code snippets

---

## ❓ FAQ & Troubleshooting

### Common Issues

**Q: `npm start` fails with port in use**
```bash
# Kill process on port 4200
npx kill-port 4200
# Or use different port
npm run dev -- --port 4201
```

**Q: Changes not reflecting in browser**
- Hard refresh: `Ctrl+Shift+R`
- Clear browser cache
- Restart `ng serve`

**Q: "Cannot find module" errors**
```bash
# Delete and reinstall node_modules
rm -rf node_modules
npm install
```

**Q: TypeScript errors in VS Code but app runs**
- Restart TypeScript server: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

**Q: Login not working**
- Check credentials: `admin@techcorp.com` / `demo123`
- Check browser console for errors
- Make sure mock interceptor is running (see `[Mock API]` logs)

**Q: API calls returning undefined**
- Check mock-api.interceptor.ts has the endpoint
- Check Network tab for response
- Add console.log to trace

**Q: Styles not applying**
- Check class names match Bootstrap
- Check component-specific `.scss` file
- Verify SCSS is being imported

---

## 🎯 Quick Start Checklist for Trainees

### Day 1: Setup & Orientation
- [ ] Install Node.js 20+
- [ ] Install VS Code with extensions
- [ ] Clone/download project
- [ ] Run `npm install`
- [ ] Run `npm start`
- [ ] Login with demo credentials
- [ ] Explore all pages
- [ ] Read this KT_GUIDE.md completely

### Day 2-3: Study Existing Code
- [ ] Study LoginComponent (forms, validation)
- [ ] Study DashboardComponent (HTTP calls, data display)
- [ ] Study ProductListComponent (filters, pagination)
- [ ] Study CartComponent (state management)
- [ ] Understand auth.service.ts
- [ ] Understand mock-api.interceptor.ts

### Day 4+: Start Tasks
- [ ] Pick a task from JIRA_TASKS.md
- [ ] Start with Level 0 (Setup & KT) tasks
- [ ] Progress to Level 1 (HTML/CSS) tasks
- [ ] Move to Level 2 (Small Functionality)
- [ ] Then Level 3 (Medium Features)
- [ ] Finally Level 4 (Advanced Features)

---

## 📞 Need Help?

1. **First:** Search the error message online
2. **Second:** Check this KT guide and FAQ
3. **Third:** Check Angular docs
4. **Fourth:** Ask your trainer/senior developer

**Remember:** The goal is to learn how to solve problems, not just get answers. Try to debug for 15-30 minutes before asking for help.

---

> **Good luck with your Angular journey! 🚀**
>
> This project is designed to give you hands-on experience with real-world patterns.
> Take your time to understand each concept before moving to the next.
