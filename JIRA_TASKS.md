# 📋 Angular 21 UK Store - JIRA Training Tasks

> **Project:** TechCorp UK Store - Angular 21 E-Commerce Platform  
> **Total Tasks:** 55 | **Story Points:** 145 | **Estimated Hours:** 95-120h  
> **Purpose:** Training trainees with progressive Angular skills for interviews and job readiness

---

# 🎯 Interview Topics Coverage Map

> This map shows which Angular interview topics are practiced across tasks, helping you track comprehensive coverage for job interviews.

## Essential Interview Topics (Must Know)

| Topic | Tasks Practicing | Count | Priority |
|-------|------------------|-------|----------|
| **Components & Templates** | SETUP-001, SETUP-002, KT-001, KT-002, CSS-001 to CSS-008, PROD-001 | 15 | 🔴 Essential |
| **Data Binding (Property, Event, Two-way)** | KT-002, FUNC-002, FUNC-003, FUNC-004, BUG-017 | 5 | 🔴 Essential |
| **Directives (@if, @for, @switch)** | KT-002, CSS-005, FUNC-003, PROD-001 | 4 | 🔴 Essential |
| **Services & Dependency Injection** | KT-003, AUTH-001, AUTH-002, STATE-001, STATE-002 | 5 | 🔴 Essential |
| **HTTP Client & API Calls** | KT-004, AUTH-001, PROD-001, PROD-002, PROD-003, ORDER-001 | 6 | 🔴 Essential |
| **Reactive Forms & Validation** | FUNC-002, FUNC-004, FUNC-008, CHECKOUT-001, FORM-001, FORM-002 | 6 | 🔴 Essential |
| **Routing & Navigation** | KT-003, AUTH-004, PROD-001, ORDER-001, ORDER-002 | 5 | 🔴 Essential |
| **Pipes (Built-in & Custom)** | CSS-005, CART-001, ORDER-001, ORDER-002 | 4 | 🔴 Essential |
| **Component Lifecycle Hooks** | SETUP-001, KT-002, FUNC-002, STATE-001 | 4 | 🔴 Essential |

## Important Interview Topics (Should Know)

| Topic | Tasks Practicing | Count | Priority |
|-------|------------------|-------|----------|
| **Angular Signals** | STATE-001, STATE-002, PERF-001 | 3 | 🟠 Important |
| **RxJS Operators** | FUNC-003, AUTH-002, RXJS-001 | 3 | 🟠 Important |
| **HTTP Interceptors** | AUTH-001, AUTH-002, KT-004 | 3 | 🟠 Important |
| **Route Guards (Auth, Role)** | AUTH-003, AUTH-004, KT-003 | 3 | 🟠 Important |
| **Change Detection** | PERF-001, STATE-001, STATE-002 | 3 | 🟠 Important |
| **Input/Output Decorators** | KT-002, PROD-001, CART-001 | 3 | 🟠 Important |
| **Standalone Components** | SETUP-001, KT-001, KT-002 | 3 | 🟠 Important |
| **localStorage/sessionStorage** | FUNC-002, AUTH-001, AUTH-002 | 3 | 🟠 Important |

## Advanced Interview Topics (Nice to Know)

| Topic | Tasks Practicing | Count | Priority |
|-------|------------------|-------|----------|
| **Unit Testing (Jasmine/Jest)** | TEST-001, TEST-002 | 2 | 🟡 Advanced |
| **E2E Testing (Cypress)** | TEST-003 | 1 | 🟡 Advanced |
| **Virtual Scrolling (CDK)** | PERF-002 | 1 | 🟡 Advanced |
| **NgZone & Performance** | PERF-001, PERF-002 | 2 | 🟡 Advanced |
| **Custom Validators** | FORM-002 | 1 | 🟡 Advanced |
| **Server-Side Rendering** | Advanced topics | 0 | 🟡 Advanced |
| **State Management Patterns** | STATE-001, STATE-002 | 2 | 🟡 Advanced |

---

# 🟢 LEVEL 0: Project Setup & Knowledge Transfer

> **Goal:** Understand the project structure and run the application successfully

---

## Epic: Initial Setup

### SETUP-001: Clone and Run the Project
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Clone the repository, install dependencies, and run the Angular application locally.

#### 🎯 Acceptance Criteria
- [ ] Repository cloned successfully
- [ ] `npm install` completes without errors
- [ ] `ng serve` runs the app on localhost:4200
- [ ] Can navigate to login page
- [ ] Can login with test credentials (test@example.com / password123)

#### 💻 Commands
```bash
git clone <repository-url>
cd ukstore-angular21
npm install
ng serve
```

#### 📚 Topics Covered
- Angular CLI basics
- npm package management
- Development server
- Project configuration

#### 🎓 Learning Objectives
- Set up Angular development environment
- Understand package.json and angular.json
- Learn ng serve command options

#### 💼 Interview Questions
1. **What is Angular CLI and why is it used?**
   - Angular CLI is a command-line interface for Angular development that provides scaffolding, building, testing, and deployment tools.
   
2. **What's the difference between `npm install` and `npm ci`?**
   - `npm install` installs dependencies and can update package-lock.json. `npm ci` is for CI/CD environments - it installs exact versions from package-lock.json and is faster.
   
3. **What does `ng serve` do internally?**
   - It compiles the app using webpack, starts a development server with hot module replacement (HMR), and watches for file changes.

---

### SETUP-002: Explore Project Structure
**Story Points:** 1 | **Priority:** Critical | **Time:** 30 minutes

#### 📝 Description
Review and understand the Angular 21 project folder structure following best practices.

#### 🎯 Acceptance Criteria
- [ ] Understand `src/app` folder structure
- [ ] Know the difference between `core`, `shared`, and `features` folders
- [ ] Identify all lazy-loaded feature modules
- [ ] Find the main routing configuration
- [ ] Locate environment configuration files

#### 📁 Key Files to Review
```
src/
├── app/
│   ├── core/           # Singleton services, guards, interceptors
│   ├── shared/         # Reusable components, pipes, directives
│   ├── features/       # Feature modules (auth, products, cart, orders)
│   ├── app.component.ts
│   ├── app.config.ts   # App configuration
│   └── app.routes.ts   # Main routing
├── assets/             # Static files
├── environments/       # Environment configs
└── styles/             # Global SCSS
```

#### 📚 Topics Covered
- Angular folder structure best practices
- Feature-based architecture
- Core vs Shared vs Features modules
- Lazy loading organization

#### 🎓 Learning Objectives
- Navigate large Angular projects confidently
- Understand scalable folder structures
- Know where to add new features

#### 💼 Interview Questions
1. **Explain the difference between core, shared, and feature modules?**
   - **Core:** Contains singleton services, guards, interceptors - imported once in AppModule
   - **Shared:** Contains reusable components, pipes, directives - imported in feature modules as needed
   - **Features:** Contains feature-specific components and services - organized by business domain
   
2. **Why use feature-based folder structure?**
   - Better code organization, easier lazy loading, improved team collaboration, and clearer dependencies between features.
   
3. **What is lazy loading and why is it important?**
   - Lazy loading loads feature modules on demand instead of at startup, reducing initial bundle size and improving load times.

---

### SETUP-003: Angular 21 New Features Overview
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Review and understand the new features in Angular 21 including standalone components and new control flow syntax.

#### 🎯 Acceptance Criteria
- [ ] Understand standalone components (no NgModule needed)
- [ ] Learn new control flow: `@if`, `@for`, `@switch`
- [ ] Know about Angular Signals basics
- [ ] Understand inject() function vs constructor injection
- [ ] Review functional guards and interceptors

#### 💡 Key Concepts
```typescript
// Standalone Component
@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-example',
  template: `
    @if (isLoading) {
      <p>Loading...</p>
    } @else {
      @for (item of items; track item.id) {
        <div>{{ item.name }}</div>
      }
    }
  `
})
export class ExampleComponent {
  // inject() function
  private http = inject(HttpClient);
}
```

#### 📚 Topics Covered
- Standalone components
- New control flow syntax (@if, @for, @switch)
- Signal basics
- inject() function
- Functional guards

#### 💼 Interview Questions
1. **What are standalone components in Angular?**
   - Components that don't need to be declared in NgModule. They have their own imports array and are self-contained.
   
2. **Compare @if with *ngIf directive:**
   - `@if` is the new built-in control flow (Angular 17+), native syntax, better performance, block-scoped, supports @else. `*ngIf` is the legacy directive approach.
   
3. **What is the inject() function and when should you use it?**
   - `inject()` is a function that gets dependencies outside constructors (in functions, field initializers). Useful in functional guards/interceptors and reduces constructor boilerplate.
   
4. **What's the difference between track $index and track item.id in @for?**
   - `track item.id` uses unique ID for change detection (better performance, preserves element state). `track $index` uses position (can cause issues if items reorder).

---

## Epic: Knowledge Transfer Sessions

### KT-001: Understanding Components & Templates
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Study how Angular components work by examining existing components in the project.

#### 🎯 Acceptance Criteria
- [ ] Understand @Component decorator options
- [ ] Know the difference between inline and external templates
- [ ] Understand template syntax and binding
- [ ] Review component lifecycle hooks
- [ ] Examine 3+ components in the project

#### 📁 Components to Study
```
src/app/shared/components/header/header.component.ts
src/app/features/auth/pages/login/login.component.ts
src/app/features/products/pages/product-list/product-list.component.ts
```

#### 📚 Topics Covered
- @Component decorator
- Templates and styles
- Component lifecycle
- Data binding basics

#### 💼 Interview Questions
1. **Explain the Angular component lifecycle hooks in order:**
   - ngOnChanges → ngOnInit → ngDoCheck → ngAfterContentInit → ngAfterContentChecked → ngAfterViewInit → ngAfterViewChecked → ngOnDestroy
   
2. **What's the difference between ngOnInit and constructor?**
   - Constructor is for DI setup only. ngOnInit is called after first ngOnChanges, when @Input properties are available - use for initialization logic.
   
3. **What is change detection in Angular?**
   - Angular's mechanism to detect data changes and update the DOM. Can be Default (checks all) or OnPush (checks on input reference changes or events).
   
4. **What are template reference variables?**
   - Variables defined with `#variableName` that reference DOM elements or component instances, accessible in template or via @ViewChild.

---

### KT-002: Understanding Data Binding
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Master all types of data binding in Angular by examining real examples.

#### 🎯 Acceptance Criteria
- [ ] Understand interpolation: `{{ expression }}`
- [ ] Understand property binding: `[property]="value"`
- [ ] Understand event binding: `(event)="handler()"`
- [ ] Understand two-way binding: `[(ngModel)]="value"`
- [ ] Identify all binding types in login component

#### 💡 Examples
```html
<!-- Interpolation -->
<h1>{{ title }}</h1>

<!-- Property Binding -->
<img [src]="product.image" [alt]="product.name">

<!-- Event Binding -->
<button (click)="addToCart()">Add to Cart</button>

<!-- Two-way Binding -->
<input [(ngModel)]="searchTerm">
```

#### 📚 Topics Covered
- Interpolation
- Property binding
- Event binding
- Two-way binding
- Input/Output decorators

#### 💼 Interview Questions
1. **Explain all types of data binding in Angular:**
   - **Interpolation:** `{{ }}` - one-way, component to template
   - **Property Binding:** `[prop]` - one-way, component to template
   - **Event Binding:** `(event)` - one-way, template to component
   - **Two-way:** `[()]` - both directions, used with ngModel
   
2. **What is the banana-in-a-box syntax?**
   - `[()]` combines property binding `[]` and event binding `()`. Called "banana-in-a-box" by its shape. Used for two-way binding.
   
3. **What's the difference between @Input() and @Output()?**
   - `@Input()` passes data from parent to child. `@Output()` emits events from child to parent (using EventEmitter).
   
4. **Can you bind to any HTML attribute?**
   - Use `[attr.attribute-name]` for attributes, `[property]` for DOM properties. Some attributes have no corresponding properties (like colspan).

---

### KT-003: Understanding Services & Dependency Injection
**Story Points:** 3 | **Priority:** Critical | **Time:** 2-3 hours

#### 📝 Description
Deep dive into Angular's Dependency Injection system and service patterns.

#### 🎯 Acceptance Criteria
- [ ] Understand @Injectable decorator and providedIn
- [ ] Know singleton vs component-level services
- [ ] Understand constructor injection vs inject()
- [ ] Review AuthService and ProductService
- [ ] Create a simple test service

#### 📁 Services to Study
```
src/app/core/services/auth.service.ts
src/app/core/services/product.service.ts
src/app/core/services/notification.service.ts
```

#### 📚 Topics Covered
- Dependency Injection
- @Injectable decorator
- providedIn options
- Service patterns

#### 💼 Interview Questions
1. **What is Dependency Injection (DI) in Angular?**
   - A design pattern where dependencies are provided to a class rather than being created by it. Angular's DI system manages a container of service instances.
   
2. **Explain providedIn: 'root' vs providing in module:**
   - `providedIn: 'root'` makes service tree-shakeable and singleton at app level. Module providers are only tree-shakeable if module is lazy-loaded.
   
3. **What are the different ways to provide services?**
   - `providedIn: 'root'` (singleton), `providedIn: 'any'` (per lazy module), component providers (per component), module providers array.
   
4. **When would you use component-level providers?**
   - When each component instance needs its own service instance, like form state management or per-component caching.
   
5. **What is the inject() function and how does it differ from constructor injection?**
   - `inject()` can be used in field initializers, functional guards/interceptors. Constructor injection is traditional. Both achieve same result, inject() offers more flexibility.

---

### KT-004: Understanding HTTP Client & Interceptors
**Story Points:** 3 | **Priority:** Critical | **Time:** 2-3 hours

