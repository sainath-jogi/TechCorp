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