#### 📝 Description
Learn how to make API calls and handle responses using Angular HttpClient.

#### 🎯 Acceptance Criteria
- [ ] Understand HttpClient methods (get, post, put, delete)
- [ ] Know how to type API responses
- [ ] Understand RxJS operators for HTTP
- [ ] Review HTTP Interceptors
- [ ] Trace an API call from component to mock API

#### 📁 Files to Study
```
src/app/core/services/api.service.ts
src/app/core/interceptors/http-auth.interceptor.ts
src/app/core/interceptors/mock-api.interceptor.ts
```

#### 📚 Topics Covered
- HttpClient module
- Observable responses
- Request/Response handling
- HTTP Interceptors

#### 💼 Interview Questions
1. **How do you make HTTP calls in Angular?**
   - Import HttpClientModule, inject HttpClient, use methods like get<T>(), post<T>() which return Observables.
   
2. **What are HTTP Interceptors and when would you use them?**
   - Interceptors intercept HTTP requests/responses globally. Use for: adding auth headers, logging, error handling, caching, loading indicators.
   
3. **How do you handle HTTP errors in Angular?**
   - Use RxJS catchError operator in pipe, or subscribe error callback. Create error interceptor for global handling.
   
4. **What's the difference between PUT and PATCH?**
   - PUT replaces entire resource. PATCH updates partial resource. Use PUT for full updates, PATCH for individual field updates.
   
5. **How would you cancel an HTTP request?**
   - Unsubscribe from Observable, or use switchMap which cancels previous requests, or AbortController.

---

# 🟦 LEVEL 1: CSS & HTML Tasks

> **Goal:** Get comfortable with styling in Angular using SCSS and Bootstrap

---

## Epic: Visual Polish & Styling

### CSS-001: Style the Login Page
**Story Points:** 1 | **Priority:** Medium | **Time:** 45 minutes

#### 📝 Description
Improve the login page styling to match the NatWest-inspired theme (purple/red gradient) with clean form design.

#### 🎯 Acceptance Criteria
- [ ] Centered login card on gradient background
- [ ] Form inputs with proper padding and borders
- [ ] Primary button with hover effect
- [ ] "Forgot Password" link styled properly
- [ ] Responsive on mobile devices

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.scss
```

#### 🎨 Color Palette Reference
```scss
$primary-red: #da291c;     // NatWest Red
$primary-purple: #42145f;  // NatWest Purple
$background-dark: #1a1a1a;
$text-light: #ffffff;
```

#### 📚 Topics Covered
- SCSS variables
- Flexbox centering
- CSS gradients
- Form styling
- Hover effects

#### 💼 Interview Questions
1. **What is SCSS and how does it differ from CSS?**
   - SCSS is a CSS preprocessor with variables, nesting, mixins, imports. Browsers can't read SCSS directly - it compiles to CSS.
   
2. **How do you center an element horizontally and vertically?**
   - Flexbox: `display: flex; justify-content: center; align-items: center`
   - Grid: `display: grid; place-items: center`
   - Position: `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)`

---

### CSS-002: Create Product Card Component Styles
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Style the product card component with shadow, hover effects, and proper image sizing.

#### 🎯 Acceptance Criteria
- [ ] Card has subtle box shadow
- [ ] Image maintains aspect ratio
- [ ] Card lifts on hover (box-shadow + transform)
- [ ] Price displayed prominently
- [ ] "Add to Cart" button full width at bottom
- [ ] Card height consistent across products

#### 📁 Files to Modify
```
src/app/features/products/components/product-card/product-card.component.scss
```

#### 📚 Topics Covered
- CSS box-shadow
- CSS transitions
- Image aspect ratio (object-fit)
- Card component patterns

#### 💼 Interview Questions
1. **What is object-fit and when do you use it?**
   - Controls how an image fills its container. Values: cover (fills, may crop), contain (fits fully), fill (stretches). Use when you need consistent image sizes.
   
2. **How do you create smooth hover effects?**
   - Use CSS `transition` property on the normal state. Example: `transition: transform 0.3s ease, box-shadow 0.3s ease`

---

### CSS-003: Style the Shopping Cart Page
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Create a clean shopping cart layout with item rows, quantity controls, and order summary sidebar.

#### 🎯 Acceptance Criteria
- [ ] Two-column layout (items + summary)
- [ ] Each cart item shows image, name, price, quantity, total
- [ ] Quantity input with +/- buttons styled
- [ ] Order summary box with sticky positioning
- [ ] "Checkout" button prominent
- [ ] Mobile: summary moves below items

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.scss
```

#### 📚 Topics Covered
- CSS Grid layout
- Flexbox for item rows
- Sticky positioning
- Responsive design
- Bootstrap utilities

#### 💼 Interview Questions
1. **When would you use CSS Grid vs Flexbox?**
   - **Grid:** Two-dimensional layouts (rows AND columns), complex page layouts
   - **Flexbox:** One-dimensional layouts (row OR column), component layouts, alignment
   - Often used together - Grid for page, Flexbox for components
   
2. **What is position: sticky?**
   - Element is positioned based on scroll position. Behaves like relative until scroll threshold, then becomes fixed. Good for sticky headers/sidebars.

---

### CSS-004: Style the Header Navigation
**Story Points:** 1 | **Priority:** Medium | **Time:** 45 minutes

#### 📝 Description
Style the header component with logo, navigation links, search, and user dropdown.

#### 🎯 Acceptance Criteria
- [ ] Logo and brand name aligned left
- [ ] Navigation links with hover underline effect
- [ ] Search input with icon inside
- [ ] Cart icon with item count badge
- [ ] User dropdown with avatar

#### 📁 Files to Modify
```
src/app/shared/components/header/header.component.scss
```

#### 📚 Topics Covered
- Navbar patterns
- Icon integration
- Badge positioning
- Dropdown styling

#### 💼 Interview Questions
1. **How do you position a badge on an icon?**
   - Parent: `position: relative`. Badge: `position: absolute; top: -8px; right: -8px` with appropriate z-index.
   
2. **What's the difference between display: none and visibility: hidden?**
   - `display: none` removes from layout completely. `visibility: hidden` hides but preserves space. Use display for collapsible elements.

---

### CSS-005: Create Status Badge Styles
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Create consistent colored badges for order statuses: pending, processing, shipped, delivered, cancelled.

#### 🎯 Acceptance Criteria
- [ ] Each status has distinct background color
- [ ] Text is readable (contrast)
- [ ] Badges are pill-shaped
- [ ] Consistent padding and font size
- [ ] Works with dynamic status values

#### 💡 Implementation
```scss
.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  &.pending { background: #f59e0b; color: white; }
  &.processing { background: #3b82f6; color: white; }
  &.shipped { background: #8b5cf6; color: white; }
  &.delivered { background: #10b981; color: white; }
  &.cancelled { background: #ef4444; color: white; }
}
```

#### 📚 Topics Covered
- CSS class naming conventions
- Color psychology in UI
- Badge component patterns
- SCSS variables

#### 💼 Interview Questions
1. **How do you ensure text is readable on colored backgrounds?**
   - Check contrast ratio (WCAG requires 4.5:1 for normal text). Use dark text on light backgrounds and vice versa. Tools: contrast checker websites.
   
2. **What are CSS naming conventions you follow?**
   - BEM (Block__Element--Modifier), prefixing, meaningful names. Example: `.card`, `.card__header`, `.card--featured`

---

### CSS-006: Improve Mobile Responsiveness of Header
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Ensure the header looks and works great on mobile devices. The hamburger menu should work smoothly.

#### 🎯 Acceptance Criteria
- [ ] Logo and brand name visible on mobile
- [ ] Hamburger menu icon visible on mobile (< 992px)
- [ ] Menu expands/collapses smoothly when clicked
- [ ] Navigation links stack vertically on mobile
- [ ] Search bar full width on mobile
- [ ] User dropdown works on mobile
- [ ] No horizontal scrolling on mobile

#### 📁 Files to Modify
```
src/app/shared/components/header/header.component.html
src/app/shared/components/header/header.component.scss
```

#### 📚 Topics Covered
- CSS media queries
- Bootstrap responsive breakpoints
- Mobile-first design
- Hamburger menu pattern

#### 💼 Interview Questions
1. **What are the Bootstrap breakpoints?**
   - xs: <576px, sm: ≥576px, md: ≥768px, lg: ≥992px, xl: ≥1200px, xxl: ≥1400px
   
2. **What is mobile-first design?**
   - Write base CSS for mobile, then use min-width media queries for larger screens. Benefits: better performance on mobile, progressive enhancement.
   
3. **How do you debug responsive issues?**
   - Browser DevTools device toolbar, check for overflow (add outline to *), test real devices, use responsive testing tools.

---

### CSS-007: Add Focus States for Accessibility
**Story Points:** 1 | **Priority:** Medium | **Time:** 30 minutes

#### 📝 Description
Ensure all interactive elements have visible focus states for keyboard navigation (accessibility requirement).

#### 🎯 Acceptance Criteria
- [ ] Buttons show clear focus ring when tabbed to
- [ ] Form inputs show focus state
- [ ] Links show focus state
- [ ] Focus is visible on all navigation items
- [ ] Can navigate entire page with keyboard only

#### 📁 Files to Modify
```
src/styles/styles.scss (global styles)
```

#### 💡 Implementation
```scss
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 2px solid #da291c;
  outline-offset: 2px;
}
```

#### 📚 Topics Covered
- CSS :focus-visible pseudo-class
- Accessibility (a11y) basics
- Keyboard navigation
- WCAG requirements

#### 💼 Interview Questions
1. **What is :focus-visible and how does it differ from :focus?**
   - `:focus` applies whenever element is focused (click or keyboard). `:focus-visible` only applies for keyboard focus. Use focus-visible to avoid rings on mouse clicks.
   
2. **What are WCAG guidelines?**
   - Web Content Accessibility Guidelines - standards for accessible web content. Levels A, AA, AAA. AA is typically required for compliance.
   
3. **How do you test keyboard accessibility?**
   - Navigate using Tab, Shift+Tab, Enter, Space, Arrow keys. Ensure all interactive elements are reachable and usable without a mouse.

---

### CSS-008: Create a Price Display Component Style
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Create consistent styling for displaying prices with original/sale price pattern.

#### 🎯 Acceptance Criteria
- [ ] Current price displayed in bold, primary color
- [ ] Original price shown with strikethrough
- [ ] Discount percentage badge optional
- [ ] Consistent styling across all pages
- [ ] Supports GBP currency symbol (£)

#### 💡 HTML Pattern
```html
<div class="price-display">
  <span class="current-price">£179.99</span>
  <span class="original-price">£219.99</span>
  <span class="discount-badge">-18%</span>
</div>
```

#### 📚 Topics Covered
- CSS text-decoration (strikethrough)
- Display: inline-flex
- Badge styling
- Currency formatting

#### 💼 Interview Questions
1. **How do you create strikethrough text in CSS?**
   - `text-decoration: line-through` - can also add color: `text-decoration: line-through red`
   
2. **How would you format currency in Angular?**
   - Use CurrencyPipe: `{{ price | currency:'GBP':'symbol':'1.2-2' }}` or in TypeScript with Intl.NumberFormat

---

# 🟨 LEVEL 2: Small Functionality Tasks

> **Goal:** Add simple JavaScript/TypeScript functionality to components

---

## Epic: Basic Interactive Features

### FUNC-001: Implement Logout Confirmation Dialog
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
Before logging out, show a confirmation dialog asking "Are you sure you want to logout?"

#### 🎯 Acceptance Criteria
- [ ] Clicking logout shows confirmation prompt
- [ ] "Yes" logs user out and redirects to login
- [ ] "No" closes the dialog, user stays logged in
- [ ] Uses window.confirm() for simplicity (or Bootstrap modal)
- [ ] Works on header logout button

#### 📁 Files to Modify
```
src/app/shared/components/header/header.component.ts
```

#### 💡 Implementation (Simple)
```typescript
logout(): void {
  if (confirm('Are you sure you want to logout?')) {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
```

#### 📚 Topics Covered
- Event handling
- JavaScript confirm()
- Method implementation
- User confirmation patterns

#### 💼 Interview Questions
1. **What's the difference between confirm(), alert(), and prompt()?**
   - `alert()`: Shows message, OK only. `confirm()`: Shows message, OK/Cancel, returns boolean. `prompt()`: Shows input field, returns string or null.
   
2. **Why might you use a custom modal instead of confirm()?**
   - Custom styling, better UX, non-blocking, can include more content, consistent with app design, supports async operations.

---

### FUNC-002: Add "Remember Me" Functionality
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
When "Remember Me" is checked on login, save the email to localStorage and pre-fill it on next visit.

#### 🎯 Acceptance Criteria
- [ ] Email saved to localStorage when "Remember Me" checked
- [ ] Email auto-filled on login page load if saved
- [ ] "Remember Me" checkbox pre-checked if email exists
- [ ] Email cleared when unchecked and form submitted
- [ ] Works after browser close/reopen

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.ts
src/app/features/auth/pages/login/login.component.html
```

#### 💡 Key Code
```typescript
// On init
const savedEmail = localStorage.getItem('rememberedEmail');
if (savedEmail) {
  this.loginForm.patchValue({ email: savedEmail, rememberMe: true });
}

// On submit
if (this.loginForm.value.rememberMe) {
  localStorage.setItem('rememberedEmail', this.loginForm.value.email);
} else {
  localStorage.removeItem('rememberedEmail');
}
```

#### 📚 Topics Covered
- localStorage API
- Form patchValue()
- Component lifecycle (ngOnInit)
- Persist data in browser

#### 💼 Interview Questions
1. **What's the difference between localStorage and sessionStorage?**
   - `localStorage`: Persists until manually cleared, survives browser close. `sessionStorage`: Clears when tab/window closes.
   
2. **What are the limitations of localStorage?**
   - ~5MB limit, synchronous API (blocks main thread), strings only (need JSON.stringify), not secure for sensitive data, not available in private browsing (some browsers).
   
3. **What is patchValue() vs setValue() in Angular forms?**
   - `patchValue()`: Updates partial form values. `setValue()`: Requires all form control values, throws if missing any.

---

### FUNC-003: Implement Product Search Filter
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Add real-time search filtering to the products page. As user types, products filter instantly.

#### 🎯 Acceptance Criteria
- [ ] Search input on products page
- [ ] Products filter as user types (no button needed)
- [ ] Search is case-insensitive
- [ ] Searches product name and description
- [ ] Shows "No products found" when no matches
- [ ] Clear button to reset search
- [ ] Uses debounce (300ms) for performance

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Array filter() method
- String includes() method
- Case-insensitive search
- Debounce concept (RxJS debounceTime)
- Two-way binding [(ngModel)]

#### 💼 Interview Questions
1. **How does Array.filter() work?**
   - Creates a new array with elements that pass the test function. Does not mutate original array. Returns empty array if no matches.
   
2. **What is debouncing and why is it useful for search?**
   - Debouncing delays execution until user stops typing for specified time. Prevents excessive API calls/filtering while typing. Use debounceTime in RxJS.
   
3. **How do you make a case-insensitive search?**
   - Convert both search term and target to same case: `str.toLowerCase().includes(searchTerm.toLowerCase())`

---

### FUNC-004: Add Quantity Input Validation in Cart
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Validate quantity input in cart: minimum 1, maximum 99, numbers only.

#### 🎯 Acceptance Criteria
- [ ] Cannot enter quantity less than 1
- [ ] Cannot enter quantity more than 99
- [ ] Cannot enter non-numeric characters
- [ ] +/- buttons respect min/max limits
- [ ] Shows validation error message if invalid
- [ ] Input field highlights red if invalid

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Input validation
- Number parsing (parseInt)
- Conditional CSS classes
- Form validation patterns

#### 💼 Interview Questions
1. **How do you validate user input in Angular?**
   - Template-driven: HTML5 attributes + ngModel validation. Reactive: Validators in FormControl. Custom: Create ValidatorFn.
   
2. **What's parseInt vs Number() in JavaScript?**
   - `parseInt()`: Parses until non-digit, returns NaN for non-numeric. `Number()`: Converts entire string, stricter. Use Number() for stricter validation.

---

### FUNC-005: Implement "Copy to Clipboard" for Order ID
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Add a copy button next to order IDs that copies the ID to clipboard with visual feedback.

#### 🎯 Acceptance Criteria
- [ ] Copy icon/button next to each order ID
- [ ] Clicking copies order ID to clipboard
- [ ] Shows "Copied!" tooltip/message briefly
- [ ] Icon changes to checkmark after copy
- [ ] Works on all browsers

#### 📁 Files to Modify
```
src/app/features/orders/pages/orders-list/orders-list.component.ts
src/app/features/orders/pages/orders-list/orders-list.component.html
```

#### 💡 Implementation
```typescript
copyOrderId(orderId: string): void {
  navigator.clipboard.writeText(orderId);
  // Show feedback
}
```

#### 📚 Topics Covered
- Clipboard API
- User feedback patterns
- Async operations basics

#### 💼 Interview Questions
1. **What is the Clipboard API?**
   - Modern API for reading/writing clipboard: `navigator.clipboard.writeText()`, `navigator.clipboard.readText()`. Requires secure context (HTTPS) and may need user permission.
   
2. **How do you provide feedback for user actions?**
   - Toast notifications, inline messages, button state changes, loading indicators, sound/haptic feedback (mobile).

---

### FUNC-006: Add "Clear Cart" Functionality
**Story Points:** 1 | **Priority:** Medium | **Time:** 30 minutes

#### 📝 Description
Add a "Clear Cart" button that removes all items from the cart with confirmation.

#### 🎯 Acceptance Criteria
- [ ] "Clear Cart" button visible when cart has items
- [ ] Shows confirmation before clearing
- [ ] All items removed when confirmed
- [ ] Shows success notification
- [ ] Button hidden when cart is empty

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Array manipulation (empty array)
- Confirmation dialogs
- Conditional button display
- Notification service usage

#### 💼 Interview Questions
1. **What's the difference between array = [] and array.length = 0?**
   - `array = []` creates new array (other references still point to old). `array.length = 0` empties in-place (all references see empty array).
   
2. **How do you conditionally show/hide elements in Angular?**
   - `@if (condition)` (new syntax), `*ngIf="condition"` (directive), `[hidden]="!condition"` (CSS), `ngClass`/`ngStyle` for visibility.

---

### FUNC-007: Implement Sort Products by Price
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
Add dropdown to sort products by: Price Low to High, Price High to Low, Name A-Z, Newest.

#### 🎯 Acceptance Criteria
- [ ] Sort dropdown on products page
- [ ] Four sort options available
- [ ] Products re-order immediately on selection
- [ ] Selected sort option visually indicated
- [ ] Default sort: Featured/Newest

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 💡 Key Code
```typescript
sortProducts(sortBy: string): void {
  switch (sortBy) {
    case 'price-asc':
      this.products.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      this.products.sort((a, b) => b.price - a.price);
      break;
  }
}
```

#### 📚 Topics Covered
- Array sort() method
- Compare functions
- Switch statements
- Select/dropdown handling

#### 💼 Interview Questions
1. **How does Array.sort() work?**
   - Sorts array in place, returns reference to same array. Default: converts to strings and sorts alphabetically. Provide compare function for numbers: `(a, b) => a - b`
   
2. **Does sort() mutate the original array?**
   - Yes! Use `[...array].sort()` or `array.slice().sort()` to avoid mutation.

---

### FUNC-008: Add Form Validation Error Messages
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Add clear, helpful validation error messages for login and register forms.

#### 🎯 Acceptance Criteria
- [ ] Email: "Email is required", "Please enter a valid email"
- [ ] Password: "Password is required", "Password must be at least 8 characters"
- [ ] Confirm Password: "Passwords do not match"
- [ ] Error appears below field, not in alert
- [ ] Error text is red with icon
- [ ] Errors clear when corrected

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.html
src/app/features/auth/pages/register/register.component.html
```

#### 📚 Topics Covered
- Reactive forms validation
- Error display patterns
- FormControl errors property
- Conditional rendering

#### 💼 Interview Questions
1. **What validators does Angular provide?**
   - Validators.required, .email, .minLength(), .maxLength(), .pattern(), .min(), .max(), .requiredTrue, .nullValidator
   
2. **How do you access form control errors in template?**
   - `formControl.errors?.['required']` or `formControl.hasError('required')`. Check `formControl.touched` to show only after interaction.
   
3. **What's the difference between touched, dirty, and pristine?**
   - **touched**: User has focused and blurred the input. **dirty**: User has changed the value. **pristine**: Value hasn't been changed (opposite of dirty).

---

# 🟧 LEVEL 3: Medium Features

> **Goal:** Build complete features with multiple files and concepts

---

## Epic: Auth & Security Features

### AUTH-001: Implement JWT Token Storage & Management
**Story Points:** 3 | **Priority:** Critical | **Time:** 2-3 hours

#### 📝 Description
Properly store and manage JWT tokens using secure practices. Understand token structure and lifecycle.

#### 🎯 Acceptance Criteria
- [ ] Token stored in localStorage after login
- [ ] Token included in all API requests (Authorization header)
- [ ] Token read correctly on app initialization
- [ ] Token cleared on logout
- [ ] Understand JWT structure (header.payload.signature)
- [ ] Can decode and inspect token payload

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/core/interceptors/http-auth.interceptor.ts
```

#### 📚 Topics Covered
- JWT token structure
- Bearer token pattern
- HTTP Authorization header
- localStorage for tokens
- HTTP Interceptors

#### 🔐 Security Notes
- In real apps, consider httpOnly cookies for sensitive tokens
- Never store sensitive data in JWT payload
- Tokens should have expiration

#### 💼 Interview Questions
1. **What is a JWT token and what are its parts?**
   - JSON Web Token with 3 parts separated by dots: Header (algorithm, type), Payload (claims, user data), Signature (verification). Base64 encoded.
   
2. **What is a Bearer token?**
   - Token type in Authorization header: `Authorization: Bearer <token>`. Client "bears" the token to prove identity. Server validates token on each request.
   
3. **What are access tokens vs refresh tokens?**
   - **Access token**: Short-lived (minutes/hours), sent with each request, grants access to resources.
   - **Refresh token**: Long-lived (days/weeks), used only to get new access tokens, stored more securely.
   
4. **Why shouldn't you store sensitive data in JWT payload?**
   - JWT payload is only Base64 encoded, not encrypted. Anyone with the token can decode and read the payload. Store only non-sensitive identifiers.
   
5. **What is the purpose of an HTTP Interceptor?**
   - Intercept all HTTP requests/responses. Use for adding auth headers, logging, error handling, caching, showing loading indicators. Registered as providers.

---

### AUTH-002: Implement Token Expiration Check
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Check if JWT token is expired before making API calls. Redirect to login if expired.

#### 🎯 Acceptance Criteria
- [ ] Decode token to read exp (expiration) claim
- [ ] Check expiration on app init and before API calls
- [ ] Redirect to login if token expired
- [ ] Show "Session expired" message on redirect
- [ ] Token expiration time checked correctly (Unix timestamp)

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/core/guards/auth.guard.ts
```

#### 💡 Key Code
```typescript
isTokenExpired(): boolean {
  const token = this.getToken();
  if (!token) return true;
  
  const payload = JSON.parse(atob(token.split('.')[1]));
  const exp = payload.exp * 1000; // Convert to milliseconds
  return Date.now() >= exp;
}
```

#### 📚 Topics Covered
- JWT payload decoding (atob)
- Unix timestamps
- Token expiration concept
- Route guards

#### 💼 Interview Questions
1. **How do you decode a JWT in JavaScript?**
   - Split by '.', get middle part (payload), use atob() to decode Base64, JSON.parse the result. Or use jwt-decode library.
   
2. **What is a Unix timestamp?**
   - Seconds since January 1, 1970 (Unix epoch). JWT exp claim is Unix timestamp. JavaScript Date uses milliseconds, so multiply by 1000.
   
3. **How do you implement a route guard in Angular?**
   - Create function returning boolean/UrlTree or Observable/Promise of same. Register in route config with canActivate. Inject services using inject().

---

### AUTH-003: Implement Auto-Logout on Token Expiry
**Story Points:** 2 | **Priority:** Medium | **Time:** 1-2 hours

#### 📝 Description
Automatically log user out when their token expires, even while they're using the app.

#### 🎯 Acceptance Criteria
- [ ] Timer set based on token expiration
- [ ] Auto-logout occurs when timer expires
- [ ] User redirected to login
- [ ] "Session expired" notification shown
- [ ] Timer cleared on manual logout

#### 📚 Topics Covered
- setTimeout/setInterval
- Token expiration calculation
- Cleanup on destroy
- User notification

#### 💼 Interview Questions
1. **How do you schedule a function to run at a specific time?**
   - Calculate delay: `expiryTime - Date.now()`, use `setTimeout(logout, delay)`. Store timeout ID to cancel if needed.
   
2. **Why is it important to clear timers?**
   - Prevent memory leaks, stop unwanted execution after user leaves/logs out. Use `clearTimeout(timeoutId)` in ngOnDestroy or logout.

---

### AUTH-004: Implement Role-Based Route Guards
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Protect admin routes so only users with 'admin' role can access them.

#### 🎯 Acceptance Criteria
- [ ] Admin routes protected by roleGuard
- [ ] Non-admin users redirected to dashboard
- [ ] Error message shown for unauthorized access
- [ ] Role information stored in token/user state
- [ ] Multiple roles support if needed

#### 📁 Files to Create/Modify
```
src/app/core/guards/role.guard.ts (new)
src/app/app.routes.ts
```

#### 💡 Key Code
```typescript
export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const userRole = authService.getUserRole();
    
    if (allowedRoles.includes(userRole)) {
      return true;
    }
    
    return router.parseUrl('/dashboard');
  };
};
```

#### 📚 Topics Covered
- Functional guards
- Role-based access control (RBAC)
- Guard factories with parameters
- Authorization vs Authentication

#### 💼 Interview Questions
1. **What's the difference between authentication and authorization?**
   - **Authentication**: Verifying identity (who are you?). **Authorization**: Checking permissions (what can you do?). Auth guard = authentication, Role guard = authorization.
   
2. **What are functional guards in Angular?**
   - Guards defined as functions instead of classes (Angular 14+). Simpler, use inject() for DI, can be factory functions for parameters.
   
3. **How do you implement role-based access control?**
   - Store role in JWT/user state, create guard that checks role against allowed roles, apply guard to routes, also check role in UI for showing/hiding elements.

---

## Epic: Product Features

### PROD-001: Build Product Detail Page
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create a complete product detail page showing full product information with add-to-cart capability.

#### 🎯 Acceptance Criteria
- [ ] Route: /products/:id works
- [ ] Displays product image (large)
- [ ] Shows product name, price, description
- [ ] Shows original price with discount
- [ ] Star rating display
- [ ] Quantity selector
- [ ] "Add to Cart" button
- [ ] "Back to Products" link
- [ ] Loading state while fetching
- [ ] Error state if product not found
- [ ] Category and tags displayed

#### 📁 Files to Modify
```
src/app/features/products/pages/product-detail/product-detail.component.ts
src/app/features/products/pages/product-detail/product-detail.component.html
src/app/features/products/pages/product-detail/product-detail.component.scss
```

#### 📚 Topics Covered
- Route parameters (ActivatedRoute)
- ParamMap and params
- API call with ID
- Component state management
- Error handling

#### 💼 Interview Questions
1. **How do you read route parameters in Angular?**
   - Inject ActivatedRoute, use `route.paramMap.subscribe()` or `route.snapshot.paramMap.get('id')`. ParamMap for reactivity, snapshot for one-time read.
   
2. **What's the difference between paramMap and queryParamMap?**
   - **paramMap**: URL path parameters (/products/:id). **queryParamMap**: Query string parameters (?sort=price&order=asc).
   
3. **How do you handle loading and error states?**
   - Boolean flags (isLoading, hasError), show appropriate UI. Set isLoading true before request, false in subscribe complete/error. Show spinner/skeleton while loading.

---

### PROD-002: Implement Category Filter on Products Page
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Add category filter sidebar/dropdown to filter products by category.

#### 🎯 Acceptance Criteria
- [ ] Categories fetched from mock API
- [ ] Category list displayed as filter options
- [ ] Clicking category filters products
- [ ] "All Categories" option shows all products
- [ ] Active category highlighted
- [ ] Product count shown per category
- [ ] Filter works with search (combined)

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Multiple API calls
- Array filtering with multiple criteria
- UI state management
- Combined filters

#### 💼 Interview Questions
1. **How do you combine multiple filters?**
   - Chain filter conditions: `products.filter(p => matchesCategory(p) && matchesSearch(p))`. Or use separate filtered arrays with intersection.
   
2. **How do you maintain filter state across navigation?**
   - Query parameters (shareable URL), service with BehaviorSubject, route resolvers, or state management library.

---

### PROD-003: Implement Add to Cart from Product List
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Add "Add to Cart" button to each product card on the products list page.

#### 🎯 Acceptance Criteria
- [ ] "Add to Cart" button on each product card
- [ ] Button makes API call to cart endpoint
- [ ] Success notification shown
- [ ] Cart count in header updates
- [ ] Loading state on button while adding
- [ ] Error handling if add fails

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
src/app/shared/components/header/header.component.ts (update cart count)
```

#### 📚 Topics Covered
- HTTP POST request
- Component communication (update header)
- Loading state per item
- Success/error notifications

#### 💼 Interview Questions
1. **How do components communicate in Angular?**
   - **Parent → Child**: @Input(). **Child → Parent**: @Output() + EventEmitter. **Siblings/Unrelated**: Shared service with BehaviorSubject/Signal.
   
2. **What is a BehaviorSubject?**
   - RxJS Subject that stores current value and emits it to new subscribers immediately. Use for state that needs to be shared and has an initial value.

---

## Epic: Cart & Checkout Features

### CART-001: Implement Cart Total Calculation
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Calculate cart totals: subtotal, VAT (20%), shipping, and grand total.

#### 🎯 Acceptance Criteria
- [ ] Subtotal: sum of (price × quantity) for all items
- [ ] VAT: 20% of subtotal
- [ ] Shipping: £5.99 or FREE over £50
- [ ] Grand Total: subtotal + VAT + shipping
- [ ] Totals update when quantity changes
- [ ] All amounts formatted as GBP currency

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Array reduce() method
- Currency formatting (CurrencyPipe)
- Conditional logic (free shipping)
- Real-time calculations

#### 💼 Interview Questions
1. **How does Array.reduce() work?**
   - Reduces array to single value. Parameters: accumulator (running total), currentValue, index, array. Must return new accumulator value. Provide initial value as second argument.
   
2. **How do you use the CurrencyPipe?**
   - `{{ value | currency:'GBP':'symbol':'1.2-2' }}` - currency code, display (symbol/code/name), digit format (minInt.minFrac-maxFrac).
   
3. **Should calculations be in the template or component?**
   - Component for complex logic, template for simple transformations. Use getters or computed signals for derived values. Avoid heavy calculations in templates.

---

### CART-002: Implement Promo Code Functionality
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Allow users to enter promo codes for discounts on their cart.

#### 🎯 Acceptance Criteria
- [ ] Promo code input field with "Apply" button
- [ ] Valid codes: SAVE10 (10%), SAVE20 (20%), WELCOME (15%)
- [ ] Error shown for invalid codes
- [ ] Discount displayed in order summary
- [ ] Only one promo code at a time
- [ ] "Remove" option for applied code
- [ ] Grand total reflects discount

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- String validation
- Object lookup (code → discount mapping)
- State management (applied promo)
- User feedback

#### 💼 Interview Questions
1. **How do you validate a promo code?**
   - Create object mapping codes to discounts. Check if entered code exists in object. If yes, apply discount. If no, show error.
   
2. **What data structure would you use for promo codes?**
   - Object/Map: `{ 'SAVE10': 0.10, 'SAVE20': 0.20 }`. Could also use array of objects if codes have more properties (expiry, conditions).

---

### CHECKOUT-001: Build Checkout Page - Shipping Form
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create checkout page with shipping address form using reactive forms.

#### 🎯 Acceptance Criteria
- [ ] Form fields: First Name, Last Name, Address Line 1, Address Line 2, City, Postcode, Phone
- [ ] All fields except Address Line 2 required
- [ ] Postcode validation (UK format)
- [ ] Phone validation (UK format)
- [ ] Error messages for each field
- [ ] "Continue to Payment" button
- [ ] Order summary sidebar showing cart items

#### 📁 Files to Modify
```
src/app/features/checkout/pages/checkout/checkout.component.ts
src/app/features/checkout/pages/checkout/checkout.component.html
src/app/features/checkout/pages/checkout/checkout.component.scss
```

#### 📚 Topics Covered
- Reactive Forms (FormGroup, FormControl)
- Custom validators
- Form submission
- Multi-step form concept

#### 💼 Interview Questions
1. **What are Reactive Forms vs Template-driven Forms?**
   - **Reactive**: Form model in component, explicit FormGroup/FormControl, more control, better for complex forms, easier testing.
   - **Template-driven**: Form model via directives (ngModel), simpler for basic forms, less code.
   
2. **How do you create a custom validator?**
   - Function that takes AbstractControl, returns ValidationErrors object or null. Example: `(control) => control.value.includes('x') ? { containsX: true } : null`
   
3. **What is FormBuilder?**
   - Service that provides shorthand for creating FormGroup/FormArray/FormControl. Inject and use: `this.fb.group({ name: ['', Validators.required] })`

---

## Epic: Orders Features

### ORDER-001: Build Orders List Page
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Display user's order history with status, date, total, and view details link.

#### 🎯 Acceptance Criteria
- [ ] Table showing: Order ID, Date, Items count, Total, Status
- [ ] Status shown with colored badges
- [ ] "View Details" link to order detail page
- [ ] Orders sorted by date (newest first)
- [ ] Loading state while fetching
- [ ] Empty state if no orders
- [ ] Responsive table design

#### 📁 Files to Modify
```
src/app/features/orders/pages/orders-list/orders-list.component.ts
src/app/features/orders/pages/orders-list/orders-list.component.html
src/app/features/orders/pages/orders-list/orders-list.component.scss
```

#### 📚 Topics Covered
- HTTP GET request
- Table rendering
- Date formatting (DatePipe)
- Loading and empty states

#### 💼 Interview Questions
1. **How do you format dates in Angular?**
   - DatePipe: `{{ date | date:'dd MMM yyyy' }}` or `{{ date | date:'medium' }}`. In TypeScript: `formatDate(date, format, locale)`.
   
2. **How do you handle empty states?**
   - Check array length: `@if (items.length === 0)`. Show meaningful message and optionally a call-to-action (e.g., "Browse Products" button).

---

### ORDER-002: Build Order Detail Page
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Display complete order details including items, addresses, status timeline.

#### 🎯 Acceptance Criteria
- [ ] Route: /orders/:id works
- [ ] Shows order ID, date, status
- [ ] Status timeline/tracker
- [ ] List of ordered items with images, names, quantities, prices
- [ ] Shipping address displayed
- [ ] Order totals (subtotal, VAT, shipping, total)
- [ ] "Back to Orders" link
- [ ] Error state if order not found

#### 📁 Files to Modify
```
src/app/features/orders/pages/order-detail/order-detail.component.ts
src/app/features/orders/pages/order-detail/order-detail.component.html
src/app/features/orders/pages/order-detail/order-detail.component.scss
```

#### 📚 Topics Covered
- Route parameters
- Complex data display
- Status tracker component
- Nested data structures

#### 💼 Interview Questions
1. **How do you access nested data safely in templates?**
   - Optional chaining: `{{ order?.address?.city }}`. Or @if to check existence before rendering. Prevents "cannot read property of undefined" errors.
   
2. **What is the async pipe?**
   - Subscribes to Observable/Promise in template, returns emitted value. Automatically unsubscribes on destroy. `{{ data$ | async }}`

---

# 🟥 LEVEL 4: Advanced Features

> **Goal:** Complex features requiring deep Angular knowledge

---

## Epic: State Management

### STATE-001: Implement Cart State with Angular Signals
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Migrate cart state management to Angular Signals for reactive, efficient updates.

#### 🎯 Acceptance Criteria
- [ ] Create CartService with signal-based state
- [ ] Cart items stored in signal
- [ ] Computed signals for totals (subtotal, VAT, total)
- [ ] Cart count signal for header
- [ ] Effects for localStorage persistence
- [ ] All cart operations update signals
- [ ] Components react to signal changes

#### 📁 Files to Create/Modify
```
src/app/core/services/cart.service.ts (refactor)
```

#### 💡 Key Concepts
```typescript
private cartItems = signal<CartItem[]>([]);

readonly itemCount = computed(() => 
  this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
);

readonly subtotal = computed(() =>
  this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0)
);
```

#### 📚 Topics Covered
- Angular Signals (signal, computed, effect)
- Reactive state management
- Computed values
- Signal effects

#### 💼 Interview Questions
1. **What are Angular Signals and why were they introduced?**
   - Signals are reactive primitives for state management, introduced in Angular 16+. Benefits: simpler than RxJS for state, fine-grained reactivity, better change detection, no subscriptions to manage.
   
2. **What's the difference between signal(), computed(), and effect()?**
   - `signal()`: Writable reactive value. `computed()`: Read-only derived value, auto-updates when dependencies change. `effect()`: Side effect that runs when dependencies change.
   
3. **When would you use Signals vs RxJS?**
   - **Signals**: Simple state, synchronous values, UI state. **RxJS**: Complex async flows, HTTP requests, events, operators like debounce/switchMap.
   
4. **How do you update a signal?**
   - `mySignal.set(value)` replaces value. `mySignal.update(prev => newValue)` updates based on previous value. Never mutate signal value directly.
   
5. **What is effect() used for?**
   - Running side effects when signals change: logging, localStorage sync, analytics. Runs in injection context, tracks signal dependencies automatically.

---

### STATE-002: Implement Auth State with Signals
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Convert AuthService to use signals for reactive auth state across the app.

#### 🎯 Acceptance Criteria
- [ ] currentUser signal for logged-in user
- [ ] isAuthenticated computed signal
- [ ] Components update reactively on login/logout
- [ ] Header shows/hides based on auth signal
- [ ] Token storage synced with signal state

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/shared/components/header/header.component.ts
```

#### 📚 Topics Covered
- Signal-based services
- Reactive auth state
- Component reactivity
- Service refactoring

#### 💼 Interview Questions
1. **How do components react to signal changes?**
   - Read signal in template `{{ mySignal() }}` or in component. Angular's change detection automatically updates when signal changes. No subscription needed.
   
2. **How do you share state across components with signals?**
   - Create service with signals, inject service in components, read/write signals. Components automatically update when signals change.

---

## Epic: Performance Optimization

### PERF-001: Implement OnPush Change Detection
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Optimize performance by using OnPush change detection strategy on key components.

#### 🎯 Acceptance Criteria
- [ ] Product list component uses OnPush
- [ ] Product card component uses OnPush
- [ ] Cart component uses OnPush
- [ ] All components still work correctly
- [ ] Understand when change detection runs

#### 📁 Files to Modify
```
Multiple component .ts files
```

#### 💡 Implementation
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ...
})
```

#### 📚 Topics Covered
- Change detection strategies
- OnPush vs Default
- Immutable data patterns
- Performance optimization

#### 💼 Interview Questions
1. **What is OnPush change detection?**
   - Strategy where Angular only checks component when: @Input reference changes, event from component/child, async pipe emits, or manually triggered. More performant than Default.
   
2. **What are the requirements for OnPush to work correctly?**
   - Immutable data (new references for changes), use async pipe for Observables, avoid calling methods in templates that return new references each time.
   
3. **How do you manually trigger change detection?**
   - Inject ChangeDetectorRef, call `cdr.markForCheck()` (marks for next cycle) or `cdr.detectChanges()` (immediate check).

---

### PERF-002: Implement Virtual Scrolling for Products
**Story Points:** 4 | **Priority:** Low | **Time:** 3-4 hours

#### 📝 Description
Implement virtual scrolling for product list to handle large datasets efficiently.

#### 🎯 Acceptance Criteria
- [ ] Install @angular/cdk
- [ ] Implement cdk-virtual-scroll-viewport
- [ ] Only visible items rendered in DOM
- [ ] Smooth scrolling with hundreds of items
- [ ] Maintains product card functionality

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Angular CDK
- Virtual scrolling
- DOM optimization
- Performance testing

#### 💼 Interview Questions
1. **What is virtual scrolling?**
   - Technique that renders only visible items in a list. As user scrolls, items are recycled and content updated. Dramatically reduces DOM nodes for large lists.
   
2. **When should you use virtual scrolling?**
   - Large lists (100+ items), each item has complex rendering, performance issues with regular lists. Trade-offs: more complex implementation, fixed item height often required.

---

## Epic: Testing

### TEST-001: Write Unit Tests for AuthService
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Write comprehensive unit tests for AuthService including login, logout, token management.

#### 🎯 Acceptance Criteria
- [ ] Test login success scenario
- [ ] Test login failure scenario
- [ ] Test logout clears token
- [ ] Test isAuthenticated returns correct value
- [ ] Test token storage/retrieval
- [ ] Mock HttpClient properly
- [ ] 80%+ code coverage for service

#### 📁 Files to Modify
```
src/app/core/services/auth.service.spec.ts
```

#### 📚 Topics Covered
- Jasmine testing framework
- TestBed configuration
- HttpClientTestingModule
- Spy objects
- expect() assertions

#### 💼 Interview Questions
1. **How do you test services that use HttpClient?**
   - Import HttpClientTestingModule, inject HttpTestingController. Use `expectOne()` to catch requests, `flush()` to provide mock response.
   
2. **What is TestBed?**
   - Angular's testing utility that creates a testing module. Configure providers, imports, declarations. Use `TestBed.inject()` to get service instances.
   
3. **What are spies in Jasmine?**
   - Mock functions that track calls and can return fake values. `spyOn(service, 'method').and.returnValue(value)`. Check calls with `toHaveBeenCalledWith()`.
   
4. **What's the difference between beforeEach and beforeAll?**
   - `beforeEach`: Runs before each test (it block). `beforeAll`: Runs once before all tests in describe. Use beforeEach for clean state each test.

---

### TEST-002: Write Component Tests for ProductList
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Write tests for ProductListComponent including rendering, filtering, and interaction.

#### 🎯 Acceptance Criteria
- [ ] Test products render correctly
- [ ] Test loading state displays
- [ ] Test search filtering works
- [ ] Test category filtering works
- [ ] Test add to cart button works
- [ ] Test error state displays

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.spec.ts
```

#### 📚 Topics Covered
- Component testing
- ComponentFixture
- DOM queries
- Event triggering
- Async testing

#### 💼 Interview Questions
1. **How do you test component DOM elements?**
   - Use `fixture.debugElement.query(By.css('selector'))` or `fixture.nativeElement.querySelector()`. Call `fixture.detectChanges()` after data changes.
   
2. **How do you test click events?**
   - Get button element, call `button.triggerEventHandler('click', null)` or `button.nativeElement.click()`. Then `fixture.detectChanges()` and check results.
   
3. **What is fakeAsync?**
   - Testing utility that controls time. Use `tick()` to advance virtual time. Required for testing setTimeout, setInterval, Promises. Alternative to done() callback.

---

### TEST-003: Setup Cypress E2E Testing
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Setup Cypress for end-to-end testing and write first login flow test.

#### 🎯 Acceptance Criteria
- [ ] Cypress installed and configured
- [ ] Base URL configured
- [ ] Login flow E2E test written
- [ ] Test: visit login, fill form, submit, verify dashboard
- [ ] Custom commands for common actions
- [ ] Tests pass in headless mode

#### 📁 Files to Create
```
cypress/e2e/login.cy.ts
cypress/support/commands.ts
cypress.config.ts
```

#### 📚 Topics Covered
- Cypress installation
- E2E test writing
- Selectors and assertions
- Custom commands
- Test organization

#### 💼 Interview Questions
1. **What's the difference between unit tests and E2E tests?**
   - **Unit**: Test isolated units (functions, components), mock dependencies, fast, many tests. **E2E**: Test full application flow, real browser, slower, fewer critical path tests.
   
2. **Why Cypress over Protractor/Selenium?**
   - Runs in browser (not WebDriver), automatic waiting, time-travel debugging, real-time reloads, better DX, screenshots/videos built-in.
   
3. **What are Cypress custom commands?**
   - Reusable commands added to `cy` object. Example: `cy.login(email, password)`. Defined in commands.ts, reduce duplication across tests.

---

## Epic: Advanced Forms

### FORM-001: Implement Multi-Step Checkout Form
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create a multi-step checkout form: Shipping → Payment → Review → Confirm.

#### 🎯 Acceptance Criteria
- [ ] Step indicator showing current step
- [ ] Can navigate back to previous steps
- [ ] Data preserved when navigating
- [ ] Validation per step before proceeding
- [ ] Final review step shows all info
- [ ] Submit places order
- [ ] Success page after order placed

#### 📁 Files to Modify
```
src/app/features/checkout/pages/checkout/checkout.component.ts
src/app/features/checkout/pages/checkout/checkout.component.html
```

#### 📚 Topics Covered
- Multi-step form pattern
- Form groups
- State management between steps
- Form validation

#### 💼 Interview Questions
1. **How do you implement a multi-step form?**
   - Single FormGroup with nested groups per step, or separate forms with shared service. Track currentStep, validate each before proceeding, show/hide sections.
   
2. **How do you validate only part of a form?**
   - Use nested FormGroups. Check `formGroup.get('stepName').valid`. Or use custom validator on specific step fields only.
   
3. **How do you preserve form data across steps?**
   - Single FormGroup maintains state. Or use service with BehaviorSubject/Signal to store step data. localStorage for persistence across page refresh.

---

### FORM-002: Implement Custom Form Validators
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Create custom validators for UK postcode, UK phone number, and password strength.

#### 🎯 Acceptance Criteria
- [ ] UK Postcode validator (pattern: AA9A 9AA, A9A 9AA, etc.)
- [ ] UK Phone validator (pattern: +44 or 07xxx)
- [ ] Password strength validator (8+ chars, 1 upper, 1 number, 1 special)
- [ ] Validators reusable across forms
- [ ] Custom error messages per validator

#### 📁 Files to Create
```
src/app/shared/validators/uk-postcode.validator.ts
src/app/shared/validators/uk-phone.validator.ts
src/app/shared/validators/password-strength.validator.ts
```

#### 📚 Topics Covered
- Custom ValidatorFn
- Regex patterns
- Reusable validators
- Error message handling

#### 💼 Interview Questions
1. **How do you create a custom validator?**
   - Create function: `export function myValidator(): ValidatorFn { return (control: AbstractControl) => { return control.value === 'invalid' ? { myError: true } : null; }; }`
   
2. **What's the difference between sync and async validators?**
   - **Sync**: Returns ValidationErrors or null immediately. **Async**: Returns Promise/Observable of same, used for server-side validation (e.g., checking username availability).
   
3. **How do you create cross-field validators?**
   - Apply validator to FormGroup (not FormControl). Access multiple controls via `group.get('field1')` and `group.get('field2')`. Compare values.

---

## Epic: RxJS Mastery

### RXJS-001: Implement Debounced Search with RxJS
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Refactor product search to use RxJS operators for proper debouncing and cancellation.

#### 🎯 Acceptance Criteria
- [ ] Search input uses Subject
- [ ] debounceTime(300) applied
- [ ] distinctUntilChanged prevents duplicate searches
- [ ] switchMap cancels previous requests
- [ ] takeUntilDestroyed for cleanup
- [ ] Loading indicator during search

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
```

#### 💡 Key Pattern
```typescript
private searchSubject = new Subject<string>();
private destroyRef = inject(DestroyRef);

ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.productService.search(term)),
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(results => this.products = results);
}
```

#### 📚 Topics Covered
- Subject
- debounceTime
- distinctUntilChanged
- switchMap
- takeUntilDestroyed pattern

#### 💼 Interview Questions
1. **What is the difference between Subject, BehaviorSubject, and ReplaySubject?**
   - **Subject**: No initial value, only emits to current subscribers. **BehaviorSubject**: Has initial value, new subscribers get last value. **ReplaySubject**: Replays specified number of values to new subscribers.
   
2. **Explain debounceTime vs throttleTime:**
   - **debounceTime**: Waits for silence (no emissions for X ms), then emits last value. **throttleTime**: Emits first value, ignores subsequent for X ms. Debounce for search, throttle for scroll.
   
3. **What is switchMap and when do you use it?**
   - Maps to inner Observable, cancels previous inner on new outer emission. Use for search (cancel old searches), auto-save (cancel pending saves), type-ahead.
   
4. **How do you prevent memory leaks with Observables?**
   - Unsubscribe in ngOnDestroy, use takeUntilDestroyed(), use async pipe (auto-unsubscribes), use take(1) for one-time subscriptions.
   
5. **What is takeUntilDestroyed?**
   - Angular utility that completes Observable when component destroys. Cleaner than takeUntil with destroy Subject. Requires injection context or pass DestroyRef.

---

# 📊 Summary Statistics

| Level | Tasks | Story Points | Hours |
|-------|-------|--------------|-------|
| Level 0: Setup & KT | 6 | 15 | 10-14h |
| Level 1: CSS/HTML | 8 | 11 | 6-7h |
| Level 2: Small Functionality | 8 | 14 | 7-9h |
| Level 3: Medium Features | 12 | 43 | 28-36h |
| Level 4: Advanced | 11 | 42 | 28-36h |
| **TOTAL** | **55** | **145** | **95-120h** |

---

## 🎓 Recommended Learning Path

### Week 1: Foundation (Level 0)
- Complete all Setup & KT tasks
- **Focus:** Understanding project structure, Angular basics, new features

### Week 2: Visual Skills (Level 1)
- Complete all CSS/HTML tasks
- **Focus:** Styling, responsiveness, Bootstrap, accessibility

### Week 3: Basic Interactivity (Level 2)
- Complete all Functionality tasks
- **Focus:** Event handling, localStorage, validation, DOM manipulation

### Week 4-5: Features (Level 3)
- Complete Medium Features tasks
- **Focus:** HTTP, forms, routing, authentication, authorization

### Week 6-7: Mastery (Level 4)
- Complete Advanced tasks
- **Focus:** Signals, testing, performance, RxJS

---

## 🔑 Complete Interview Preparation Guide

### Junior Angular Developer (0-2 years)
After completing Levels 0-2, you should confidently answer:
- Component basics, data binding, lifecycle hooks
- HTML/CSS styling, Bootstrap, responsive design
- Simple event handling, localStorage
- Basic Angular CLI commands

### Mid-Level Angular Developer (2-4 years)
After completing Level 3, you should confidently answer:
- HTTP client, interceptors, error handling
- Reactive forms, validation, custom validators
- Routing, guards, lazy loading
- JWT authentication, authorization
- Services, dependency injection

### Senior Angular Developer (4+ years)
After completing Level 4, you should confidently answer:
- Angular Signals vs RxJS
- Change detection strategies, OnPush
- Performance optimization techniques
- Testing strategies (unit, component, E2E)
- Advanced RxJS patterns
- State management patterns

---

## 📝 Notes for Team Leads

1. **All images are local SVG placeholders** - No external API calls for images
2. **Mock API delay is minimal (100ms)** - Fast loading experience
3. **No DevOps tasks included** - Frontend focus only
4. **JWT/Auth topics are covered** in Level 3-4
5. **Each task includes interview questions** for comprehensive preparation
6. **Tasks can be done in order or cherry-picked** based on skill gaps

---

**Document Version:** 4.0 - Enhanced with Interview Questions  
**Last Updated:** January 2025  
**Total Interview Questions:** 100+  
**Maintained By:** TechCorp Development Team
# TechCorp Enterprise Portal - JIRA Tasks

## 📋 Project Overview

**Project:** TechCorp Enterprise Portal (Angular 21)  
**Purpose:** Job-ready Angular training project with progressive complexity  
**Total Tasks:** 44 | **Total Story Points:** 114

> ✅ **CURRENT STATE:** The application is **50% complete and fully working**.  
> Core features implemented: Login/Register, Dashboard, Products List, Cart, Header/Footer, Mock API.

> 📝 **THESE TASKS:** The tasks below represent the **remaining 50%** of work to complete the application.  
> They are organized progressively for learning - start with Level 0 (KT) before coding.

> **Note:** All tasks use LOCAL mock data only. No external APIs or images.  
> **Future:** Figma designs will be attached to tickets for UI clarity.

---

## 🎯 Task Organization Philosophy

Tasks are organized in **progressive difficulty levels**:

| Level | Focus | For Who | Story Points |
|-------|-------|---------|--------------|
| **Level 0** | Setup & KT (Knowledge Transfer) | Complete Beginners | 12 |
| **Level 1** | HTML/CSS Styling Tasks | Beginners | 10 |
| **Level 2** | Small Functionality | Beginners+ | 14 |
| **Level 3** | Medium Features | Intermediate | 42 |
| **Level 4** | Advanced Features | Advanced | 36 |

---

# 🟦 LEVEL 0: Setup & Knowledge Transfer

> **Goal:** Understand the project, tools, and folder structure before coding

---

## Epic: Project Onboarding

### SETUP-001: Development Environment Setup
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Set up your local development environment with all required tools to run the TechCorp Angular application.

#### 🎯 Acceptance Criteria
- [ ] Node.js v20+ installed and verified (`node -v`)
- [ ] npm v10+ installed and verified (`npm -v`)
- [ ] Angular CLI v21+ installed globally (`npm i -g @angular/cli`)
- [ ] VS Code installed with recommended extensions
- [ ] Git installed and configured
- [ ] Project cloned and dependencies installed (`npm install`)
- [ ] Application runs successfully (`ng serve`)
- [ ] Can access http://localhost:4200 in browser

#### 📚 Topics Covered
- Node.js and npm basics
- Angular CLI installation
- Package management with npm
- Git basics

#### 🎓 Learning Objectives
- Understand why specific Node/npm versions are required
- Learn Angular CLI global installation
- Understand npm package.json and node_modules

#### 📎 Resources
- [Angular Setup Guide](https://angular.io/guide/setup-local)
- [Node.js Download](https://nodejs.org/)

---

### SETUP-002: VS Code Extensions & Configuration
**Story Points:** 1 | **Priority:** High | **Time:** 30 minutes

#### 📝 Description
Configure VS Code with essential extensions for Angular development productivity.

#### 🎯 Acceptance Criteria
- [ ] Angular Language Service extension installed
- [ ] ESLint extension installed and working
- [ ] Prettier extension installed
- [ ] GitLens extension installed
- [ ] Auto-save enabled in VS Code settings
- [ ] Format on save enabled
- [ ] Can see TypeScript IntelliSense in .ts files
- [ ] Can see HTML IntelliSense in .component.html files

#### 📚 Topics Covered
- IDE configuration
- Code formatting tools
- TypeScript tooling
- Angular Language Service benefits

#### 🎓 Learning Objectives
- Understand why proper IDE setup increases productivity
- Learn about TypeScript IntelliSense
- Understand linting and formatting

---

### KT-001: Understanding Project Folder Structure
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Study and document the Angular project folder structure. Create a personal cheatsheet of what each folder contains.

#### 🎯 Acceptance Criteria
- [ ] Can explain what `src/app/` contains
- [ ] Can explain `core/` folder purpose (services, guards, interceptors)
- [ ] Can explain `shared/` folder purpose (reusable components)
- [ ] Can explain `features/` folder purpose (feature modules)
- [ ] Can explain `assets/` folder purpose
- [ ] Can explain `environments/` folder purpose
- [ ] Documented understanding in personal notes
- [ ] Can navigate to any component file within 10 seconds

#### 📁 Folder Structure to Learn
```
src/app/
├── core/                 # Singleton services, guards, interceptors, models
│   ├── constants/        # Application constants
│   ├── guards/           # Route guards (auth protection)
│   ├── interceptors/     # HTTP interceptors
│   ├── models/           # TypeScript interfaces
│   ├── services/         # Core services (auth, api, notification)
│   └── mock/             # Mock data and API interceptor
├── features/             # Feature modules (lazy loaded)
│   ├── auth/             # Login, Register pages
│   ├── dashboard/        # Dashboard page
│   ├── products/         # Product list, detail pages
│   ├── cart/             # Shopping cart
│   ├── checkout/         # Checkout flow
│   └── orders/           # Order history, details
├── shared/               # Reusable components, pipes, directives
│   └── components/       # Header, Footer, etc.
├── app.component.*       # Root component
├── app.routes.ts         # Application routes
└── app.config.ts         # App configuration
```

#### 📚 Topics Covered
- Angular project architecture
- Feature-based folder structure
- Core vs Shared vs Features pattern
- Separation of concerns

#### 🎓 Learning Objectives
- Understand enterprise Angular folder organization
- Learn why code is separated into core/shared/features
- Understand lazy loading benefits

---

### KT-002: Understanding Angular Component Structure
**Story Points:** 2 | **Priority:** Critical | **Time:** 1-2 hours

#### 📝 Description
Study a component to understand the relationship between .ts, .html, .scss, and .spec.ts files.

#### 🎯 Acceptance Criteria
- [ ] Can explain what @Component decorator does
- [ ] Can explain templateUrl vs inline template
- [ ] Can explain styleUrls vs inline styles
- [ ] Can explain the purpose of .spec.ts files
- [ ] Can identify standalone: true meaning
- [ ] Can explain imports array in standalone components
- [ ] Documented component anatomy in personal notes

#### 📁 Study This Component
```
src/app/features/dashboard/pages/dashboard/
├── dashboard.component.ts       # Component class (logic)
├── dashboard.component.html     # Component template (view)
├── dashboard.component.scss     # Component styles
└── dashboard.component.spec.ts  # Component tests
```

#### 📚 Topics Covered
- @Component decorator
- Component metadata (selector, templateUrl, styleUrls)
- Standalone components (Angular 14+)
- Component encapsulation

#### 🎓 Learning Objectives
- Understand the 4 files that make up a component
- Learn why separation of concerns is important
- Understand standalone vs module-based components

---

### KT-003: Understanding Angular Services & Dependency Injection
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Study the AuthService to understand how services work and how they are injected into components.

#### 🎯 Acceptance Criteria
- [ ] Can explain @Injectable decorator
- [ ] Can explain providedIn: 'root'
- [ ] Can explain how inject() function works
- [ ] Can explain why services are singletons
- [ ] Can trace how AuthService is used in LoginComponent
- [ ] Documented service patterns in personal notes

#### 📁 Study These Files
```
src/app/core/services/auth.service.ts    # The service
src/app/features/auth/pages/login/       # Component using it
```

#### 📚 Topics Covered
- @Injectable decorator
- Dependency Injection in Angular
- Service lifecycle (singleton)
- inject() function (modern pattern)

#### 🎓 Learning Objectives
- Understand how Angular DI works
- Learn service singleton pattern
- Understand inject() vs constructor injection

---

### KT-004: Understanding Routing & Navigation
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Study app.routes.ts to understand how Angular routing works, including lazy loading.

#### 🎯 Acceptance Criteria
- [ ] Can explain what provideRouter does
- [ ] Can explain path and component mapping
- [ ] Can explain lazy loading with loadComponent
- [ ] Can explain route guards (canActivate)
- [ ] Can explain child routes
- [ ] Can explain redirectTo
- [ ] Can navigate programmatically using Router

#### 📁 Study This File
```
src/app/app.routes.ts
```

#### 📚 Topics Covered
- Angular Router configuration
- Lazy loading components
- Route guards
- Wildcard routes
- Redirect routes

#### 🎓 Learning Objectives
- Understand SPA routing
- Learn lazy loading for performance
- Understand route protection

---

### KT-005: Understanding HTTP & Mock API
**Story Points:** 1 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Study how HTTP requests work in Angular and how our mock API interceptor returns fake data.

#### 🎯 Acceptance Criteria
- [ ] Can explain HttpClient service
- [ ] Can explain how interceptors work
- [ ] Can explain the mock API interceptor flow
- [ ] Can trace a login request through the interceptor
- [ ] Understand Observable and subscribe pattern

#### 📁 Study These Files
```
src/app/core/mock/mock-api.interceptor.ts   # Mock API
src/app/core/mock/mock-data.ts              # Mock data
src/main.ts                                 # Interceptor registration
```

#### 📚 Topics Covered
- HttpClient service
- HTTP Interceptors
- Observables basics
- Mock API pattern

#### 🎓 Learning Objectives
- Understand how Angular makes HTTP requests
- Learn interceptor chain concept
- Understand why mocking is useful for development

---

# 🟩 LEVEL 1: HTML/CSS Styling Tasks

> **Goal:** Build confidence with simple visual changes before touching logic

---

## Epic: UI Polish & Styling

### CSS-001: Style the Login Page Welcome Message
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Add a welcoming subtitle below "Sign In to Your Account" that says "Access your dashboard, orders, and profile".

#### 🎯 Acceptance Criteria
- [ ] Subtitle appears below the main heading
- [ ] Text is styled in muted gray color (#666)
- [ ] Font size is 14px (0.875rem)
- [ ] Proper margin spacing from heading (8px / 0.5rem)
- [ ] Text is centered

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.html
src/app/features/auth/pages/login/login.component.scss (if needed)
```

#### 💡 Implementation Hint
```html
<p class="text-muted text-center mb-4">Access your dashboard, orders, and profile</p>
```

#### 📚 Topics Covered
- HTML structure
- Bootstrap utility classes (text-muted, text-center, mb-4)
- CSS font-size and color

#### 🎓 Learning Objectives
- Learn to find and modify the right HTML file
- Understand Bootstrap utility classes
- Practice making small, safe changes

---

### CSS-002: Add Hover Effect to Product Cards
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Add a subtle scale and shadow effect when hovering over product cards to make them feel interactive.

#### 🎯 Acceptance Criteria
- [ ] Cards scale up slightly on hover (transform: scale(1.02))
- [ ] Shadow becomes more prominent on hover
- [ ] Transition is smooth (0.2s ease)
- [ ] Effect works on all product cards

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.scss
```

#### 💡 Implementation Hint
```scss
.product-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}
```

#### 📚 Topics Covered
- CSS transitions
- CSS transforms
- Box shadow
- SCSS nesting (&:hover)

#### 🎓 Learning Objectives
- Learn CSS hover interactions
- Understand transition timing
- Practice SCSS syntax

---

### CSS-003: Style the Empty Cart State
**Story Points:** 1 | **Priority:** Medium | **Time:** 45 minutes

#### 📝 Description
When the cart is empty, display a friendly message with an icon encouraging users to shop.

#### 🎯 Acceptance Criteria
- [ ] Shows a large cart icon (bi-cart-x, 64px)
- [ ] Displays "Your cart is empty" heading
- [ ] Shows subtext "Browse our products and add items to your cart"
- [ ] Includes a "Start Shopping" button linking to /products
- [ ] Content is centered vertically and horizontally
- [ ] Uses proper spacing and professional styling

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.html
src/app/features/cart/pages/cart/cart.component.scss
```

#### 💡 Implementation Structure
```html
@if (cartItems.length === 0 && !isLoading) {
  <div class="empty-cart">
    <i class="bi bi-cart-x"></i>
    <h3>Your cart is empty</h3>
    <p>Browse our products and add items to your cart</p>
    <a routerLink="/products" class="btn btn-primary">Start Shopping</a>
  </div>
}
```

#### 📚 Topics Covered
- Conditional rendering (@if)
- Bootstrap icons
- CSS flexbox centering
- RouterLink directive

#### 🎓 Learning Objectives
- Learn Angular template conditional syntax
- Practice creating empty state UI patterns
- Understand user experience for empty states

---

### CSS-004: Add Loading Skeleton to Products Page
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
Instead of a simple spinner, show skeleton placeholder cards while products are loading. This provides better UX.

#### 🎯 Acceptance Criteria
- [ ] Show 6 skeleton cards while loading
- [ ] Skeleton cards have same dimensions as real cards
- [ ] Skeleton has animated shimmer effect
- [ ] Skeleton shows placeholder for image, title, price
- [ ] Smooth transition when real data loads

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.html
src/app/features/products/pages/product-list/product-list.component.scss
```

#### 💡 Skeleton CSS Pattern
```scss
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

#### 📚 Topics Covered
- CSS animations (@keyframes)
- CSS gradients
- Loading state UX patterns
- Conditional rendering

#### 🎓 Learning Objectives
- Learn skeleton loading pattern
- Understand CSS animation keyframes
- Practice UX improvement techniques

---

### CSS-005: Style Order Status Badges
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Create consistent, color-coded badges for order statuses (Pending, Processing, Shipped, Delivered, Cancelled).

#### 🎯 Acceptance Criteria
- [ ] Pending: Orange/amber background
- [ ] Processing: Blue background  
- [ ] Shipped: Purple background
- [ ] Delivered: Green background
- [ ] Cancelled: Red background
- [ ] All badges have consistent padding and rounded corners
- [ ] Text is white and readable

#### 📁 Files to Create/Modify
```
src/app/shared/components/order-status-badge/ (new component)
OR add styles to global styles
```

#### 💡 Implementation
```scss
.badge-status {
  padding: 0.375rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  
  &.pending { background: #f59e0b; color: white; }
  &.processing { background: #3b82f6; color: white; }
  &.shipped { background: #8b5cf6; color: white; }
  &.delivered { background: #10b981; color: white; }
  &.cancelled { background: #ef4444; color: white; }
}
```

#### 📚 Topics Covered
- CSS class naming conventions
- Color psychology in UI
- Badge component patterns
- SCSS variables

#### 🎓 Learning Objectives
- Learn status indicator patterns
- Practice consistent styling
- Understand color meaning in UI

---

### CSS-006: Improve Mobile Responsiveness of Header
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Ensure the header looks and works great on mobile devices. The hamburger menu should work smoothly.

#### 🎯 Acceptance Criteria
- [ ] Logo and brand name visible on mobile
- [ ] Hamburger menu icon visible on mobile (< 992px)
- [ ] Menu expands/collapses smoothly when clicked
- [ ] Navigation links stack vertically on mobile
- [ ] Search bar full width on mobile
- [ ] User dropdown works on mobile
- [ ] No horizontal scrolling on mobile

#### 📁 Files to Modify
```
src/app/shared/components/header/header.component.html
src/app/shared/components/header/header.component.scss
```

#### 📚 Topics Covered
- CSS media queries
- Bootstrap responsive breakpoints
- Mobile-first design
- Hamburger menu pattern

#### 🎓 Learning Objectives
- Learn responsive design techniques
- Understand Bootstrap breakpoints
- Practice mobile testing

---

### CSS-007: Add Focus States for Accessibility
**Story Points:** 1 | **Priority:** Medium | **Time:** 30 minutes

#### 📝 Description
Ensure all interactive elements have visible focus states for keyboard navigation (accessibility requirement).

#### 🎯 Acceptance Criteria
- [ ] Buttons show clear focus ring when tabbed to
- [ ] Form inputs show focus state
- [ ] Links show focus state
- [ ] Focus is visible on all navigation items
- [ ] Can navigate entire page with keyboard only

#### 📁 Files to Modify
```
src/styles/styles.scss (global styles)
```

#### 💡 Implementation
```scss
// Ensure all interactive elements have visible focus
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 2px solid #da291c;
  outline-offset: 2px;
}
```

#### 📚 Topics Covered
- CSS :focus-visible pseudo-class
- Accessibility (a11y) basics
- Keyboard navigation
- WCAG requirements

#### 🎓 Learning Objectives
- Learn accessibility importance
- Understand focus management
- Practice inclusive design

---

### CSS-008: Create a Price Display Component Style
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Create consistent styling for displaying prices with original/sale price pattern.

#### 🎯 Acceptance Criteria
- [ ] Current price displayed in bold, primary color
- [ ] Original price shown with strikethrough
- [ ] Discount percentage badge optional
- [ ] Consistent styling across all pages
- [ ] Supports GBP currency symbol (£)

#### 💡 HTML Pattern
```html
<div class="price-display">
  <span class="current-price">£179.99</span>
  <span class="original-price">£219.99</span>
  <span class="discount-badge">-18%</span>
</div>
```

#### 📚 Topics Covered
- CSS text-decoration (strikethrough)
- Display: inline-flex
- Badge styling
- Currency formatting

---

# 🟨 LEVEL 2: Small Functionality Tasks

> **Goal:** Add simple JavaScript/TypeScript functionality to components

---

## Epic: Basic Interactive Features

### FUNC-001: Implement Logout Confirmation Dialog
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
Before logging out, show a confirmation dialog asking "Are you sure you want to logout?"

#### 🎯 Acceptance Criteria
- [ ] Clicking logout shows confirmation prompt
- [ ] "Yes" logs user out and redirects to login
- [ ] "No" closes the dialog, user stays logged in
- [ ] Uses window.confirm() for simplicity (or Bootstrap modal)
- [ ] Works on header logout button

#### 📁 Files to Modify
```
src/app/shared/components/header/header.component.ts
```

#### 💡 Implementation (Simple)
```typescript
logout(): void {
  if (confirm('Are you sure you want to logout?')) {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
```

#### 📚 Topics Covered
- Event handling
- JavaScript confirm()
- Method implementation
- User confirmation patterns

#### 🎓 Learning Objectives
- Learn simple dialog patterns
- Understand confirmation UX
- Practice TypeScript methods

---

### FUNC-002: Add "Remember Me" Functionality
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
When "Remember Me" is checked on login, save the email to localStorage and pre-fill it on next visit.

#### 🎯 Acceptance Criteria
- [ ] Email saved to localStorage when "Remember Me" checked
- [ ] Email auto-filled on login page load if saved
- [ ] "Remember Me" checkbox pre-checked if email exists
- [ ] Email cleared when unchecked and form submitted
- [ ] Works after browser close/reopen

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.ts
src/app/features/auth/pages/login/login.component.html
```

#### 💡 Key Code
```typescript
// On init
const savedEmail = localStorage.getItem('rememberedEmail');
if (savedEmail) {
  this.loginForm.patchValue({ email: savedEmail, rememberMe: true });
}

// On submit
if (this.loginForm.value.rememberMe) {
  localStorage.setItem('rememberedEmail', this.loginForm.value.email);
} else {
  localStorage.removeItem('rememberedEmail');
}
```

#### 📚 Topics Covered
- localStorage API
- Form patchValue()
- Component lifecycle (ngOnInit)
- Persist data in browser

#### 🎓 Learning Objectives
- Learn browser storage APIs
- Understand form pre-population
- Practice data persistence

---

### FUNC-003: Implement Product Search Filter
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Add real-time search filtering to the products page. As user types, products filter instantly.

#### 🎯 Acceptance Criteria
- [ ] Search input on products page
- [ ] Products filter as user types (no button needed)
- [ ] Search is case-insensitive
- [ ] Searches product name and description
- [ ] Shows "No products found" when no matches
- [ ] Clear button to reset search
- [ ] Uses debounce (300ms) for performance

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Array filter() method  
- String includes() method
- Case-insensitive search
- Debounce concept (RxJS debounceTime)
- Two-way binding [(ngModel)]

#### 🎓 Learning Objectives
- Learn array filtering in JavaScript
- Understand debounce optimization
- Practice search UX patterns

---

### FUNC-004: Add Quantity Input Validation in Cart
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Validate quantity input in cart: minimum 1, maximum 99, numbers only.

#### 🎯 Acceptance Criteria
- [ ] Cannot enter quantity less than 1
- [ ] Cannot enter quantity more than 99
- [ ] Cannot enter non-numeric characters
- [ ] +/- buttons respect min/max limits
- [ ] Shows validation error message if invalid
- [ ] Input field highlights red if invalid

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Input validation
- Number parsing (parseInt)
- Conditional CSS classes
- Form validation patterns

#### 🎓 Learning Objectives
- Learn input validation techniques
- Understand user input sanitization
- Practice defensive programming

---

### FUNC-005: Implement "Copy to Clipboard" for Order ID
**Story Points:** 1 | **Priority:** Low | **Time:** 30 minutes

#### 📝 Description
Add a copy button next to order IDs that copies the ID to clipboard with visual feedback.

#### 🎯 Acceptance Criteria
- [ ] Copy icon/button next to each order ID
- [ ] Clicking copies order ID to clipboard
- [ ] Shows "Copied!" tooltip/message briefly
- [ ] Icon changes to checkmark after copy
- [ ] Works on all browsers

#### 📁 Files to Modify
```
src/app/features/orders/pages/orders-list/orders-list.component.ts
src/app/features/orders/pages/orders-list/orders-list.component.html
```

#### 💡 Implementation
```typescript
copyOrderId(orderId: string): void {
  navigator.clipboard.writeText(orderId);
  // Show feedback
}
```

#### 📚 Topics Covered
- Clipboard API
- User feedback patterns
- Async operations basics

#### 🎓 Learning Objectives
- Learn Clipboard API
- Practice micro-interactions
- Understand feedback importance

---

### FUNC-006: Add "Clear Cart" Functionality
**Story Points:** 1 | **Priority:** Medium | **Time:** 30 minutes

#### 📝 Description
Add a "Clear Cart" button that removes all items from the cart with confirmation.

#### 🎯 Acceptance Criteria
- [ ] "Clear Cart" button visible when cart has items
- [ ] Shows confirmation before clearing
- [ ] All items removed when confirmed
- [ ] Shows success notification
- [ ] Button hidden when cart is empty

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Array manipulation (empty array)
- Confirmation dialogs
- Conditional button display
- Notification service usage

---

### FUNC-007: Implement Sort Products by Price
**Story Points:** 2 | **Priority:** Medium | **Time:** 1 hour

#### 📝 Description
Add dropdown to sort products by: Price Low to High, Price High to Low, Name A-Z, Newest.

#### 🎯 Acceptance Criteria
- [ ] Sort dropdown on products page
- [ ] Four sort options available
- [ ] Products re-order immediately on selection
- [ ] Selected sort option visually indicated
- [ ] Default sort: Featured/Newest

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 💡 Key Code
```typescript
sortProducts(sortBy: string): void {
  switch (sortBy) {
    case 'price-asc':
      this.products.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      this.products.sort((a, b) => b.price - a.price);
      break;
    // ... more cases
  }
}
```

#### 📚 Topics Covered
- Array sort() method
- Compare functions
- Switch statements
- Select/dropdown handling

---

### FUNC-008: Add Form Validation Error Messages
**Story Points:** 2 | **Priority:** High | **Time:** 1 hour

#### 📝 Description
Add clear, helpful validation error messages for login and register forms.

#### 🎯 Acceptance Criteria
- [ ] Email: "Email is required", "Please enter a valid email"
- [ ] Password: "Password is required", "Password must be at least 8 characters"
- [ ] Confirm Password: "Passwords do not match"
- [ ] Error appears below field, not in alert
- [ ] Error text is red with icon
- [ ] Errors clear when corrected

#### 📁 Files to Modify
```
src/app/features/auth/pages/login/login.component.html
src/app/features/auth/pages/register/register.component.html
```

#### 📚 Topics Covered
- Reactive forms validation
- Error display patterns
- FormControl errors property
- Conditional rendering

---

# 🟧 LEVEL 3: Medium Features

> **Goal:** Build complete features with multiple files and concepts

---

## Epic: Auth & Security Features

### AUTH-001: Implement JWT Token Storage & Management
**Story Points:** 3 | **Priority:** Critical | **Time:** 2-3 hours

#### 📝 Description
Properly store and manage JWT tokens using secure practices. Understand token structure and lifecycle.

#### 🎯 Acceptance Criteria
- [ ] Token stored in localStorage after login
- [ ] Token included in all API requests (Authorization header)
- [ ] Token read correctly on app initialization
- [ ] Token cleared on logout
- [ ] Understand JWT structure (header.payload.signature)
- [ ] Can decode and inspect token payload

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/core/interceptors/http-auth.interceptor.ts
```

#### 📚 Topics Covered
- JWT token structure
- Bearer token pattern
- HTTP Authorization header
- localStorage for tokens
- HTTP Interceptors

#### 🎓 Learning Objectives
- Understand JWT tokens
- Learn token-based authentication
- Practice interceptor patterns

#### 🔐 Security Notes
- In real apps, consider httpOnly cookies for sensitive tokens
- Never store sensitive data in JWT payload
- Tokens should have expiration

---

### AUTH-002: Implement Token Expiration Check
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Check if JWT token is expired before making API calls. Redirect to login if expired.

#### 🎯 Acceptance Criteria
- [ ] Decode token to read exp (expiration) claim
- [ ] Check expiration on app init and before API calls
- [ ] Redirect to login if token expired
- [ ] Show "Session expired" message on redirect
- [ ] Token expiration time checked correctly (Unix timestamp)

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/core/guards/auth.guard.ts
```

#### 💡 Key Code
```typescript
isTokenExpired(): boolean {
  const token = this.getToken();
  if (!token) return true;
  
  const payload = JSON.parse(atob(token.split('.')[1]));
  const exp = payload.exp * 1000; // Convert to milliseconds
  return Date.now() >= exp;
}
```

#### 📚 Topics Covered
- JWT payload decoding (atob)
- Unix timestamps
- Token expiration concept
- Route guards

---

### AUTH-003: Implement Auto-Logout on Token Expiry
**Story Points:** 2 | **Priority:** Medium | **Time:** 1-2 hours

#### 📝 Description
Automatically log user out when their token expires, even while they're using the app.

#### 🎯 Acceptance Criteria
- [ ] Timer set based on token expiration
- [ ] Auto-logout occurs when timer expires
- [ ] User redirected to login
- [ ] "Session expired" notification shown
- [ ] Timer cleared on manual logout

#### 📚 Topics Covered
- setTimeout/setInterval
- Token expiration calculation
- Cleanup on destroy
- User notification

---

### AUTH-004: Implement Role-Based Route Guards
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Protect admin routes so only users with 'admin' role can access them.

#### 🎯 Acceptance Criteria
- [ ] Admin routes protected by roleGuard
- [ ] Non-admin users redirected to dashboard
- [ ] Error message shown for unauthorized access
- [ ] Role information stored in token/user state
- [ ] Multiple roles support if needed

#### 📁 Files to Create/Modify
```
src/app/core/guards/role.guard.ts (new)
src/app/app.routes.ts
```

#### 💡 Key Code
```typescript
export const roleGuard = (allowedRoles: string[]): CanActivateFn => {
  return (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const userRole = authService.getUserRole();
    
    if (allowedRoles.includes(userRole)) {
      return true;
    }
    
    return router.parseUrl('/dashboard');
  };
};
```

#### 📚 Topics Covered
- Functional guards
- Role-based access control (RBAC)
- Guard factories with parameters
- Authorization vs Authentication

---

## Epic: Product Features

### PROD-001: Build Product Detail Page
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create a complete product detail page showing full product information with add-to-cart capability.

#### 🎯 Acceptance Criteria
- [ ] Route: /products/:id works
- [ ] Displays product image (large)
- [ ] Shows product name, price, description
- [ ] Shows original price with discount
- [ ] Star rating display
- [ ] Quantity selector
- [ ] "Add to Cart" button
- [ ] "Back to Products" link
- [ ] Loading state while fetching
- [ ] Error state if product not found
- [ ] Category and tags displayed

#### 📁 Files to Modify
```
src/app/features/products/pages/product-detail/product-detail.component.ts
src/app/features/products/pages/product-detail/product-detail.component.html
src/app/features/products/pages/product-detail/product-detail.component.scss
```

#### 📚 Topics Covered
- Route parameters (ActivatedRoute)
- ParamMap and params
- API call with ID
- Component state management
- Error handling

#### 🎓 Learning Objectives
- Learn route parameter reading
- Practice component data binding
- Understand loading/error states

---

### PROD-002: Implement Category Filter on Products Page
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Add category filter sidebar/dropdown to filter products by category.

#### 🎯 Acceptance Criteria
- [ ] Categories fetched from mock API
- [ ] Category list displayed as filter options
- [ ] Clicking category filters products
- [ ] "All Categories" option shows all products
- [ ] Active category highlighted
- [ ] Product count shown per category
- [ ] Filter works with search (combined)

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Multiple API calls
- Array filtering with multiple criteria
- UI state management
- Combined filters

---

### PROD-003: Implement Add to Cart from Product List
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Add "Add to Cart" button to each product card on the products list page.

#### 🎯 Acceptance Criteria
- [ ] "Add to Cart" button on each product card
- [ ] Button makes API call to cart endpoint
- [ ] Success notification shown
- [ ] Cart count in header updates
- [ ] Loading state on button while adding
- [ ] Error handling if add fails

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
src/app/shared/components/header/header.component.ts (update cart count)
```

#### 📚 Topics Covered
- HTTP POST request
- Component communication (update header)
- Loading state per item
- Success/error notifications

---

## Epic: Cart & Checkout Features

### CART-001: Implement Cart Total Calculation
**Story Points:** 2 | **Priority:** High | **Time:** 1-2 hours

#### 📝 Description
Calculate cart totals: subtotal, VAT (20%), shipping, and grand total.

#### 🎯 Acceptance Criteria
- [ ] Subtotal: sum of (price × quantity) for all items
- [ ] VAT: 20% of subtotal
- [ ] Shipping: £5.99 or FREE over £50
- [ ] Grand Total: subtotal + VAT + shipping
- [ ] Totals update when quantity changes
- [ ] All amounts formatted as GBP currency

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- Array reduce() method
- Currency formatting (CurrencyPipe)
- Conditional logic (free shipping)
- Real-time calculations

---

### CART-002: Implement Promo Code Functionality
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Allow users to enter promo codes for discounts on their cart.

#### 🎯 Acceptance Criteria
- [ ] Promo code input field with "Apply" button
- [ ] Valid codes: SAVE10 (10%), SAVE20 (20%), WELCOME (15%)
- [ ] Error shown for invalid codes
- [ ] Discount displayed in order summary
- [ ] Only one promo code at a time
- [ ] "Remove" option for applied code
- [ ] Grand total reflects discount

#### 📁 Files to Modify
```
src/app/features/cart/pages/cart/cart.component.ts
src/app/features/cart/pages/cart/cart.component.html
```

#### 📚 Topics Covered
- String validation
- Object lookup (code → discount mapping)
- State management (applied promo)
- User feedback

---

### CHECKOUT-001: Build Checkout Page - Shipping Form
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create checkout page with shipping address form using reactive forms.

#### 🎯 Acceptance Criteria
- [ ] Form fields: First Name, Last Name, Address Line 1, Address Line 2, City, Postcode, Phone
- [ ] All fields except Address Line 2 required
- [ ] Postcode validation (UK format)
- [ ] Phone validation (UK format)
- [ ] Error messages for each field
- [ ] "Continue to Payment" button
- [ ] Order summary sidebar showing cart items

#### 📁 Files to Modify
```
src/app/features/checkout/pages/checkout/checkout.component.ts
src/app/features/checkout/pages/checkout/checkout.component.html
src/app/features/checkout/pages/checkout/checkout.component.scss
```

#### 📚 Topics Covered
- Reactive Forms (FormGroup, FormControl)
- Custom validators
- Form submission
- Multi-step form concept

---

## Epic: Orders Features

### ORDER-001: Build Orders List Page
**Story Points:** 3 | **Priority:** High | **Time:** 2-3 hours

#### 📝 Description
Display user's order history with status, date, total, and view details link.

#### 🎯 Acceptance Criteria
- [ ] Table showing: Order ID, Date, Items count, Total, Status
- [ ] Status shown with colored badges
- [ ] "View Details" link to order detail page
- [ ] Orders sorted by date (newest first)
- [ ] Loading state while fetching
- [ ] Empty state if no orders
- [ ] Responsive table design

#### 📁 Files to Modify
```
src/app/features/orders/pages/orders-list/orders-list.component.ts
src/app/features/orders/pages/orders-list/orders-list.component.html
src/app/features/orders/pages/orders-list/orders-list.component.scss
```

#### 📚 Topics Covered
- HTTP GET request
- Table rendering
- Date formatting (DatePipe)
- Loading and empty states

---

### ORDER-002: Build Order Detail Page
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Display complete order details including items, addresses, status timeline.

#### 🎯 Acceptance Criteria
- [ ] Route: /orders/:id works
- [ ] Shows order ID, date, status
- [ ] Status timeline/tracker
- [ ] List of ordered items with images, names, quantities, prices
- [ ] Shipping address displayed
- [ ] Order totals (subtotal, VAT, shipping, total)
- [ ] "Back to Orders" link
- [ ] Error state if order not found

#### 📁 Files to Modify
```
src/app/features/orders/pages/order-detail/order-detail.component.ts
src/app/features/orders/pages/order-detail/order-detail.component.html
src/app/features/orders/pages/order-detail/order-detail.component.scss
```

#### 📚 Topics Covered
- Route parameters
- Complex data display
- Status tracker component
- Nested data structures

---

# 🟥 LEVEL 4: Advanced Features

> **Goal:** Complex features requiring deep Angular knowledge

---

## Epic: State Management

### STATE-001: Implement Cart State with Angular Signals
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Migrate cart state management to Angular Signals for reactive, efficient updates.

#### 🎯 Acceptance Criteria
- [ ] Create CartService with signal-based state
- [ ] Cart items stored in signal
- [ ] Computed signals for totals (subtotal, VAT, total)
- [ ] Cart count signal for header
- [ ] Effects for localStorage persistence
- [ ] All cart operations update signals
- [ ] Components react to signal changes

#### 📁 Files to Create/Modify
```
src/app/core/services/cart.service.ts (refactor)
```

#### 💡 Key Concepts
```typescript
private cartItems = signal<CartItem[]>([]);

readonly itemCount = computed(() => 
  this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
);

readonly subtotal = computed(() =>
  this.cartItems().reduce((sum, item) => sum + (item.price * item.quantity), 0)
);
```

#### 📚 Topics Covered
- Angular Signals (signal, computed, effect)
- Reactive state management
- Computed values
- Signal effects

---

### STATE-002: Implement Auth State with Signals
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Convert AuthService to use signals for reactive auth state across the app.

#### 🎯 Acceptance Criteria
- [ ] currentUser signal for logged-in user
- [ ] isAuthenticated computed signal
- [ ] Components update reactively on login/logout
- [ ] Header shows/hides based on auth signal
- [ ] Token storage synced with signal state

#### 📁 Files to Modify
```
src/app/core/services/auth.service.ts
src/app/shared/components/header/header.component.ts
```

#### 📚 Topics Covered
- Signal-based services
- Reactive auth state
- Component reactivity
- Service refactoring

---

## Epic: Performance Optimization

### PERF-001: Implement OnPush Change Detection
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Optimize performance by using OnPush change detection strategy on key components.

#### 🎯 Acceptance Criteria
- [ ] Product list component uses OnPush
- [ ] Product card component uses OnPush
- [ ] Cart component uses OnPush
- [ ] All components still work correctly
- [ ] Understand when change detection runs

#### 📁 Files to Modify
```
Multiple component .ts files
```

#### 💡 Implementation
```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  // ...
})
```

#### 📚 Topics Covered
- Change detection strategies
- OnPush vs Default
- Immutable data patterns
- Performance optimization

---

### PERF-002: Implement Virtual Scrolling for Products
**Story Points:** 4 | **Priority:** Low | **Time:** 3-4 hours

#### 📝 Description
Implement virtual scrolling for product list to handle large datasets efficiently.

#### 🎯 Acceptance Criteria
- [ ] Install @angular/cdk
- [ ] Implement cdk-virtual-scroll-viewport
- [ ] Only visible items rendered in DOM
- [ ] Smooth scrolling with hundreds of items
- [ ] Maintains product card functionality

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
src/app/features/products/pages/product-list/product-list.component.html
```

#### 📚 Topics Covered
- Angular CDK
- Virtual scrolling
- DOM optimization
- Performance testing

---

## Epic: Testing

### TEST-001: Write Unit Tests for AuthService
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Write comprehensive unit tests for AuthService including login, logout, token management.

#### 🎯 Acceptance Criteria
- [ ] Test login success scenario
- [ ] Test login failure scenario
- [ ] Test logout clears token
- [ ] Test isAuthenticated returns correct value
- [ ] Test token storage/retrieval
- [ ] Mock HttpClient properly
- [ ] 80%+ code coverage for service

#### 📁 Files to Modify
```
src/app/core/services/auth.service.spec.ts
```

#### 📚 Topics Covered
- Jasmine testing framework
- TestBed configuration
- HttpClientTestingModule
- Spy objects
- expect() assertions

---

### TEST-002: Write Component Tests for ProductList
**Story Points:** 4 | **Priority:** High | **Time:** 3-4 hours

#### 📝 Description
Write tests for ProductListComponent including rendering, filtering, and interaction.

#### 🎯 Acceptance Criteria
- [ ] Test products render correctly
- [ ] Test loading state displays
- [ ] Test search filtering works
- [ ] Test category filtering works
- [ ] Test add to cart button works
- [ ] Test error state displays

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.spec.ts
```

#### 📚 Topics Covered
- Component testing
- ComponentFixture
- DOM queries
- Event triggering
- Async testing

---

### TEST-003: Setup Cypress E2E Testing
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Setup Cypress for end-to-end testing and write first login flow test.

#### 🎯 Acceptance Criteria
- [ ] Cypress installed and configured
- [ ] Base URL configured
- [ ] Login flow E2E test written
- [ ] Test: visit login, fill form, submit, verify dashboard
- [ ] Custom commands for common actions
- [ ] Tests pass in headless mode

#### 📁 Files to Create
```
cypress/e2e/login.cy.ts
cypress/support/commands.ts
cypress.config.ts
```

#### 📚 Topics Covered
- Cypress installation
- E2E test writing
- Selectors and assertions
- Custom commands
- Test organization

---

## Epic: Advanced Forms

### FORM-001: Implement Multi-Step Checkout Form
**Story Points:** 5 | **Priority:** High | **Time:** 4-5 hours

#### 📝 Description
Create a multi-step checkout form: Shipping → Payment → Review → Confirm.

#### 🎯 Acceptance Criteria
- [ ] Step indicator showing current step
- [ ] Can navigate back to previous steps
- [ ] Data preserved when navigating
- [ ] Validation per step before proceeding
- [ ] Final review step shows all info
- [ ] Submit places order
- [ ] Success page after order placed

#### 📁 Files to Modify
```
src/app/features/checkout/pages/checkout/checkout.component.ts
src/app/features/checkout/pages/checkout/checkout.component.html
```

#### 📚 Topics Covered
- Multi-step form pattern
- Form groups
- State management between steps
- Form validation

---

### FORM-002: Implement Custom Form Validators
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Create custom validators for UK postcode, UK phone number, and password strength.

#### 🎯 Acceptance Criteria
- [ ] UK Postcode validator (pattern: AA9A 9AA, A9A 9AA, etc.)
- [ ] UK Phone validator (pattern: +44 or 07xxx)
- [ ] Password strength validator (8+ chars, 1 upper, 1 number, 1 special)
- [ ] Validators reusable across forms
- [ ] Custom error messages per validator

#### 📁 Files to Create
```
src/app/shared/validators/uk-postcode.validator.ts
src/app/shared/validators/uk-phone.validator.ts
src/app/shared/validators/password-strength.validator.ts
```

#### 📚 Topics Covered
- Custom ValidatorFn
- Regex patterns
- Reusable validators
- Error message handling

---

## Epic: RxJS Mastery (Extra Credit)

### RXJS-001: Implement Debounced Search with RxJS
**Story Points:** 3 | **Priority:** Medium | **Time:** 2-3 hours

#### 📝 Description
Refactor product search to use RxJS operators for proper debouncing and cancellation.

#### 🎯 Acceptance Criteria
- [ ] Search input uses Subject
- [ ] debounceTime(300) applied
- [ ] distinctUntilChanged prevents duplicate searches
- [ ] switchMap cancels previous requests
- [ ] takeUntil for cleanup on destroy
- [ ] Loading indicator during search

#### 📁 Files to Modify
```
src/app/features/products/pages/product-list/product-list.component.ts
```

#### 💡 Key Pattern
```typescript
private searchSubject = new Subject<string>();

ngOnInit() {
  this.searchSubject.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(term => this.productService.search(term)),
    takeUntil(this.destroy$)
  ).subscribe(results => this.products = results);
}
```

#### 📚 Topics Covered
- Subject
- debounceTime
- distinctUntilChanged  
- switchMap
- takeUntil pattern

---

# 📊 Summary Statistics

| Level | Tasks | Story Points | Hours |
|-------|-------|--------------|-------|
| Level 0: Setup & KT | 6 | 12 | 8-10h |
| Level 1: CSS/HTML | 8 | 10 | 5-6h |
| Level 2: Small Functionality | 8 | 14 | 6-8h |
| Level 3: Medium Features | 12 | 42 | 28-35h |
| Level 4: Advanced | 10 | 36 | 25-32h |
| **TOTAL** | **44** | **114** | **72-91h** |

---

## 🎓 Recommended Learning Path

### Week 1: Foundation
- Complete all Level 0 (Setup & KT) tasks
- **Focus:** Understanding project structure and Angular basics

### Week 2: Visual Skills
- Complete Level 1 (CSS/HTML) tasks
- **Focus:** Styling, responsiveness, Bootstrap

### Week 3: Basic Interactivity
- Complete Level 2 (Small Functionality) tasks
- **Focus:** Event handling, localStorage, validation

### Week 4-5: Features
- Complete Level 3 (Medium Features) tasks
- **Focus:** HTTP, forms, routing, auth

### Week 6-7: Mastery
- Complete Level 4 (Advanced) tasks
- **Focus:** Signals, testing, performance

---

## 📝 Notes for Team Leads

1. **All images are local SVG placeholders** - No external API calls for images
2. **Mock API delay is minimal (100ms)** - Fast loading experience
3. **No DevOps tasks included** - Frontend focus only
4. **JWT/Auth topics are covered** in Level 3-4
5. **Figma designs** - Will be attached to Jira tickets in future for UI clarity
6. **Each task includes** - Description, acceptance criteria, topics, learning objectives

---

## 🔑 Interview Preparation Topics

Each level prepares you for common Angular interview questions:

### Level 0 Topics (Junior):
- "What is Angular? How does it differ from AngularJS?"
- "Explain the Angular folder structure"
- "What is a component in Angular?"

### Level 1-2 Topics (Junior-Mid):
- "What are Bootstrap utility classes?"
- "How do you handle forms in Angular?"
- "What is localStorage and sessionStorage?"

### Level 3 Topics (Mid):
- "Explain JWT authentication"
- "What are route guards?"
- "How do you handle HTTP requests in Angular?"
- "What is an HTTP Interceptor?"

### Level 4 Topics (Senior):
- "What are Angular Signals?"
- "Explain OnPush change detection"
- "How do you test Angular components?"
- "What is RxJS and explain key operators?"

---

**Document Version:** 3.0  
**Last Updated:** January 2025  
**Maintained By:** TechCorp Development Team
