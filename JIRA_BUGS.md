# 🐛 Angular 21 UK Store - JIRA Bug Fixes

> **Project:** TechCorp UK Store - Angular 21 E-Commerce Platform  
> **Total Bugs:** 60 | **Estimated Time:** 28-38 hours  
> **Purpose:** Practice debugging skills with progressive difficulty for interview preparation

---

# 🎯 Interview Topics Coverage Map (Debugging Focus)

> This map shows which debugging and Angular interview topics are practiced across bugs.

## Essential Debugging Topics (Must Know)

| Topic | Bugs Practicing | Count | Priority |
|-------|-----------------|-------|----------|
| **Browser DevTools (Elements/Console)** | BUG-001 to BUG-010 | 10 | 🔴 Essential |
| **Template Binding Errors** | BUG-011 to BUG-020 | 10 | 🔴 Essential |
| **Form Validation Debugging** | BUG-021 to BUG-030 | 10 | 🔴 Essential |
| **HTTP/API Error Handling** | BUG-031 to BUG-042 | 12 | 🔴 Essential |
| **Console.log Debugging** | All bugs | 60 | 🔴 Essential |
| **Error Message Interpretation** | All bugs | 60 | 🔴 Essential |

## Important Debugging Topics (Should Know)

| Topic | Bugs Practicing | Count | Priority |
|-------|-----------------|-------|----------|
| **Change Detection Issues** | BUG-043, BUG-044, BUG-045 | 3 | 🟠 Important |
| **Memory Leaks** | BUG-035, BUG-046 | 2 | 🟠 Important |
| **Race Conditions** | BUG-036, BUG-039 | 2 | 🟠 Important |
| **Performance Profiling** | BUG-045, BUG-052, BUG-053 | 3 | 🟠 Important |
| **RxJS Debugging** | BUG-034, BUG-035, BUG-036 | 3 | 🟠 Important |
| **Signal Debugging** | BUG-048 | 1 | 🟠 Important |

## Advanced Debugging Topics (Nice to Know)

| Topic | Bugs Practicing | Count | Priority |
|-------|-----------------|-------|----------|
| **NgZone Issues** | BUG-045 | 1 | 🟡 Advanced |
| **SSR/Hydration Errors** | BUG-042 | 1 | 🟡 Advanced |
| **Lazy Loading Issues** | BUG-047 | 1 | 🟡 Advanced |
| **Angular DevTools** | BUG-043, BUG-044 | 2 | 🟡 Advanced |
| **Content Projection Issues** | BUG-051 | 1 | 🟡 Advanced |

---

# 🟢 LEVEL 0: CSS & Visual Bugs

> **Goal:** Learn to identify and fix visual/styling issues using Browser DevTools

---

## BUG-001: Button Text Not Visible
**Severity:** High | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to the Login page
2. Look at the "Sign In" button

#### Expected Behavior
Button should show white text "Sign In" on purple background

#### Actual Behavior
Button appears purple but text is not visible (same color as background)

### 🔍 Investigation Hints
- Open DevTools → Elements panel
- Inspect the button element
- Check the `color` CSS property
- Compare with background color

### 📚 Topics Covered
- CSS color property
- Browser DevTools usage
- Inspecting elements

### 💼 Interview Questions
1. **How do you inspect CSS styles in the browser?**
   - Right-click element → Inspect, or F12 → Elements tab. Styles panel shows applied CSS, computed tab shows final values, can edit live.
   
2. **What is CSS specificity?**
   - Algorithm that determines which CSS rule applies. Order: inline > ID > class/attribute/pseudo > element. Higher specificity wins. `!important` overrides all.
   
3. **How do you debug why a style isn't being applied?**
   - Check computed tab, look for strikethrough (overridden), check specificity, look for typos, verify selector matches, check inheritance.

---

## BUG-002: Image Not Displaying
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to Products page
2. View any product card
3. Notice the broken image icon

#### Expected Behavior
Product image should display correctly

#### Actual Behavior
Broken image icon shown instead of product image

### 🔍 Investigation Hints
- Check the Network tab for 404 errors
- Inspect the `<img>` element's `src` attribute
- Verify the image path exists
- Check for typos in the path

### 📚 Topics Covered
- Image src attribute
- Network tab debugging
- File paths in Angular
- 404 errors

### 💼 Interview Questions
1. **How do you debug a 404 error?**
   - Check Network tab for failed request, verify URL is correct, check if file exists at path, check server routing, check base href.
   
2. **What's the difference between relative and absolute paths?**
   - **Absolute**: Full path from root (`/assets/img.png`). **Relative**: Path from current location (`./img.png`, `../img.png`). Absolute is more reliable.
   
3. **How do you handle broken images gracefully?**
   - Use `(error)` event binding: `<img (error)="onImageError($event)">`. Set fallback image: `$event.target.src = 'fallback.png'`

---

## BUG-003: Misaligned Form Elements
**Severity:** Low | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** Design Team

#### Steps to Reproduce
1. Go to Registration page
2. Notice the form layout

#### Expected Behavior
Form inputs should be vertically aligned with consistent spacing

#### Actual Behavior
Inputs have inconsistent margins, labels not aligned

### 🔍 Investigation Hints
- Check margin/padding values on form elements
- Look for inconsistent spacing classes
- Review flexbox/grid alignment
- Compare with login form for reference

### 📚 Topics Covered
- CSS margin and padding
- Flexbox alignment
- Bootstrap spacing utilities
- Form layout patterns

### 💼 Interview Questions
1. **What's the difference between margin and padding?**
   - **Padding**: Space inside element (between border and content). **Margin**: Space outside element (between elements). Margin can collapse, padding cannot.
   
2. **How do you vertically center content in flexbox?**
   - On container: `display: flex; align-items: center;` for cross-axis, `justify-content: center;` for main-axis.

---

## BUG-004: Overflow Causing Horizontal Scroll
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Mobile Testing

#### Steps to Reproduce
1. Open the app on mobile viewport (< 768px)
2. Navigate to any page
3. Try to scroll horizontally

#### Expected Behavior
No horizontal scroll on mobile

#### Actual Behavior
Page can scroll horizontally, content overflows

### 🔍 Investigation Hints
- Apply `outline: 1px solid red` to `*` to find overflow
- Check for elements with fixed widths
- Look for padding/margin causing overflow
- Check Bootstrap row/container usage

### 📚 Topics Covered
- CSS overflow property
- Responsive design
- Debugging layout issues
- Box model

### 💼 Interview Questions
1. **How do you find what's causing horizontal overflow?**
   - Add `* { outline: 1px solid red; }` to see all boxes, or use DevTools "Rendering" → "Paint flashing". Check for fixed widths, negative margins, improperly contained content.
   
2. **What are overflow property values?**
   - `visible` (default), `hidden` (clips), `scroll` (always scrollbar), `auto` (scrollbar when needed), `clip` (no scrolling).

---

## BUG-005: Z-Index Layering Issue
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to Products page
2. Open the filter dropdown
3. Notice it appears behind product cards

#### Expected Behavior
Dropdown should appear above all other content

#### Actual Behavior
Dropdown is hidden behind product cards

### 🔍 Investigation Hints
- Check z-index values
- Look for stacking context issues
- Verify position property is set
- Check parent element stacking contexts

### 📚 Topics Covered
- CSS z-index
- Stacking contexts
- Position property

### 💼 Interview Questions
1. **How does z-index work?**
   - Controls stacking order of positioned elements. Higher z-index = on top. Only works on positioned elements (not static). Creates stacking contexts.
   
2. **What creates a new stacking context?**
   - `position: relative/absolute/fixed` + z-index, `opacity < 1`, `transform`, `filter`, `isolation: isolate`, `will-change`.

---

## BUG-006: Hover Effect Not Working
**Severity:** Low | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** Design Review

#### Steps to Reproduce
1. Go to Products page
2. Hover over any product card

#### Expected Behavior
Card should lift with shadow on hover

#### Actual Behavior
No visual change on hover

### 🔍 Investigation Hints
- Check for `:hover` pseudo-class
- Look for CSS specificity issues
- Verify transition property
- Check if pointer-events is disabled

### 📚 Topics Covered
- CSS :hover pseudo-class
- CSS transitions
- Specificity debugging

### 💼 Interview Questions
1. **How do you create smooth hover effects?**
   - Define base styles with `transition`, add `:hover` styles. Example: `transition: transform 0.3s ease; &:hover { transform: translateY(-4px); }`
   
2. **Why might :hover not work?**
   - Element covered by another, pointer-events: none, higher specificity rule overriding, syntax error, element not visible.

---

## BUG-007: Font Not Loading
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Design Team

#### Steps to Reproduce
1. Load any page
2. Notice the font
3. Compare with design specs

#### Expected Behavior
Application should use "Inter" font family

#### Actual Behavior
Fallback system font displayed

### 🔍 Investigation Hints
- Check Network tab for font file requests
- Verify @font-face declarations
- Check font-family CSS property
- Look for CORS issues

### 📚 Topics Covered
- Web fonts
- @font-face
- Network debugging
- CORS

### 💼 Interview Questions
1. **How do you add custom fonts to a web app?**
   - @font-face declaration, Google Fonts link, or npm packages like Fontsource. Specify font-family in CSS, provide fallbacks.
   
2. **What causes CORS errors with fonts?**
   - Fonts loaded from different origin need proper CORS headers. Use same origin, configure server headers, or use font CDN that handles CORS.

---

## BUG-008: Dark Mode Colors Not Applied
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Accessibility Testing

#### Steps to Reproduce
1. Enable system dark mode
2. Visit the application
3. Notice the colors

#### Expected Behavior
App should switch to dark theme colors

#### Actual Behavior
Light theme colors still showing

### 🔍 Investigation Hints
- Check for `prefers-color-scheme` media query
- Verify CSS variables are defined for both themes
- Check if dark mode class is applied
- Look at computed styles in both modes

### 📚 Topics Covered
- prefers-color-scheme media query
- CSS custom properties
- Theme switching

### 💼 Interview Questions
1. **How do you implement dark mode in CSS?**
   - Use `@media (prefers-color-scheme: dark)` with CSS variables, or toggle class on body. Define variables for colors in both themes.
   
2. **What are CSS custom properties (variables)?**
   - `--my-variable: value;` in any selector, access with `var(--my-variable)`. Cascade and inherit, can be changed dynamically.

---

## BUG-009: Flex Item Not Growing
**Severity:** Low | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** Design Team

#### Steps to Reproduce
1. Go to Cart page
2. Look at the layout on wide screens
3. Notice the cart items column

#### Expected Behavior
Cart items should expand to fill available space

#### Actual Behavior
Large gap between items and summary

### 🔍 Investigation Hints
- Check flex-grow property
- Verify flex container setup
- Look for max-width constraints
- Check parent container flex properties

### 📚 Topics Covered
- Flexbox flex-grow
- Flex container vs items
- Layout debugging

### 💼 Interview Questions
1. **What are flex-grow, flex-shrink, and flex-basis?**
   - **flex-grow**: How much to grow relative to siblings. **flex-shrink**: How much to shrink. **flex-basis**: Initial size before growing/shrinking. Shorthand: `flex: 1 1 auto;`
   
2. **What does flex: 1 mean?**
   - Shorthand for `flex-grow: 1; flex-shrink: 1; flex-basis: 0%`. Item will grow to fill available space equally with siblings also set to flex: 1.

---

## BUG-010: Text Truncation Not Working
**Severity:** Low | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to Orders page
2. Find an order with a long product name
3. Notice the product name display

#### Expected Behavior
Long text should truncate with ellipsis (...)

#### Actual Behavior
Text wraps or overflows container

### 🔍 Investigation Hints
- Check for text-overflow property
- Verify white-space: nowrap is set
- Ensure overflow: hidden is set
- Check element width constraints

### 📚 Topics Covered
- text-overflow: ellipsis
- white-space property
- overflow property

### 💼 Interview Questions
1. **How do you truncate text with ellipsis?**
   - Need three properties: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`. Element must have defined width.
   
2. **How do you do multi-line text truncation?**
   - Use `-webkit-line-clamp` with `display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; -webkit-line-clamp: 2;`

---

# 🟦 LEVEL 1: Template & Binding Bugs

> **Goal:** Learn to debug Angular template syntax and data binding issues

---

## BUG-011: Interpolation Not Displaying Data
**Severity:** High | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to Dashboard
2. Look at the welcome message area

#### Expected Behavior
Should show "Welcome, John Smith!"

#### Actual Behavior
Shows "Welcome, !" (name missing)

### 🔍 Investigation Hints
- Check the variable name in interpolation
- Console.log the user object
- Verify the property path
- Check if data is loaded (async issue?)

### 📚 Topics Covered
- Angular interpolation
- Property paths
- Debugging data binding

### 💡 Common Cause
```html
<!-- Wrong: property doesn't exist -->
<h1>Welcome, {{ user.name }}!</h1>

<!-- Correct: check actual object structure -->
<h1>Welcome, {{ user.firstName }} {{ user.lastName }}!</h1>
```

### 💼 Interview Questions
1. **What is interpolation in Angular?**
   - Template syntax `{{ expression }}` that evaluates expression and converts to string. One-way binding from component to template.
   
2. **How do you debug interpolation showing undefined?**
   - Console.log the source object, check property names for typos, verify data is loaded before template renders, use safe navigation operator `?.`
   
3. **What does the safe navigation operator do?**
   - `?.` returns undefined instead of error if property doesn't exist. `user?.address?.city` won't throw if user or address is null/undefined.

---

## BUG-012: Property Binding Missing Brackets
**Severity:** High | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to Product Detail page
2. View the product image

#### Expected Behavior
Should display the product image

#### Actual Behavior
Shows broken image or "imageUrl" text

### 🔍 Investigation Hints
- Check if brackets are used: `[src]` vs `src`
- Without brackets, it's a static string
- Check console for errors
- Inspect the img element's src

### 📚 Topics Covered
- Property binding syntax
- Static vs dynamic attributes
- Angular binding

### 💡 Common Cause
```html
<!-- Wrong: sets src to literal string "product.imageUrl" -->
<img src="product.imageUrl">

<!-- Correct: evaluates product.imageUrl -->
<img [src]="product.imageUrl">
```

### 💼 Interview Questions
1. **When do you use brackets in Angular templates?**
   - Use `[property]` when value is dynamic (expression/variable). Omit for static strings: `src="/logo.png"` vs `[src]="dynamicUrl"`.
   
2. **What's the difference between [attr.x] and [x]?**
   - `[property]` binds to DOM property. `[attr.x]` binds to HTML attribute. Some attributes don't have properties (colspan), use attr for those.

---

## BUG-013: Event Binding Missing Parentheses
**Severity:** High | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to Cart page
2. Click "Remove" button on any item
3. Nothing happens

#### Expected Behavior
Item should be removed from cart

#### Actual Behavior
Button click does nothing

### 🔍 Investigation Hints
- Check event binding syntax
- Look for `(click)` vs `click`
- Check if method name is correct
- Add console.log in the method

### 📚 Topics Covered
- Event binding syntax
- Click handlers
- Debugging events

### 💡 Common Cause
```html
<!-- Wrong: not an event binding -->
<button click="removeItem(item.id)">Remove</button>

<!-- Correct: event binding syntax -->
<button (click)="removeItem(item.id)">Remove</button>
```

### 💼 Interview Questions
1. **How do event bindings work in Angular?**
   - `(eventName)="handler($event)"` listens for DOM event and calls component method. Can access $event for event object.
   
2. **How do you prevent event default behavior?**
   - In handler: `event.preventDefault()` or in template: `(click)="handler(); $event.preventDefault();"` or use `(click)="handler($event)"`

---

## BUG-014: List Not Updating After Adding Item
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** User Feedback

#### Steps to Reproduce
1. View cart page
2. Add new item from another tab
3. Return to cart page

#### Expected Behavior
Cart should show newly added item

#### Actual Behavior
Cart shows old data until page refresh

### 🔍 Investigation Hints
- Check if using OnPush change detection
- Look at how data is fetched in ngOnInit
- Consider using a service with BehaviorSubject
- Check if cart data is re-fetched on navigation

### 📚 Topics Covered
- Change detection
- Component lifecycle
- Data refresh patterns

### 💼 Interview Questions
1. **Why might the view not update when data changes?**
   - OnPush change detection with mutated (not replaced) objects, outside Angular zone, data change after change detection cycle.
   
2. **How do you force data refresh on navigation?**
   - Don't use snapshot for params (use Observable), fetch data in subscription to params, or use router onSameUrlNavigation: 'reload'.

---

## BUG-015: Conditional Element Always Showing
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Logout from the application
2. Navigate to any page
3. Notice "Welcome, User!" message

#### Expected Behavior
Welcome message should only show for logged-in users

#### Actual Behavior
Welcome message shows even when not logged in

### 🔍 Investigation Hints
- Check `@if` or `*ngIf` condition
- Verify the condition variable value
- Console.log the condition
- Check async data loading

### 📚 Topics Covered
- Angular @if directive
- Boolean conditions in templates
- Truthy/falsy values

### 💡 Common Cause
```html
<!-- Wrong: checking object instead of property -->
@if (user) { ... }

<!-- Correct: check specific property -->
@if (user?.isLoggedIn) { ... }
```

### 💼 Interview Questions
1. **What's the difference between @if and *ngIf?**
   - `@if` is new built-in control flow (Angular 17+), native syntax. `*ngIf` is directive approach. Both work, @if is recommended going forward.
   
2. **What are truthy and falsy values in JavaScript?**
   - **Falsy**: false, 0, "", null, undefined, NaN. **Truthy**: Everything else including empty arrays/objects. Check appropriate property for your condition.

---

## BUG-016: Loop Index Incorrect in Nested @for
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. View order detail page with multiple items
2. Click "Remove" on any item
3. Wrong item gets removed

#### Expected Behavior
Clicked item should be removed

#### Actual Behavior
Different item removed (index mismatch)

### 🔍 Investigation Hints
- Check @for loop track expression
- Look for nested loop index conflicts
- Verify index usage in remove function
- Check item identifier vs index

### 📚 Topics Covered
- @for loop with track
- Index in iterations
- Immutable operations

### 💡 Fix Pattern
```html
<!-- Wrong: using index -->
@for (item of items; track $index) {
  <button (click)="remove($index)">Remove</button>
}

<!-- Correct: use unique ID -->
@for (item of items; track item.id) {
  <button (click)="remove(item.id)">Remove</button>
}
```

### 💼 Interview Questions
1. **What is the track expression in @for?**
   - Tells Angular how to identify items for efficient DOM updates. Use unique identifier (item.id), not index. Similar to React's key.
   
2. **Why shouldn't you use index for tracking?**
   - If items reorder or delete, DOM elements won't map correctly. Item at index 0 isn't same after deletion. Use stable unique ID.

---

## BUG-017: Two-Way Binding Not Working
**Severity:** High | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to quantity input in cart
2. Type a new quantity
3. Check the total price

#### Expected Behavior
Total should update as quantity changes

#### Actual Behavior
Total doesn't update when typing

### 🔍 Investigation Hints
- Check two-way binding syntax `[(ngModel)]`
- Verify FormsModule is imported
- Look for missing banana-in-box syntax
- Check if using reactive forms instead

### 📚 Topics Covered
- Two-way binding
- ngModel
- FormsModule import

### 💡 Common Cause
```html
<!-- Wrong: missing two-way binding -->
<input [ngModel]="quantity">

<!-- Correct -->
<input [(ngModel)]="quantity">
```

### 💼 Interview Questions
1. **How does two-way binding work?**
   - Combines property binding `[ngModel]` and event binding `(ngModelChange)`. Shorthand is `[(ngModel)]`. Updates property and reacts to input changes.
   
2. **What imports are needed for ngModel?**
   - Import FormsModule in your component or module. For standalone components: `imports: [FormsModule]`. Without it, ngModel won't be recognized.

---

## BUG-018: Pipe Transform Not Applied
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View any price on the app
2. Notice the format

#### Expected Behavior
Prices should show as "£99.99" with currency symbol

#### Actual Behavior
Prices show as "99.99" without currency symbol

### 🔍 Investigation Hints
- Check pipe syntax in template
- Verify CurrencyPipe parameters
- Check if CommonModule is imported
- Look for missing pipe symbol

### 📚 Topics Covered
- Angular pipes
- CurrencyPipe
- Pipe parameters

### 💡 Common Cause
```html
<!-- Wrong: missing pipe -->
<span>{{ product.price }}</span>

<!-- Correct -->
<span>{{ product.price | currency:'GBP' }}</span>
```

### 💼 Interview Questions
1. **What are Angular pipes and name some built-in ones?**
   - Pipes transform displayed values. Built-in: DatePipe, CurrencyPipe, DecimalPipe, PercentPipe, JsonPipe, AsyncPipe, UpperCase/LowerCase.
   
2. **How do you create a custom pipe?**
   - Create class with @Pipe decorator and PipeTransform interface. Implement transform method. Mark as pure or impure.

---

## BUG-019: Async Data Shows "undefined" Briefly
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Refresh the dashboard page
2. Watch quickly as it loads
3. Notice brief "undefined" flash

#### Expected Behavior
Show loading state or nothing until data arrives

#### Actual Behavior
"undefined" or empty values flash before data loads

### 🔍 Investigation Hints
- Check async data handling
- Look for missing loading state
- Use safe navigation operator `?.`
- Consider async pipe

### 📚 Topics Covered
- Safe navigation operator
- Loading states
- Async data handling

### 💡 Fix Pattern
```html
<!-- Add null check -->
<h2>{{ user?.name }}</h2>

<!-- Or use loading state -->
@if (isLoading) {
  <p>Loading...</p>
} @else {
  <h2>{{ user.name }}</h2>
}
```

### 💼 Interview Questions
1. **How do you handle async data in templates?**
   - Use async pipe `{{ data$ | async }}`, loading states with @if, safe navigation `?.`, or resolve data before navigation.
   
2. **What is the async pipe?**
   - Subscribes to Observable/Promise, returns latest value. Auto-unsubscribes on destroy. Works with change detection. `{{ observable$ | async }}`

---

## BUG-020: Template Reference Variable Undefined
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Try to use the search input reference
2. Method using #searchInput fails

#### Expected Behavior
Template reference should be accessible

#### Actual Behavior
Error: Cannot read property of undefined

### 🔍 Investigation Hints
- Check template reference syntax #name
- Verify @ViewChild decorator
- Check when accessing (after view init)
- Look at component lifecycle timing

### 📚 Topics Covered
- Template reference variables
- @ViewChild decorator
- Component lifecycle hooks

### 💼 Interview Questions
1. **What are template reference variables?**
   - Declared with `#variableName` on element, provides reference to element or directive. Access in template or via @ViewChild in component.
   
2. **When is @ViewChild available?**
   - After ngAfterViewInit lifecycle hook. Not available in ngOnInit. Use static: true if element is always present (not in @if).

---

# 🟠 LEVEL 2: Form & Validation Bugs

> **Goal:** Learn to debug Angular Reactive Forms and validation

---

## BUG-021: Form Always Invalid Even When Filled
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration page
2. Fill out all fields correctly
3. Submit button remains disabled

#### Expected Behavior
Button should enable when form is valid

#### Actual Behavior
Button stays disabled, form shows as invalid

### 🔍 Investigation Hints
- Console.log `form.valid` and `form.errors`
- Check each FormControl's errors
- Look for hidden required fields
- Check validator configuration

### 📚 Topics Covered
- FormGroup validation
- Form debugging
- Validators configuration

### 💡 Debug Pattern
```typescript
console.log('Form Valid:', this.form.valid);
console.log('Form Errors:', this.form.errors);
Object.keys(this.form.controls).forEach(key => {
  console.log(key, this.form.get(key)?.errors);
});
```

### 💼 Interview Questions
1. **How do you debug why a form is invalid?**
   - Log form.valid, form.errors. Loop through controls and log each control's errors. Check for hidden required fields, validators on FormGroup.
   
2. **What's the difference between form.errors and control.errors?**
   - `form.errors` contains FormGroup-level errors (cross-field validation). `control.errors` contains individual control errors (required, pattern, etc.).

---

## BUG-022: Validation Error Message Not Showing
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to login page
2. Click in email field, then click out (blur)
3. Leave it empty

#### Expected Behavior
"Email is required" error message should appear

#### Actual Behavior
No error message shown

### 🔍 Investigation Hints
- Check error display condition
- Look for touched/dirty check
- Verify error message template
- Check CSS for hidden elements

### 📚 Topics Covered
- Form control states (touched, dirty)
- Error message display
- Conditional rendering

### 💡 Common Cause
```html
<!-- Wrong: missing touched check -->
@if (email.errors?.['required']) {
  <span>Email is required</span>
}

<!-- Correct: check touched -->
@if (email.errors?.['required'] && email.touched) {
  <span>Email is required</span>
}
```

### 💼 Interview Questions
1. **What's the difference between touched, dirty, and pristine?**
   - **touched**: User has focused and blurred. **dirty**: Value has changed. **pristine**: Value hasn't changed. Use touched for showing errors after interaction.
   
2. **Why check touched before showing errors?**
   - Avoid showing errors immediately on page load. Only show after user has interacted with field and left it. Better UX.

---

## BUG-023: Password Confirmation Doesn't Match
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration page
2. Enter password: "Test1234!"
3. Enter confirm password: "Test1234!"
4. Form shows "Passwords don't match"

#### Expected Behavior
Matching passwords should pass validation

#### Actual Behavior
Always shows mismatch error even when identical

### 🔍 Investigation Hints
- Check custom validator function
- Look at how values are compared
- Check validator is on FormGroup not FormControl
- Log both password values

### 📚 Topics Covered
- Cross-field validation
- Custom validators
- FormGroup level validation

### 💡 Fix Pattern
```typescript
// Validator should be on FormGroup
this.form = this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, { validators: this.passwordMatchValidator });

passwordMatchValidator(g: FormGroup) {
  return g.get('password')?.value === g.get('confirmPassword')?.value
    ? null : { mismatch: true };
}
```

### 💼 Interview Questions
1. **How do you validate that two fields match?**
   - Apply validator to FormGroup (not individual control). Access both controls in validator function, compare values, return error or null.
   
2. **Where do you apply cross-field validators?**
   - On the FormGroup that contains both fields, as second argument to fb.group() or using setValidators on the group.

---

## BUG-024: Form Resets Don't Clear Validation Errors
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Fill login form with invalid data
2. Submit (see validation errors)
3. Click "Clear Form" button
4. Errors still visible

#### Expected Behavior
Form reset should clear all validation errors

#### Actual Behavior
Fields cleared but error messages remain

### 🔍 Investigation Hints
- Check reset method implementation
- Look for `form.reset()` vs `form.resetForm()`
- Check if resetting touched/dirty states
- Consider using ViewChild for NgForm

### 📚 Topics Covered
- Form reset methods
- Form state management
- markAsPristine/markAsUntouched

### 💡 Fix Pattern
```typescript
resetForm(): void {
  this.form.reset();
  this.form.markAsPristine();
  this.form.markAsUntouched();
}
```

### 💼 Interview Questions
1. **What does form.reset() do?**
   - Resets values to initial/undefined, sets pristine/untouched only if no validators triggered. May need explicit markAsPristine/markAsUntouched.
   
2. **What's the difference between reset() and setValue()?**
   - `reset()`: Clears values and resets states. `setValue()`: Sets values but doesn't affect validity state. Use reset() to clear form completely.

---

## BUG-025: Dropdown Selection Not Binding
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to checkout page
2. Select a country from dropdown
3. Submit form

#### Expected Behavior
Selected country should be included in form data

#### Actual Behavior
Country field is null/undefined in submission

### 🔍 Investigation Hints
- Check select element binding
- Look for missing formControlName
- Check option value binding
- Log form value on submit

### 📚 Topics Covered
- Select element with reactive forms
- Option value binding
- Form submission data

### 💡 Common Cause
```html
<!-- Wrong: missing value binding -->
<select formControlName="country">
  <option>UK</option>
</select>

<!-- Correct -->
<select formControlName="country">
  <option [value]="'UK'">UK</option>
</select>
```

### 💼 Interview Questions
1. **How do you bind a select element in reactive forms?**
   - Use formControlName on select. Each option needs [value] or [ngValue]. ngValue for objects, value for primitives.
   
2. **What's the difference between [value] and [ngValue]?**
   - `[value]`: Binds as string. `[ngValue]`: Binds actual object/value type. Use ngValue for objects, value for strings.

---

## BUG-026: Email Validator Accepts Invalid Emails
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Security Audit

#### Steps to Reproduce
1. Go to registration
2. Enter email: "test@" (invalid)
3. Form accepts it as valid

#### Expected Behavior
Should reject invalid email formats

#### Actual Behavior
Accepts partial/malformed emails

### 🔍 Investigation Hints
- Check which validator is used
- Validators.email is lenient
- Consider custom regex validator
- Test various email formats

### 📚 Topics Covered
- Validators.email behavior
- Custom validators
- Regex pattern validation

### 💡 Fix Pattern
```typescript
// More strict email validation
email: ['', [
  Validators.required,
  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
]]
```

### 💼 Interview Questions
1. **Why is Validators.email considered lenient?**
   - It follows HTML5 specification which is permissive. Accepts some technically valid but practically unusual formats. Use pattern for stricter validation.
   
2. **How do you create a custom pattern validator?**
   - Use Validators.pattern() with regex: `Validators.pattern(/^regex$/)`. Or create custom ValidatorFn for more complex logic.

---

## BUG-027: Required Checkbox Not Validating
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration
2. Leave "I agree to terms" unchecked
3. Submit form

#### Expected Behavior
Form should be invalid if terms not accepted

#### Actual Behavior
Form submits without checkbox checked

### 🔍 Investigation Hints
- Check how checkbox is bound
- Validators.required doesn't work for false
- Need custom validator for checkbox
- Check initial value

### 📚 Topics Covered
- Checkbox form control
- Validators.requiredTrue
- Boolean validation

### 💡 Fix Pattern
```typescript
// Wrong: Validators.required accepts false
terms: [false, Validators.required]

// Correct
terms: [false, Validators.requiredTrue]
```

### 💼 Interview Questions
1. **Why doesn't Validators.required work for checkboxes?**
   - Required validates that value exists/not empty. `false` is a valid value (not null/empty). Use `Validators.requiredTrue` to require checkbox be checked.
   
2. **What does Validators.requiredTrue do?**
   - Validates that value is exactly `true`. Used for checkboxes that must be checked (terms acceptance, confirmation).

---

## BUG-028: Phone Number Allows Letters
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to checkout shipping form
2. Enter phone: "abc123def"
3. Form accepts it

#### Expected Behavior
Phone should only accept numbers and valid formats

#### Actual Behavior
Accepts any characters

### 🔍 Investigation Hints
- Check validation pattern
- Look for input type attribute
- Consider input masking
- Add pattern validator

### 📚 Topics Covered
- Pattern validators
- Input type="tel"
- Input masking concepts

### 💼 Interview Questions
1. **How do you restrict input to numbers only?**
   - Pattern validator, input type="number" or type="tel", (keypress) handler to prevent non-numeric, input masking library.
   
2. **What's the difference between input type="text" and type="tel"?**
   - `type="tel"`: Shows numeric keyboard on mobile, no validation. `type="number"`: Shows numeric keyboard, validates numeric input, has spinner controls.

---

## BUG-029: FormArray Items Not Removable
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Add multiple addresses in checkout
2. Try to remove the second address
3. Click remove button

#### Expected Behavior
Address should be removed from list

#### Actual Behavior
Nothing happens or wrong item removed

### 🔍 Investigation Hints
- Check FormArray removeAt() usage
- Verify index being passed
- Look for template variable binding
- Check track expression in @for

### 📚 Topics Covered
- FormArray manipulation
- removeAt() method
- Index management

### 💡 Fix Pattern
```typescript
removeAddress(index: number): void {
  (this.form.get('addresses') as FormArray).removeAt(index);
}
```

### 💼 Interview Questions
1. **How do you work with FormArray?**
   - Create with fb.array([]), add with push(), remove with removeAt(index), access controls with at(index) or controls array.
   
2. **How do you iterate FormArray in template?**
   - `@for (control of formArray.controls; track $index)` then use formGroupName="$index" inside, or cast to FormGroup.

---

## BUG-030: Dynamic Validators Not Applied
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Select "Business" account type
2. Company name should become required
3. Leave company name empty
4. Form submits successfully

#### Expected Behavior
Company name required for business accounts

#### Actual Behavior
Company name not validated even when business selected

### 🔍 Investigation Hints
- Check conditional validator logic
- Look for setValidators/clearValidators
- Ensure updateValueAndValidity() called
- Check subscription to type changes

### 📚 Topics Covered
- Dynamic validation
- setValidators()
- updateValueAndValidity()

### 💡 Fix Pattern
```typescript
this.form.get('accountType')?.valueChanges.subscribe(type => {
  const companyControl = this.form.get('companyName');
  if (type === 'business') {
    companyControl?.setValidators([Validators.required]);
  } else {
    companyControl?.clearValidators();
  }
  companyControl?.updateValueAndValidity();
});
```

### 💼 Interview Questions
1. **How do you add validators dynamically?**
   - Use setValidators() to set new validators, clearValidators() to remove. MUST call updateValueAndValidity() after to re-run validation.
   
2. **Why is updateValueAndValidity() necessary?**
   - Validators only run when value changes or manually triggered. After setValidators(), need to trigger re-validation with updateValueAndValidity().

---

# 🔴 LEVEL 3: Service & HTTP Bugs

> **Goal:** Learn to debug services, HTTP calls, and authentication

---

## BUG-031: API Call Returns 401 After Login
**Severity:** Critical | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Login successfully
2. Navigate to products page
3. API calls fail with 401 Unauthorized

#### Expected Behavior
API calls should include auth token

#### Actual Behavior
Token not being sent with requests

### 🔍 Investigation Hints
- Check HTTP interceptor registration
- Verify token is stored after login
- Check interceptor logic for adding header
- Look at Network tab request headers

### 📚 Topics Covered
- HTTP Interceptors
- Token management
- Authorization headers

### 💡 Debug Steps
```typescript
// In interceptor
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const token = localStorage.getItem('token');
  console.log('Interceptor - Token:', token);
  console.log('Request URL:', req.url);
  // ...
}
```

### 💼 Interview Questions
1. **How do HTTP interceptors work in Angular?**
   - Intercept outgoing requests and incoming responses. Chain of handlers. Add headers, log, handle errors, modify requests/responses.
   
2. **How do you add authorization header to all requests?**
   - In interceptor, clone request with added header: `req.clone({ setHeaders: { Authorization: 'Bearer ' + token } })`. Pass to next handler.
   
3. **How do you debug interceptor issues?**
   - Add console.log in intercept method, check Network tab headers, verify interceptor is provided, check if interceptor is before/after others.

---

## BUG-032: Login Succeeds But User Not Stored
**Severity:** Critical | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Login with valid credentials
2. Redirected to dashboard
3. Refresh the page
4. Sent back to login

#### Expected Behavior
User should remain logged in after refresh

#### Actual Behavior
Session lost on page refresh

### 🔍 Investigation Hints
- Check if token saved to localStorage
- Verify app initialization checks for token
- Look at AuthService initialization
- Check APP_INITIALIZER if used

### 📚 Topics Covered
- Token persistence
- App initialization
- localStorage usage

### 💼 Interview Questions
1. **How do you persist auth state across page refreshes?**
   - Store token in localStorage/sessionStorage. On app init, check for token and validate. Restore user state from token or make API call.
   
2. **What is APP_INITIALIZER?**
   - Provider that runs before app starts. Use for loading config, checking auth state. Returns Promise, app waits for completion.

---

## BUG-033: HTTP Error Not Caught
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Disconnect from network/server
2. Try to load products
3. App crashes or shows blank

#### Expected Behavior
Should show user-friendly error message

#### Actual Behavior
Unhandled error, bad user experience

### 🔍 Investigation Hints
- Check Observable error handling
- Look for catchError operator
- Verify error handling in component
- Check if using async pipe vs subscribe

### 📚 Topics Covered
- RxJS error handling
- catchError operator
- Error UI states

### 💡 Fix Pattern
```typescript
this.apiService.getProducts().pipe(
  catchError(error => {
    this.errorMessage = 'Failed to load products';
    return of([]);
  })
).subscribe(products => this.products = products);
```

### 💼 Interview Questions
1. **How do you handle HTTP errors in Angular?**
   - Use catchError in pipe, return fallback Observable. Or handle in subscribe error callback. Global handling with error interceptor.
   
2. **What does catchError do?**
   - Catches errors in Observable stream, allows you to handle them gracefully. Must return new Observable (fallback value or rethrow with throwError).

---

## BUG-034: Duplicate API Calls on Page Load
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Navigate to products page
2. Open Network tab
3. Count API calls to /api/products

#### Expected Behavior
Should make only one API call

#### Actual Behavior
Makes 2-3 duplicate calls

### 🔍 Investigation Hints
- Check for multiple subscriptions
- Look for ngOnInit calling method multiple times
- Check if component recreated
- Look for async pipe + subscribe combo

### 📚 Topics Covered
- Subscription management
- shareReplay operator
- Component lifecycle

### 💡 Common Cause
```html
<!-- Wrong: calling method multiple times -->
<div>{{ getProducts() | async }}</div>

<!-- Correct: use property -->
<div>{{ products$ | async }}</div>
```

### 💼 Interview Questions
1. **How do you prevent duplicate HTTP calls?**
   - Use shareReplay, cache in service, avoid method calls in template that return Observable, check you're not subscribing multiple times.
   
2. **What is shareReplay?**
   - Shares single subscription among multiple subscribers and replays N emissions. `shareReplay(1)` caches one value for late subscribers.

---

## BUG-035: Observable Not Completing (Memory Leak)
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Navigate between pages multiple times
2. Watch memory in DevTools Performance tab
3. Memory keeps growing

#### Expected Behavior
Memory should stabilize

#### Actual Behavior
Memory increases continuously

### 🔍 Investigation Hints
- Check for unsubscribed Observables
- Look for missing takeUntil/takeUntilDestroyed
- Check interval/timer subscriptions
- Verify ngOnDestroy cleanup

### 📚 Topics Covered
- Memory leaks
- Subscription cleanup
- takeUntilDestroyed
- ngOnDestroy

### 💡 Fix Pattern
```typescript
private destroyRef = inject(DestroyRef);

ngOnInit() {
  this.dataService.getData()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(data => this.data = data);
}
```

### 💼 Interview Questions
1. **What causes memory leaks in Angular?**
   - Unsubscribed Observables, event listeners not removed, large data cached in services, DOM elements not cleaned up, timers not cleared.
   
2. **How do you prevent Observable memory leaks?**
   - takeUntilDestroyed(), async pipe (auto-unsubscribes), explicit unsubscribe in ngOnDestroy, take(1) for single emissions.
   
3. **What is takeUntilDestroyed?**
   - Angular utility that completes Observable when component is destroyed. Cleaner than manual Subject pattern. Inject DestroyRef if outside constructor.

---

## BUG-036: Race Condition on Search
**Severity:** Medium | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Type "ipho" quickly in search
2. Then type "ne" (searching "iphone")
3. Results sometimes show wrong data

#### Expected Behavior
Results should match final search term

#### Actual Behavior
Sometimes shows results for "ipho" instead of "iphone"

### 🔍 Investigation Hints
- Check if using switchMap
- Look for multiple concurrent requests
- Verify request cancellation
- Check debounce implementation

### 📚 Topics Covered
- Race conditions
- switchMap operator
- Request cancellation

### 💡 Fix Pattern
```typescript
this.searchSubject.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term))
).subscribe(results => this.results = results);
```

### 💼 Interview Questions
1. **What is a race condition?**
   - When multiple async operations complete in unexpected order. Later request might finish before earlier one, showing stale data.
   
2. **How does switchMap prevent race conditions?**
   - Cancels previous inner subscription when new outer value arrives. Only latest request completes. Perfect for search/autocomplete.

---

## BUG-037: Cart Count Not Updating Globally
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View header cart count (shows 0)
2. Add item to cart from product page
3. Header still shows 0

#### Expected Behavior
Header cart count should update immediately

#### Actual Behavior
Count only updates after page refresh

### 🔍 Investigation Hints
- Check how cart count is shared
- Look for BehaviorSubject/Signal usage
- Verify components subscribe to updates
- Check if using OnPush change detection

### 📚 Topics Covered
- Cross-component communication
- BehaviorSubject
- Signals
- State management

### 💼 Interview Questions
1. **How do you share state between unrelated components?**
   - Service with BehaviorSubject/Signal, state management library, share via common parent (if applicable), event bus pattern.
   
2. **Why would header not update when cart changes?**
   - Not subscribed to cart changes, using snapshot instead of Observable, OnPush detection without signal/async pipe, service not singleton.

---

## BUG-038: API Response Mapping Error
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load orders page
2. Check console for errors

#### Expected Behavior
Orders display correctly

#### Actual Behavior
Error: Cannot read property 'map' of undefined

### 🔍 Investigation Hints
- Check API response structure
- Look at response mapping in service
- Verify expected vs actual response shape
- Check if array exists before mapping

### 📚 Topics Covered
- API response handling
- Safe data access
- Optional chaining

### 💡 Fix Pattern
```typescript
// Wrong
return this.http.get<Order[]>(url).pipe(
  map(response => response.map(order => ...))
);

// Correct
return this.http.get<Order[]>(url).pipe(
  map(response => (response || []).map(order => ...))
);
```

### 💼 Interview Questions
1. **How do you handle unexpected API responses?**
   - Null checks, default values, optional chaining, try-catch, validate response shape, type guards.
   
2. **What is optional chaining in JavaScript?**
   - `?.` operator that returns undefined instead of throwing if property doesn't exist. `obj?.prop?.nested` is safe even if obj is null.

---

## BUG-039: Token Refresh Race Condition
**Severity:** Critical | **Time to Fix:** 45 minutes

### 🔴 Bug Report
**Reported By:** Security Testing

#### Steps to Reproduce
1. Wait for token to expire
2. Have multiple API calls triggered
3. Multiple refresh token requests sent

#### Expected Behavior
Only one refresh token request

#### Actual Behavior
Multiple parallel refresh requests, causing issues

### 🔍 Investigation Hints
- Check token refresh logic
- Look for shareReplay on refresh call
- Implement refresh queue
- Use flag to track refresh in progress

### 📚 Topics Covered
- Token refresh pattern
- Request queuing
- shareReplay operator

### 💼 Interview Questions
1. **How do you prevent multiple token refresh requests?**
   - Use shareReplay on refresh Observable, flag to track refresh in progress, queue other requests until refresh completes.
   
2. **What is the token refresh flow?**
   - Detect expired token, pause other requests, send refresh request with refresh token, get new access token, retry paused requests, handle refresh failure.

---

## BUG-040: Service Returns Stale Data
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View product details
2. Admin updates product price
3. Navigate away and back
4. Old price still shown

#### Expected Behavior
Should fetch fresh data on navigation

#### Actual Behavior
Service returns cached/stale data

### 🔍 Investigation Hints
- Check for caching in service
- Look for shareReplay without refCount
- Verify data fetching on route change
- Consider cache invalidation

### 📚 Topics Covered
- Data caching
- Cache invalidation
- Service data freshness

### 💼 Interview Questions
1. **How do you implement cache invalidation?**
   - Time-based expiry, event-based (on edit/delete), manual clear, use stale-while-revalidate pattern, ETags.
   
2. **When should you cache API responses?**
   - Static data, expensive queries, data rarely changes. Consider freshness requirements, storage limits, invalidation complexity.

---

## BUG-041: Logout Doesn't Clear All State
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Security Testing

#### Steps to Reproduce
1. Login as User A, view cart
2. Logout
3. Login as User B
4. Cart shows User A's items

#### Expected Behavior
Complete state reset on logout

#### Actual Behavior
Previous user data persists

### 🔍 Investigation Hints
- Check logout method implementation
- Verify all services are reset
- Look for state in localStorage
- Check signal/BehaviorSubject reset

### 📚 Topics Covered
- State cleanup
- Service reset
- Security best practices

### 💼 Interview Questions
1. **What should happen on logout?**
   - Clear token, clear user state, reset service data, clear localStorage, redirect to login, optionally clear all caches.
   
2. **How do you reset service state?**
   - Reset BehaviorSubject/Signal values, clear caches, call reset methods on services, or reload the app.

---

## BUG-042: SSR Hydration Mismatch
**Severity:** Medium | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** SSR Testing

#### Steps to Reproduce
1. Enable SSR
2. Load any page
3. Check console for hydration errors

#### Expected Behavior
Server and client render should match

#### Actual Behavior
Hydration mismatch warnings in console

### 🔍 Investigation Hints
- Check for browser-only code
- Look for Date/time rendering
- Check random values in templates
- Use isPlatformBrowser for browser code

### 📚 Topics Covered
- Server-side rendering
- Hydration
- Platform detection

### 💼 Interview Questions
1. **What causes hydration mismatches?**
   - Different render on server vs client: Date.now(), Math.random(), browser APIs (window/document), client-only state.
   
2. **How do you fix hydration issues?**
   - Check isPlatformBrowser before browser APIs, use deterministic values, defer client-only content with afterNextRender(), consistent state between server/client.

---

# ⚫ LEVEL 4: Advanced & Performance Bugs

> **Goal:** Master complex debugging scenarios

---

## BUG-043: Change Detection Not Triggering
**Severity:** High | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to cart page (using OnPush)
2. Update quantity via service
3. UI doesn't update

#### Expected Behavior
UI should reflect updated quantity

#### Actual Behavior
UI remains stale until interaction

### 🔍 Investigation Hints
- Check ChangeDetectionStrategy
- Look for mutating objects
- Verify immutable data patterns
- Consider markForCheck() or signals

### 📚 Topics Covered
- OnPush change detection
- Immutability
- ChangeDetectorRef
- Angular Signals

### 💡 Fix Pattern
```typescript
// With OnPush, must use immutable updates
// Wrong
this.items[0].quantity = 5;

// Correct
this.items = this.items.map((item, i) => 
  i === 0 ? { ...item, quantity: 5 } : item
);
```

### 💼 Interview Questions
1. **What triggers change detection with OnPush?**
   - @Input reference change, DOM event in component/child, async pipe emission, explicit markForCheck()/detectChanges(), signal update.
   
2. **Why does mutating objects fail with OnPush?**
   - OnPush compares references like `===`. Mutating changes properties but reference stays same. Must create new object for detection.
   
3. **How do you debug change detection issues?**
   - Add console.log in ngDoCheck, use Angular DevTools profiler, check @Input references, verify OnPush strategy, check async pipe usage.

---

## BUG-044: ExpressionChangedAfterItHasBeenCheckedError
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load any page
2. Check console in development mode

#### Expected Behavior
No change detection errors

#### Actual Behavior
ExpressionChangedAfterItHasBeenCheckedError in console

### 🔍 Investigation Hints
- Look for data changing in ngAfterViewInit
- Check for getters with side effects
- Look for shared service updates
- Consider using ngAfterContentChecked timing

### 📚 Topics Covered
- Change detection lifecycle
- Debugging CD errors
- Best practices for data updates

### 💡 Common Causes
```typescript
// Wrong: changing data in afterViewInit triggers re-check
ngAfterViewInit() {
  this.title = 'New Title'; // Error!
}

// Fix: use setTimeout or ChangeDetectorRef
ngAfterViewInit() {
  setTimeout(() => this.title = 'New Title');
}
```

### 💼 Interview Questions
1. **What causes ExpressionChangedAfterItHasBeenCheckedError?**
   - Data changes after change detection completes but before next cycle. Dev mode runs CD twice to detect this. Common in ngAfterViewInit/ngAfterViewChecked.
   
2. **How do you fix this error?**
   - Move code to ngOnInit if possible, use setTimeout to defer to next cycle, use ChangeDetectorRef.detectChanges(), restructure to avoid the pattern.

---

## BUG-045: Zone.js Performance Degradation
**Severity:** High | **Time to Fix:** 40 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Open products page
2. Scroll through list
3. Notice lag and janky scrolling

#### Expected Behavior
Smooth 60fps scrolling

#### Actual Behavior
Choppy scroll, high CPU usage

### 🔍 Investigation Hints
- Check for scroll event handlers
- Look for zone pollution
- Profile with Angular DevTools
- Consider runOutsideAngular

### 📚 Topics Covered
- NgZone
- runOutsideAngular
- Performance profiling

### 💡 Fix Pattern
```typescript
constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.ngZone.runOutsideAngular(() => {
    window.addEventListener('scroll', this.onScroll);
  });
}
```

### 💼 Interview Questions
1. **What is NgZone?**
   - Angular's execution context that triggers change detection. Any async operation in zone triggers CD. Zone.js patches all async APIs.
   
2. **When should you use runOutsideAngular?**
   - High-frequency events (scroll, mousemove), animations, third-party libraries, RequestAnimationFrame loops. Prevents unnecessary change detection.
   
3. **How do you profile Angular performance?**
   - Angular DevTools profiler, Chrome Performance tab, check change detection cycles, identify long tasks, use OnPush strategically.

---

## BUG-046: Router Memory Leak
**Severity:** High | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Use router events subscription
2. Navigate between pages 20+ times
3. Check memory usage

#### Expected Behavior
Stable memory usage

#### Actual Behavior
Memory grows with each navigation

### 🔍 Investigation Hints
- Check router event subscriptions
- Verify cleanup in ngOnDestroy
- Look for event listeners not removed
- Check attached components

### 📚 Topics Covered
- Router subscriptions
- Subscription cleanup
- Memory profiling

### 💼 Interview Questions
1. **How do you subscribe to router events safely?**
   - Use takeUntilDestroyed(), manage subscription manually with ngOnDestroy, or use async pipe for route params.
   
2. **What router events are available?**
   - NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RouteConfigLoadStart/End, ActivationStart/End, etc.

---

## BUG-047: Lazy Loaded Module Loads Multiple Times
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to lazy route
2. Navigate away
3. Navigate back to lazy route
4. Check network tab

#### Expected Behavior
Module chunk loads once, cached

#### Actual Behavior
Module chunk downloaded every time

### 🔍 Investigation Hints
- Check route configuration
- Look for incorrect lazy loading syntax
- Verify caching headers
- Check preloading strategy

### 📚 Topics Covered
- Lazy loading
- Module caching
- Preloading strategies

### 💼 Interview Questions
1. **How does Angular lazy loading work?**
   - Use loadChildren/loadComponent with dynamic import. Module bundled separately, loaded on first navigation to route. Browser caches the chunk.
   
2. **What are preloading strategies?**
   - PreloadAllModules: Load all lazy modules after initial. NoPreloading (default): On-demand only. Custom: Choose which to preload based on conditions.

---

## BUG-048: Signal Effect Runs Infinitely
**Severity:** Critical | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to page using signals
2. Browser freezes
3. Must force close tab

#### Expected Behavior
Effect runs only when dependencies change

#### Actual Behavior
Effect runs infinitely, causing freeze

### 🔍 Investigation Hints
- Check effect() implementation
- Look for writing to signals inside effect
- Verify no circular dependencies
- Use untracked() if needed

### 📚 Topics Covered
- Angular Signals
- effect() function
- Circular dependencies
- untracked()

### 💡 Common Cause
```typescript
// Wrong: writing to signal read in same effect
effect(() => {
  const value = this.mySignal();
  this.mySignal.set(value + 1); // Infinite loop!
});

// Correct: use untracked for writes
effect(() => {
  const value = this.mySignal();
  untracked(() => {
    this.otherSignal.set(value * 2);
  });
});
```

### 💼 Interview Questions
1. **What causes infinite effect loops?**
   - Writing to a signal that's also read in the same effect creates cycle. Each write triggers the effect again.
   
2. **What is untracked() in signals?**
   - Reads signal without establishing dependency. Effect won't re-run when untracked signals change. Use to break circular dependencies.
   
3. **When should you use effect()?**
   - Side effects: logging, localStorage sync, analytics. NOT for computed values (use computed()). Avoid complex logic in effects.

---

## BUG-049: Directive Not Applied to Dynamic Content
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load component with innerHTML content
2. Content includes elements with directive selectors
3. Directives don't work

#### Expected Behavior
Directives should apply to dynamic content

#### Actual Behavior
Directives ignored on innerHTML content

### 🔍 Investigation Hints
- innerHTML bypasses Angular compilation
- Consider DomSanitizer
- Use structural alternatives
- Consider ViewContainerRef for dynamic content

### 📚 Topics Covered
- Dynamic content
- innerHTML limitations
- Security sanitization
- Dynamic component creation

### 💼 Interview Questions
1. **Why don't directives work on innerHTML?**
   - innerHTML inserts raw HTML, bypasses Angular template compilation. Directives need compilation to be recognized and instantiated.
   
2. **How do you handle dynamic content safely?**
   - DomSanitizer for trusted HTML, use structural directives, dynamic components with ViewContainerRef, avoid innerHTML with user content.

---

## BUG-050: ViewChild Undefined in ngOnInit
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Access ViewChild in ngOnInit
2. Get undefined error

#### Expected Behavior
ViewChild should be accessible

#### Actual Behavior
ViewChild is undefined

### 🔍 Investigation Hints
- ViewChild not available until ngAfterViewInit
- Check if element is in @if block
- Consider static: true option
- Use correct lifecycle hook

### 📚 Topics Covered
- Component lifecycle
- ViewChild timing
- static option

### 💡 Fix Pattern
```typescript
// Wrong
ngOnInit() {
  console.log(this.myElement); // undefined
}

// Correct
ngAfterViewInit() {
  console.log(this.myElement); // works
}

// Or use static: true if element always exists
@ViewChild('element', { static: true }) myElement: ElementRef;
```

### 💼 Interview Questions
1. **When is ViewChild available?**
   - After ngAfterViewInit. Before that, view hasn't been created. Use static: true only if element is not behind structural directive.
   
2. **What does static: true mean in ViewChild?**
   - Resolve before change detection (available in ngOnInit). Only works if element is not inside @if/*ngIf. Defaults to false.

---

## BUG-051: Content Projection Not Working
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Use card component with projected content
2. Content doesn't appear

#### Expected Behavior
Projected content renders inside component

#### Actual Behavior
Content missing/not displayed

### 🔍 Investigation Hints
- Check ng-content placement
- Verify component selector usage
- Look for multiple ng-content without select
- Check for *ngIf on ng-content

### 📚 Topics Covered
- Content projection
- ng-content
- select attribute
- Multi-slot projection

### 💼 Interview Questions
1. **What is content projection?**
   - Inserting content from parent into child component via ng-content. Parent provides content, child decides where to place it.
   
2. **How do you do multi-slot projection?**
   - Use `<ng-content select="selector">` with different selectors. Parent content matches slots by CSS selector (element, class, attribute).

---

## BUG-052: Reactive Form Performance with Large Arrays
**Severity:** High | **Time to Fix:** 40 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Load form with 100+ FormArray items
2. Type in any field
3. Notice severe lag

#### Expected Behavior
Smooth typing response

#### Actual Behavior
500ms+ delay between keystrokes

### 🔍 Investigation Hints
- Check valueChanges subscriptions
- Look for unnecessary validations
- Consider updateOn: 'blur'
- Profile change detection cycles

### 📚 Topics Covered
- FormArray performance
- updateOn option
- OnPush with forms
- Validation optimization

### 💡 Fix Pattern
```typescript
// Optimize with updateOn: 'blur'
this.fb.control('', {
  validators: Validators.required,
  updateOn: 'blur'
});
```

### 💼 Interview Questions
1. **How do you optimize large forms?**
   - Use updateOn: 'blur' or 'submit', lazy validation, OnPush change detection, virtual scrolling for form arrays, debounce valueChanges.
   
2. **What is updateOn option?**
   - Controls when form control updates: 'change' (every keystroke, default), 'blur' (on blur), 'submit' (on form submit). Reduces validation triggers.

---

## BUG-053: Animation Triggers Zone Pollution
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Page with many animations
2. Animations keep triggering change detection
3. High CPU usage

#### Expected Behavior
Animations shouldn't cause excessive CD

#### Actual Behavior
Every frame triggers change detection

### 🔍 Investigation Hints
- Check animation callbacks
- Look for zone pollution
- Consider web animations API
- Profile with Angular DevTools

### 📚 Topics Covered
- Angular animations
- Zone.js and animations
- Performance optimization

### 💼 Interview Questions
1. **How do Angular animations affect change detection?**
   - Animation callbacks run in zone, triggering CD each frame. Many animations = many CD cycles = poor performance.
   
2. **How do you optimize animations for performance?**
   - Use CSS animations where possible, run in NgZone.runOutsideAngular(), use Web Animations API, reduce animated elements.

---

## BUG-054: Resolver Blocks Route Navigation
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to product detail
2. If API slow, navigation hangs
3. User stuck with no feedback

#### Expected Behavior
Show loading indicator during resolve

#### Actual Behavior
No feedback, appears frozen

### 🔍 Investigation Hints
- Check resolver implementation
- Consider adding loading indicator
- Look at resolver timeout handling
- Consider lazy data loading instead

### 📚 Topics Covered
- Route resolvers
- Navigation events
- Loading states
- UX during data loading

### 💡 Alternative Pattern
```typescript
// Instead of resolver, load in component
ngOnInit() {
  this.isLoading = true;
  this.route.params.pipe(
    switchMap(params => this.api.getProduct(params['id']))
  ).subscribe({
    next: product => {
      this.product = product;
      this.isLoading = false;
    },
    error: () => this.isLoading = false
  });
}
```

### 💼 Interview Questions
1. **What are the pros and cons of resolvers?**
   - **Pros**: Data ready when component loads, cleaner component code. **Cons**: Blocks navigation, no loading feedback, harder to handle errors gracefully.
   
2. **When should you use resolvers vs component loading?**
   - Resolvers for critical data that must exist. Component loading for better UX with loading states. Consider skeleton screens.

---

# 📊 Bug Summary Statistics

| Level | Bugs | Topics Covered | Estimated Time |
|-------|------|----------------|----------------|
| Level 0: CSS/Visual | 10 | CSS, DevTools, Responsive | 2-3h |
| Level 1: Template | 10 | Binding, Directives, Pipes | 3-4h |
| Level 2: Forms | 10 | Reactive Forms, Validation | 4-5h |
| Level 3: Services | 12 | HTTP, Auth, State | 6-8h |
| Level 4: Advanced | 12 | Performance, Signals, CD | 7-10h |
| **TOTAL** | **60** | All Angular Topics | **28-38h** |

---

## 🎓 Debugging Skills Progression

### After Level 0 (CSS Bugs):
- ✅ Use Browser DevTools Elements panel
- ✅ Inspect and modify CSS live
- ✅ Debug responsive issues
- ✅ Identify accessibility issues

### After Level 1 (Template Bugs):
- ✅ Debug binding issues
- ✅ Use console.log effectively
- ✅ Read Angular error messages
- ✅ Understand template syntax

### After Level 2 (Form Bugs):
- ✅ Debug reactive forms
- ✅ Understand validation flow
- ✅ Fix cross-field validation
- ✅ Handle form state

### After Level 3 (Service Bugs):
- ✅ Use Network tab for API debugging
- ✅ Debug interceptors
- ✅ Handle async errors
- ✅ Fix race conditions

### After Level 4 (Advanced Bugs):
- ✅ Profile performance issues
- ✅ Debug change detection
- ✅ Fix memory leaks
- ✅ Optimize applications

---

## 🔑 Complete Debugging Interview Guide

### Common Debugging Interview Questions:
1. "How do you debug an Angular application?"
2. "How would you fix a memory leak?"
3. "Explain the ExpressionChangedAfterItHasBeenCheckedError"
4. "How do you debug HTTP requests?"
5. "What tools do you use for performance profiling?"
6. "How do you handle race conditions in Angular?"
7. "Explain OnPush change detection debugging"
8. "How do you find why a form is invalid?"
9. "How do you debug component communication issues?"
10. "What causes infinite loops in Angular signals?"

### Key Debugging Tools:
- **Browser DevTools**: Elements, Console, Network, Performance, Sources
- **Angular DevTools**: Component tree, Profiler, Change detection
- **VS Code**: Debugger, breakpoints, TypeScript checking
- **RxJS DevTools**: Observable debugging (browser extension)

---

## 📝 Bug Reproduction Environment

To introduce these bugs for learning:
1. Create a new branch: `git checkout -b bugs/training`
2. Introduce bugs intentionally in code
3. Team members fix bugs and submit PRs
4. Review fixes together for learning

---

**Document Version:** 4.0 - Enhanced with Interview Questions  
**Last Updated:** January 2025  
**Total Interview Questions:** 90+  
**Maintained By:** TechCorp Development Team
# TechCorp Enterprise Portal - JIRA Bug Tickets

## 🐛 Bug Tracking Overview

**Project:** TechCorp Enterprise Portal (Angular 21)  
**Purpose:** Learn debugging skills from basic to advanced  
**Total Bugs:** 54 | **Estimated Fix Time:** 45-60 hours

> ⚠️ **IMPORTANT FOR TRAINERS:**  
> The bugs listed below are **NOT currently in the application**. The application is clean and working.  
> These bugs should be **INTRODUCED intentionally** by trainers/team leads for training purposes.  
> Create a separate branch (e.g., `git checkout -b bugs/training-level-0`) and introduce bugs one at a time.

> **Learning Approach:** Each bug teaches specific debugging skills. Bugs are repeated across topics to reinforce learning.

---

## 🎯 Bug Organization Philosophy

Bugs are organized in **progressive difficulty levels**:

| Level | Bug Type | Skills Learned | Count |
|-------|----------|----------------|-------|
| **Level 0** | HTML/CSS Visual Bugs | Browser DevTools, CSS debugging | 10 |
| **Level 1** | Template & Binding Bugs | Angular template syntax, data binding | 10 |
| **Level 2** | Form & Validation Bugs | Reactive forms, validators | 10 |
| **Level 3** | Service & HTTP Bugs | API calls, interceptors, auth | 12 |
| **Level 4** | Advanced & Performance Bugs | Memory leaks, race conditions, change detection | 12 |

---

## 🔧 Debugging Tools You'll Learn

1. **Browser DevTools** - Elements, Console, Network, Application tabs
2. **Angular DevTools** - Component explorer, profiler
3. **VS Code Debugger** - Breakpoints, watch variables
4. **Console Logging** - Strategic console.log placement
5. **Network Tab** - API request/response inspection

---

# 🟢 LEVEL 0: HTML/CSS Visual Bugs

> **Goal:** Learn to use Browser DevTools to identify and fix visual issues

---

## BUG-001: Login Button Not Visible on Mobile
**Severity:** High | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team  
**Environment:** Mobile (iPhone 12, Chrome)

#### Steps to Reproduce
1. Open app on mobile device (or use Chrome DevTools mobile view)
2. Navigate to login page
3. Scroll down to see the login form

#### Expected Behavior
Login button should be fully visible and clickable

#### Actual Behavior
Login button is cut off at the bottom of the screen, cannot be clicked

### 🔍 Investigation Hints
- Check the form container's CSS
- Look for `overflow: hidden` issues
- Check `height` or `max-height` properties
- Use DevTools Elements panel to inspect

### 📚 Topics Covered
- CSS overflow property
- Mobile responsive design
- Chrome DevTools mobile simulation

### 🎓 Learning Objectives
- Learn to simulate mobile devices in DevTools
- Understand CSS overflow behavior
- Debug responsive layout issues

---

## BUG-002: Product Card Image Stretched
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** Design Team

#### Steps to Reproduce
1. Navigate to Products page
2. View any product card
3. Notice the product image

#### Expected Behavior
Product images should maintain aspect ratio (not stretched)

#### Actual Behavior
Images appear stretched/distorted when dimensions don't match

### 🔍 Investigation Hints
- Check `img` tag CSS properties
- Look for missing `object-fit` property
- Inspect the image container dimensions

### 📚 Topics Covered
- CSS object-fit property
- Image aspect ratio
- Responsive images

### 💡 Fix Pattern
```css
.product-image {
  object-fit: cover; /* or contain */
  width: 100%;
  height: 200px;
}
```

---

## BUG-003: Header Dropdown Menu Hidden Behind Content
**Severity:** High | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** User Feedback

#### Steps to Reproduce
1. Login to the application
2. Click on user profile dropdown in header
3. Notice the dropdown menu

#### Expected Behavior
Dropdown menu should appear above all other content

#### Actual Behavior
Dropdown is partially hidden behind the main content area

### 🔍 Investigation Hints
- Check `z-index` values
- Look at parent element positioning
- Inspect stacking context

### 📚 Topics Covered
- CSS z-index
- Stacking context
- Position property

### 🎓 Learning Objectives
- Understand CSS stacking context
- Debug z-index issues
- Learn position: relative/absolute relationship

---

## BUG-004: Footer Not Sticking to Bottom on Short Pages
**Severity:** Low | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to a page with little content (e.g., empty orders page)
2. View the footer position

#### Expected Behavior
Footer should always be at the bottom of the viewport

#### Actual Behavior
Footer floats in the middle of the page when content is short

### 🔍 Investigation Hints
- Check app layout structure
- Look for flexbox or grid layout
- Check min-height on main content area

### 📚 Topics Covered
- CSS Flexbox
- Sticky footer pattern
- min-height: 100vh

### 💡 Fix Pattern
```css
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
```

---

## BUG-005: Text Overlapping on Small Screens
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** Mobile Testing

#### Steps to Reproduce
1. Open dashboard on mobile (320px width)
2. View the statistics cards
3. Notice the text in cards

#### Expected Behavior
Text should wrap or truncate gracefully

#### Actual Behavior
Text overflows and overlaps with adjacent elements

### 🔍 Investigation Hints
- Check for `white-space: nowrap`
- Look for missing `overflow` handling
- Check responsive breakpoints

### 📚 Topics Covered
- CSS text-overflow
- word-wrap/word-break
- Responsive typography

---

## BUG-006: Button Text Color Unreadable
**Severity:** High | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** Accessibility Audit

#### Steps to Reproduce
1. Navigate to any page with secondary buttons
2. View the button text

#### Expected Behavior
Button text should have sufficient contrast (WCAG AA: 4.5:1)

#### Actual Behavior
Light gray text on light background, hard to read

### 🔍 Investigation Hints
- Use DevTools accessibility panel
- Check color contrast ratio
- Look at button CSS classes

### 📚 Topics Covered
- Color contrast accessibility
- WCAG guidelines
- CSS color properties

### 🎓 Learning Objectives
- Learn to use accessibility audit tools
- Understand WCAG contrast requirements
- Fix accessibility issues

---

## BUG-007: Loading Spinner Not Centered
**Severity:** Low | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Refresh the products page
2. Observe the loading spinner position

#### Expected Behavior
Spinner should be centered both horizontally and vertically

#### Actual Behavior
Spinner appears in top-left corner

### 🔍 Investigation Hints
- Check spinner container CSS
- Look for centering technique (flexbox/grid)
- Check parent element dimensions

### 📚 Topics Covered
- CSS centering techniques
- Flexbox justify-content/align-items
- Container dimensions

---

## BUG-008: Hover State Persists on Touch Devices
**Severity:** Low | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** Mobile Testing

#### Steps to Reproduce
1. Open app on touch device (tablet/phone)
2. Tap on a product card
3. Navigate away and back

#### Expected Behavior
Hover effects should not persist after tap

#### Actual Behavior
Hover effect "sticks" on touch devices

### 🔍 Investigation Hints
- Check hover CSS selectors
- Look into `@media (hover: hover)` query
- Consider `:active` vs `:hover`

### 📚 Topics Covered
- CSS media queries for hover
- Touch device CSS
- Pointer media feature

### 💡 Fix Pattern
```css
@media (hover: hover) {
  .card:hover {
    transform: scale(1.02);
  }
}
```

---

## BUG-009: Input Field Label Overlaps Text
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** User Feedback

#### Steps to Reproduce
1. Go to login page
2. Click on email input
3. Start typing
4. Notice the floating label

#### Expected Behavior
Label should move above the input when focused/filled

#### Actual Behavior
Label stays in place and overlaps with typed text

### 🔍 Investigation Hints
- Check CSS for floating label pattern
- Look for `:focus` and `:not(:placeholder-shown)` selectors
- Check transform/transition properties

### 📚 Topics Covered
- Floating label CSS pattern
- CSS pseudo-selectors
- CSS transitions

---

## BUG-010: Sidebar Scrollbar Always Visible
**Severity:** Low | **Time to Fix:** 10 minutes

### 🔴 Bug Report
**Reported By:** Design Team

#### Steps to Reproduce
1. View any page with sidebar
2. Notice the scrollbar appearance

#### Expected Behavior
Scrollbar should only appear when content overflows

#### Actual Behavior
Scrollbar always visible even with no overflow

### 🔍 Investigation Hints
- Check `overflow` property values
- Consider `overflow: auto` vs `overflow: scroll`
- Check for custom scrollbar CSS

### 📚 Topics Covered
- CSS overflow property
- Custom scrollbar styling
- overflow: auto vs scroll

---

# 🟡 LEVEL 1: Template & Binding Bugs

> **Goal:** Learn Angular template debugging with DevTools and console

---

## BUG-011: Product Name Shows [object Object]
**Severity:** High | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to Products page
2. View product card titles

#### Expected Behavior
Product name should display (e.g., "Wireless Headphones")

#### Actual Behavior
Shows "[object Object]" instead of product name

### 🔍 Investigation Hints
- Check template interpolation syntax
- Look at how product data is structured
- Console.log the product object
- Check if accessing nested property correctly

### 📚 Topics Covered
- Angular interpolation `{{ }}`
- Object property access
- Debugging with console.log

### 💡 Common Cause
```html
<!-- Wrong -->
<h5>{{ product }}</h5>

<!-- Correct -->
<h5>{{ product.name }}</h5>
```

---

## BUG-012: Click Event Not Firing on Button
**Severity:** High | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to product detail page
2. Click "Add to Cart" button
3. Nothing happens

#### Expected Behavior
Item should be added to cart, notification shown

#### Actual Behavior
Button click does nothing

### 🔍 Investigation Hints
- Check event binding syntax `(click)`
- Look for typos in method name
- Check if method exists in component
- Add console.log in method to verify

### 📚 Topics Covered
- Angular event binding
- Component method calls
- DevTools event listeners

### 💡 Common Causes
```html
<!-- Wrong: using onclick instead of (click) -->
<button onclick="addToCart()">Add</button>

<!-- Correct -->
<button (click)="addToCart()">Add</button>
```

---

## BUG-013: Image Not Loading (Property Binding Issue)
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to Products page
2. View product images

#### Expected Behavior
Product images should load

#### Actual Behavior
Broken image icons shown

### 🔍 Investigation Hints
- Check Network tab for image requests
- Verify the `src` binding syntax
- Check if using interpolation vs property binding
- Inspect the actual `src` attribute value

### 📚 Topics Covered
- Property binding `[src]`
- Interpolation in attributes
- Network tab debugging

### 💡 Common Cause
```html
<!-- Wrong: interpolation creates wrong URL -->
<img src="{{ product.image }}">

<!-- Correct: property binding -->
<img [src]="product.image">
```

---

## BUG-014: List Not Updating After Adding Item
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** User Feedback

#### Steps to Reproduce
1. View cart page
2. Add new item from another tab
3. Return to cart page

#### Expected Behavior
Cart should show newly added item

#### Actual Behavior
Cart shows old data until page refresh

### 🔍 Investigation Hints
- Check if using OnPush change detection
- Look at how data is fetched in ngOnInit
- Consider using a service with BehaviorSubject
- Check if cart data is re-fetched on navigation

### 📚 Topics Covered
- Change detection
- Component lifecycle
- Data refresh patterns

---

## BUG-015: Conditional Element Always Showing
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Logout from the application
2. Navigate to any page
3. Notice "Welcome, User!" message

#### Expected Behavior
Welcome message should only show for logged-in users

#### Actual Behavior
Welcome message shows even when not logged in

### 🔍 Investigation Hints
- Check `@if` or `*ngIf` condition
- Verify the condition variable value
- Console.log the condition
- Check async data loading

### 📚 Topics Covered
- Angular @if directive
- Boolean conditions in templates
- Truthy/falsy values

### 💡 Common Cause
```html
<!-- Wrong: checking object instead of property -->
@if (user) { ... }

<!-- Correct: check specific property -->
@if (user?.isLoggedIn) { ... }
```

---

## BUG-016: Loop Index Incorrect in Nested @for
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. View order detail page with multiple items
2. Click "Remove" on any item
3. Wrong item gets removed

#### Expected Behavior
Clicked item should be removed

#### Actual Behavior
Different item removed (index mismatch)

### 🔍 Investigation Hints
- Check @for loop track expression
- Look for nested loop index conflicts
- Verify index usage in remove function
- Check item identifier vs index

### 📚 Topics Covered
- @for loop with track
- Index in iterations
- Immutable operations

### 💡 Fix Pattern
```html
<!-- Wrong: using index -->
@for (item of items; track $index) {
  <button (click)="remove($index)">Remove</button>
}

<!-- Correct: use unique ID -->
@for (item of items; track item.id) {
  <button (click)="remove(item.id)">Remove</button>
}
```

---

## BUG-017: Two-Way Binding Not Working
**Severity:** High | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to quantity input in cart
2. Type a new quantity
3. Check the total price

#### Expected Behavior
Total should update as quantity changes

#### Actual Behavior
Total doesn't update when typing

### 🔍 Investigation Hints
- Check two-way binding syntax `[(ngModel)]`
- Verify FormsModule is imported
- Look for missing banana-in-box syntax
- Check if using reactive forms instead

### 📚 Topics Covered
- Two-way binding
- ngModel
- FormsModule import

### 💡 Common Cause
```html
<!-- Wrong: missing two-way binding -->
<input [ngModel]="quantity">

<!-- Correct -->
<input [(ngModel)]="quantity">
```

---

## BUG-018: Pipe Transform Not Applied
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View any price on the app
2. Notice the format

#### Expected Behavior
Prices should show as "£99.99" with currency symbol

#### Actual Behavior
Prices show as "99.99" without currency symbol

### 🔍 Investigation Hints
- Check pipe syntax in template
- Verify CurrencyPipe parameters
- Check if CommonModule is imported
- Look for missing pipe symbol

### 📚 Topics Covered
- Angular pipes
- CurrencyPipe
- Pipe parameters

### 💡 Common Cause
```html
<!-- Wrong: missing pipe -->
<span>{{ product.price }}</span>

<!-- Correct -->
<span>{{ product.price | currency:'GBP' }}</span>
```

---

## BUG-019: Async Data Shows "undefined" Briefly
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Refresh the dashboard page
2. Watch quickly as it loads
3. Notice brief "undefined" flash

#### Expected Behavior
Show loading state or nothing until data arrives

#### Actual Behavior
"undefined" or empty values flash before data loads

### 🔍 Investigation Hints
- Check async data handling
- Look for missing loading state
- Use safe navigation operator `?.`
- Consider async pipe

### 📚 Topics Covered
- Safe navigation operator
- Loading states
- Async data handling

### 💡 Fix Pattern
```html
<!-- Add null check -->
<h2>{{ user?.name }}</h2>

<!-- Or use loading state -->
@if (isLoading) {
  <p>Loading...</p>
} @else {
  <h2>{{ user.name }}</h2>
}
```

---

## BUG-020: Template Reference Variable Undefined
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Try to use the search input reference
2. Method using #searchInput fails

#### Expected Behavior
Template reference should be accessible

#### Actual Behavior
Error: Cannot read property of undefined

### 🔍 Investigation Hints
- Check template reference syntax #name
- Verify @ViewChild decorator
- Check when accessing (after view init)
- Look at component lifecycle timing

### 📚 Topics Covered
- Template reference variables
- @ViewChild decorator
- Component lifecycle hooks

---

# 🟠 LEVEL 2: Form & Validation Bugs

> **Goal:** Learn to debug Angular Reactive Forms and validation

---

## BUG-021: Form Always Invalid Even When Filled
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration page
2. Fill out all fields correctly
3. Submit button remains disabled

#### Expected Behavior
Button should enable when form is valid

#### Actual Behavior
Button stays disabled, form shows as invalid

### 🔍 Investigation Hints
- Console.log `form.valid` and `form.errors`
- Check each FormControl's errors
- Look for hidden required fields
- Check validator configuration

### 📚 Topics Covered
- FormGroup validation
- Form debugging
- Validators configuration

### 💡 Debug Pattern
```typescript
console.log('Form Valid:', this.form.valid);
console.log('Form Errors:', this.form.errors);
Object.keys(this.form.controls).forEach(key => {
  console.log(key, this.form.get(key)?.errors);
});
```

---

## BUG-022: Validation Error Message Not Showing
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to login page
2. Click in email field, then click out (blur)
3. Leave it empty

#### Expected Behavior
"Email is required" error message should appear

#### Actual Behavior
No error message shown

### 🔍 Investigation Hints
- Check error display condition
- Look for touched/dirty check
- Verify error message template
- Check CSS for hidden elements

### 📚 Topics Covered
- Form control states (touched, dirty)
- Error message display
- Conditional rendering

### 💡 Common Cause
```html
<!-- Wrong: missing touched check -->
@if (email.errors?.['required']) {
  <span>Email is required</span>
}

<!-- Correct: check touched -->
@if (email.errors?.['required'] && email.touched) {
  <span>Email is required</span>
}
```

---

## BUG-023: Password Confirmation Doesn't Match
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration page
2. Enter password: "Test1234!"
3. Enter confirm password: "Test1234!"
4. Form shows "Passwords don't match"

#### Expected Behavior
Matching passwords should pass validation

#### Actual Behavior
Always shows mismatch error even when identical

### 🔍 Investigation Hints
- Check custom validator function
- Look at how values are compared
- Check validator is on FormGroup not FormControl
- Log both password values

### 📚 Topics Covered
- Cross-field validation
- Custom validators
- FormGroup level validation

### 💡 Fix Pattern
```typescript
// Validator should be on FormGroup
this.form = this.fb.group({
  password: ['', Validators.required],
  confirmPassword: ['', Validators.required]
}, { validators: this.passwordMatchValidator });

passwordMatchValidator(g: FormGroup) {
  return g.get('password')?.value === g.get('confirmPassword')?.value
    ? null : { mismatch: true };
}
```

---

## BUG-024: Form Resets Don't Clear Validation Errors
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Fill login form with invalid data
2. Submit (see validation errors)
3. Click "Clear Form" button
4. Errors still visible

#### Expected Behavior
Form reset should clear all validation errors

#### Actual Behavior
Fields cleared but error messages remain

### 🔍 Investigation Hints
- Check reset method implementation
- Look for `form.reset()` vs `form.resetForm()`
- Check if resetting touched/dirty states
- Consider using ViewChild for NgForm

### 📚 Topics Covered
- Form reset methods
- Form state management
- markAsPristine/markAsUntouched

### 💡 Fix Pattern
```typescript
resetForm(): void {
  this.form.reset();
  this.form.markAsPristine();
  this.form.markAsUntouched();
}
```

---

## BUG-025: Dropdown Selection Not Binding
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to checkout page
2. Select a country from dropdown
3. Submit form

#### Expected Behavior
Selected country should be included in form data

#### Actual Behavior
Country field is null/undefined in submission

### 🔍 Investigation Hints
- Check select element binding
- Look for missing formControlName
- Check option value binding
- Log form value on submit

### 📚 Topics Covered
- Select element with reactive forms
- Option value binding
- Form submission data

### 💡 Common Cause
```html
<!-- Wrong: missing value binding -->
<select formControlName="country">
  <option>UK</option>
</select>

<!-- Correct -->
<select formControlName="country">
  <option [value]="'UK'">UK</option>
</select>
```

---

## BUG-026: Email Validator Accepts Invalid Emails
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Security Audit

#### Steps to Reproduce
1. Go to registration
2. Enter email: "test@" (invalid)
3. Form accepts it as valid

#### Expected Behavior
Should reject invalid email formats

#### Actual Behavior
Accepts partial/malformed emails

### 🔍 Investigation Hints
- Check which validator is used
- Validators.email is lenient
- Consider custom regex validator
- Test various email formats

### 📚 Topics Covered
- Validators.email behavior
- Custom validators
- Regex pattern validation

### 💡 Fix Pattern
```typescript
// More strict email validation
email: ['', [
  Validators.required,
  Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
]]
```

---

## BUG-027: Required Checkbox Not Validating
**Severity:** Medium | **Time to Fix:** 15 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to registration
2. Leave "I agree to terms" unchecked
3. Submit form

#### Expected Behavior
Form should be invalid if terms not accepted

#### Actual Behavior
Form submits without checkbox checked

### 🔍 Investigation Hints
- Check how checkbox is bound
- Validators.required doesn't work for false
- Need custom validator for checkbox
- Check initial value

### 📚 Topics Covered
- Checkbox form control
- Validators.requiredTrue
- Boolean validation

### 💡 Fix Pattern
```typescript
// Wrong: Validators.required accepts false
terms: [false, Validators.required]

// Correct
terms: [false, Validators.requiredTrue]
```

---

## BUG-028: Phone Number Allows Letters
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Go to checkout shipping form
2. Enter phone: "abc123def"
3. Form accepts it

#### Expected Behavior
Phone should only accept numbers and valid formats

#### Actual Behavior
Accepts any characters

### 🔍 Investigation Hints
- Check validation pattern
- Look for input type attribute
- Consider input masking
- Add pattern validator

### 📚 Topics Covered
- Pattern validators
- Input type="tel"
- Input masking concepts

---

## BUG-029: FormArray Items Not Removable
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Add multiple addresses in checkout
2. Try to remove the second address
3. Click remove button

#### Expected Behavior
Address should be removed from list

#### Actual Behavior
Nothing happens or wrong item removed

### 🔍 Investigation Hints
- Check FormArray removeAt() usage
- Verify index being passed
- Look for template variable binding
- Check track expression in @for

### 📚 Topics Covered
- FormArray manipulation
- removeAt() method
- Index management

### 💡 Fix Pattern
```typescript
removeAddress(index: number): void {
  (this.form.get('addresses') as FormArray).removeAt(index);
}
```

---

## BUG-030: Dynamic Validators Not Applied
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Select "Business" account type
2. Company name should become required
3. Leave company name empty
4. Form submits successfully

#### Expected Behavior
Company name required for business accounts

#### Actual Behavior
Company name not validated even when business selected

### 🔍 Investigation Hints
- Check conditional validator logic
- Look for setValidators/clearValidators
- Ensure updateValueAndValidity() called
- Check subscription to type changes

### 📚 Topics Covered
- Dynamic validation
- setValidators()
- updateValueAndValidity()

### 💡 Fix Pattern
```typescript
this.form.get('accountType')?.valueChanges.subscribe(type => {
  const companyControl = this.form.get('companyName');
  if (type === 'business') {
    companyControl?.setValidators([Validators.required]);
  } else {
    companyControl?.clearValidators();
  }
  companyControl?.updateValueAndValidity();
});
```

---

# 🔴 LEVEL 3: Service & HTTP Bugs

> **Goal:** Learn to debug services, HTTP calls, and authentication

---

## BUG-031: API Call Returns 401 After Login
**Severity:** Critical | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Login successfully
2. Navigate to products page
3. API calls fail with 401 Unauthorized

#### Expected Behavior
API calls should include auth token

#### Actual Behavior
Token not being sent with requests

### 🔍 Investigation Hints
- Check HTTP interceptor registration
- Verify token is stored after login
- Check interceptor logic for adding header
- Look at Network tab request headers

### 📚 Topics Covered
- HTTP Interceptors
- Token management
- Authorization headers

### 💡 Debug Steps
```typescript
// In interceptor
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const token = localStorage.getItem('token');
  console.log('Interceptor - Token:', token); // Debug
  console.log('Request URL:', req.url); // Debug
  // ...
}
```

---

## BUG-032: Login Succeeds But User Not Stored
**Severity:** Critical | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Login with valid credentials
2. Redirected to dashboard
3. Refresh the page
4. Sent back to login

#### Expected Behavior
User should remain logged in after refresh

#### Actual Behavior
Session lost on page refresh

### 🔍 Investigation Hints
- Check if token saved to localStorage
- Verify app initialization checks for token
- Look at AuthService initialization
- Check APP_INITIALIZER if used

### 📚 Topics Covered
- Token persistence
- App initialization
- localStorage usage

---

## BUG-033: HTTP Error Not Caught
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Disconnect from network/server
2. Try to load products
3. App crashes or shows blank

#### Expected Behavior
Should show user-friendly error message

#### Actual Behavior
Unhandled error, bad user experience

### 🔍 Investigation Hints
- Check Observable error handling
- Look for catchError operator
- Verify error handling in component
- Check if using async pipe vs subscribe

### 📚 Topics Covered
- RxJS error handling
- catchError operator
- Error UI states

### 💡 Fix Pattern
```typescript
this.apiService.getProducts().pipe(
  catchError(error => {
    this.errorMessage = 'Failed to load products';
    return of([]); // Return empty array
  })
).subscribe(products => this.products = products);
```

---

## BUG-034: Duplicate API Calls on Page Load
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Navigate to products page
2. Open Network tab
3. Count API calls to /api/products

#### Expected Behavior
Should make only one API call

#### Actual Behavior
Makes 2-3 duplicate calls

### 🔍 Investigation Hints
- Check for multiple subscriptions
- Look for ngOnInit calling method multiple times
- Check if component recreated
- Look for async pipe + subscribe combo

### 📚 Topics Covered
- Subscription management
- shareReplay operator
- Component lifecycle

### 💡 Common Cause
```html
<!-- Wrong: calling method multiple times -->
<div>{{ getProducts() | async }}</div>

<!-- Correct: use property -->
<div>{{ products$ | async }}</div>
```

---

## BUG-035: Observable Not Completing (Memory Leak)
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Navigate between pages multiple times
2. Watch memory in DevTools Performance tab
3. Memory keeps growing

#### Expected Behavior
Memory should stabilize

#### Actual Behavior
Memory increases continuously

### 🔍 Investigation Hints
- Check for unsubscribed Observables
- Look for missing takeUntil/takeUntilDestroyed
- Check interval/timer subscriptions
- Verify ngOnDestroy cleanup

### 📚 Topics Covered
- Memory leaks
- Subscription cleanup
- takeUntilDestroyed
- ngOnDestroy

### 💡 Fix Pattern
```typescript
private destroyRef = inject(DestroyRef);

ngOnInit() {
  this.dataService.getData()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(data => this.data = data);
}
```

---

## BUG-036: Race Condition on Search
**Severity:** Medium | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Type "ipho" quickly in search
2. Then type "ne" (searching "iphone")
3. Results sometimes show wrong data

#### Expected Behavior
Results should match final search term

#### Actual Behavior
Sometimes shows results for "ipho" instead of "iphone"

### 🔍 Investigation Hints
- Check if using switchMap
- Look for multiple concurrent requests
- Verify request cancellation
- Check debounce implementation

### 📚 Topics Covered
- Race conditions
- switchMap operator
- Request cancellation

### 💡 Fix Pattern
```typescript
this.searchSubject.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(term => this.api.search(term)) // Cancels previous
).subscribe(results => this.results = results);
```

---

## BUG-037: Cart Count Not Updating Globally
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View header cart count (shows 0)
2. Add item to cart from product page
3. Header still shows 0

#### Expected Behavior
Header cart count should update immediately

#### Actual Behavior
Count only updates after page refresh

### 🔍 Investigation Hints
- Check how cart count is shared
- Look for BehaviorSubject/Signal usage
- Verify components subscribe to updates
- Check if using OnPush change detection

### 📚 Topics Covered
- Cross-component communication
- BehaviorSubject
- Signals
- State management

---

## BUG-038: API Response Mapping Error
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load orders page
2. Check console for errors

#### Expected Behavior
Orders display correctly

#### Actual Behavior
Error: Cannot read property 'map' of undefined

### 🔍 Investigation Hints
- Check API response structure
- Look at response mapping in service
- Verify expected vs actual response shape
- Check if array exists before mapping

### 📚 Topics Covered
- API response handling
- Safe data access
- Optional chaining

### 💡 Fix Pattern
```typescript
// Wrong
return this.http.get<Order[]>(url).pipe(
  map(response => response.map(order => ...)) // Fails if response is null
);

// Correct
return this.http.get<Order[]>(url).pipe(
  map(response => (response || []).map(order => ...))
);
```

---

## BUG-039: Token Refresh Race Condition
**Severity:** Critical | **Time to Fix:** 45 minutes

### 🔴 Bug Report
**Reported By:** Security Testing

#### Steps to Reproduce
1. Wait for token to expire
2. Have multiple API calls triggered
3. Multiple refresh token requests sent

#### Expected Behavior
Only one refresh token request

#### Actual Behavior
Multiple parallel refresh requests, causing issues

### 🔍 Investigation Hints
- Check token refresh logic
- Look for shareReplay on refresh call
- Implement refresh queue
- Use flag to track refresh in progress

### 📚 Topics Covered
- Token refresh pattern
- Request queuing
- shareReplay operator

---

## BUG-040: Service Returns Stale Data
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. View product details
2. Admin updates product price
3. Navigate away and back
4. Old price still shown

#### Expected Behavior
Should fetch fresh data on navigation

#### Actual Behavior
Service returns cached/stale data

### 🔍 Investigation Hints
- Check for caching in service
- Look for shareReplay without refCount
- Verify data fetching on route change
- Consider cache invalidation

### 📚 Topics Covered
- Data caching
- Cache invalidation
- Service data freshness

---

## BUG-041: Logout Doesn't Clear All State
**Severity:** High | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Security Testing

#### Steps to Reproduce
1. Login as User A, view cart
2. Logout
3. Login as User B
4. Cart shows User A's items

#### Expected Behavior
Complete state reset on logout

#### Actual Behavior
Previous user data persists

### 🔍 Investigation Hints
- Check logout method implementation
- Verify all services are reset
- Look for state in localStorage
- Check signal/BehaviorSubject reset

### 📚 Topics Covered
- State cleanup
- Service reset
- Security best practices

---

## BUG-042: SSR Hydration Mismatch
**Severity:** Medium | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** SSR Testing

#### Steps to Reproduce
1. Enable SSR
2. Load any page
3. Check console for hydration errors

#### Expected Behavior
Server and client render should match

#### Actual Behavior
Hydration mismatch warnings in console

### 🔍 Investigation Hints
- Check for browser-only code
- Look for Date/time rendering
- Check random values in templates
- Use isPlatformBrowser for browser code

### 📚 Topics Covered
- Server-side rendering
- Hydration
- Platform detection

---

# ⚫ LEVEL 4: Advanced & Performance Bugs

> **Goal:** Master complex debugging scenarios

---

## BUG-043: Change Detection Not Triggering
**Severity:** High | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to cart page (using OnPush)
2. Update quantity via service
3. UI doesn't update

#### Expected Behavior
UI should reflect updated quantity

#### Actual Behavior
UI remains stale until interaction

### 🔍 Investigation Hints
- Check ChangeDetectionStrategy
- Look for mutating objects
- Verify immutable data patterns
- Consider markForCheck() or signals

### 📚 Topics Covered
- OnPush change detection
- Immutability
- ChangeDetectorRef
- Angular Signals

### 💡 Fix Pattern
```typescript
// With OnPush, must use immutable updates
// Wrong
this.items[0].quantity = 5;

// Correct
this.items = this.items.map((item, i) => 
  i === 0 ? { ...item, quantity: 5 } : item
);
```

---

## BUG-044: ExpressionChangedAfterItHasBeenCheckedError
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load any page
2. Check console in development mode

#### Expected Behavior
No change detection errors

#### Actual Behavior
ExpressionChangedAfterItHasBeenCheckedError in console

### 🔍 Investigation Hints
- Look for data changing in ngAfterViewInit
- Check for getters with side effects
- Look for shared service updates
- Consider using ngAfterContentChecked timing

### 📚 Topics Covered
- Change detection lifecycle
- Debugging CD errors
- Best practices for data updates

### 💡 Common Causes
```typescript
// Wrong: changing data in afterViewInit triggers re-check
ngAfterViewInit() {
  this.title = 'New Title'; // Error!
}

// Fix: use setTimeout or ChangeDetectorRef
ngAfterViewInit() {
  setTimeout(() => this.title = 'New Title');
}
```

---

## BUG-045: Zone.js Performance Degradation
**Severity:** High | **Time to Fix:** 40 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Open products page
2. Scroll through list
3. Notice lag and janky scrolling

#### Expected Behavior
Smooth 60fps scrolling

#### Actual Behavior
Choppy scroll, high CPU usage

### 🔍 Investigation Hints
- Check for scroll event handlers
- Look for zone pollution
- Profile with Angular DevTools
- Consider runOutsideAngular

### 📚 Topics Covered
- NgZone
- runOutsideAngular
- Performance profiling

### 💡 Fix Pattern
```typescript
constructor(private ngZone: NgZone) {}

ngOnInit() {
  this.ngZone.runOutsideAngular(() => {
    window.addEventListener('scroll', this.onScroll);
  });
}
```

---

## BUG-046: Router Memory Leak
**Severity:** High | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Use router events subscription
2. Navigate between pages 20+ times
3. Check memory usage

#### Expected Behavior
Stable memory usage

#### Actual Behavior
Memory grows with each navigation

### 🔍 Investigation Hints
- Check router event subscriptions
- Verify cleanup in ngOnDestroy
- Look for event listeners not removed
- Check attached components

### 📚 Topics Covered
- Router subscriptions
- Subscription cleanup
- Memory profiling

---

## BUG-047: Lazy Loaded Module Loads Multiple Times
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to lazy route
2. Navigate away
3. Navigate back to lazy route
4. Check network tab

#### Expected Behavior
Module chunk loads once, cached

#### Actual Behavior
Module chunk downloaded every time

### 🔍 Investigation Hints
- Check route configuration
- Look for incorrect lazy loading syntax
- Verify caching headers
- Check preloading strategy

### 📚 Topics Covered
- Lazy loading
- Module caching
- Preloading strategies

---

## BUG-048: Signal Effect Runs Infinitely
**Severity:** Critical | **Time to Fix:** 35 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Navigate to page using signals
2. Browser freezes
3. Must force close tab

#### Expected Behavior
Effect runs only when dependencies change

#### Actual Behavior
Effect runs infinitely, causing freeze

### 🔍 Investigation Hints
- Check effect() implementation
- Look for writing to signals inside effect
- Verify no circular dependencies
- Use untracked() if needed

### 📚 Topics Covered
- Angular Signals
- effect() function
- Circular dependencies
- untracked()

### 💡 Common Cause
```typescript
// Wrong: writing to signal read in same effect
effect(() => {
  const value = this.mySignal();
  this.mySignal.set(value + 1); // Infinite loop!
});

// Correct: use untracked for writes
effect(() => {
  const value = this.mySignal();
  untracked(() => {
    this.otherSignal.set(value * 2);
  });
});
```

---

## BUG-049: Directive Not Applied to Dynamic Content
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Load component with innerHTML content
2. Content includes elements with directive selectors
3. Directives don't work

#### Expected Behavior
Directives should apply to dynamic content

#### Actual Behavior
Directives ignored on innerHTML content

### 🔍 Investigation Hints
- innerHTML bypasses Angular compilation
- Consider DomSanitizer
- Use structural alternatives
- Consider ViewContainerRef for dynamic content

### 📚 Topics Covered
- Dynamic content
- innerHTML limitations
- Security sanitization
- Dynamic component creation

---

## BUG-050: ViewChild Undefined in ngOnInit
**Severity:** Medium | **Time to Fix:** 20 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Access ViewChild in ngOnInit
2. Get undefined error

#### Expected Behavior
ViewChild should be accessible

#### Actual Behavior
ViewChild is undefined

### 🔍 Investigation Hints
- ViewChild not available until ngAfterViewInit
- Check if element is in @if block
- Consider static: true option
- Use correct lifecycle hook

### 📚 Topics Covered
- Component lifecycle
- ViewChild timing
- static option

### 💡 Fix Pattern
```typescript
// Wrong
ngOnInit() {
  console.log(this.myElement); // undefined
}

// Correct
ngAfterViewInit() {
  console.log(this.myElement); // works
}

// Or use static: true if element always exists
@ViewChild('element', { static: true }) myElement: ElementRef;
```

---

## BUG-051: Content Projection Not Working
**Severity:** Medium | **Time to Fix:** 25 minutes

### 🔴 Bug Report
**Reported By:** Developer Testing

#### Steps to Reproduce
1. Use card component with projected content
2. Content doesn't appear

#### Expected Behavior
Projected content renders inside component

#### Actual Behavior
Content missing/not displayed

### 🔍 Investigation Hints
- Check ng-content placement
- Verify component selector usage
- Look for multiple ng-content without select
- Check for *ngIf on ng-content

### 📚 Topics Covered
- Content projection
- ng-content
- select attribute
- Multi-slot projection

---

## BUG-052: Reactive Form Performance with Large Arrays
**Severity:** High | **Time to Fix:** 40 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Load form with 100+ FormArray items
2. Type in any field
3. Notice severe lag

#### Expected Behavior
Smooth typing response

#### Actual Behavior
500ms+ delay between keystrokes

### 🔍 Investigation Hints
- Check valueChanges subscriptions
- Look for unnecessary validations
- Consider updateOn: 'blur'
- Profile change detection cycles

### 📚 Topics Covered
- FormArray performance
- updateOn option
- OnPush with forms
- Validation optimization

### 💡 Fix Pattern
```typescript
// Optimize with updateOn: 'blur'
this.fb.control('', {
  validators: Validators.required,
  updateOn: 'blur'
});
```

---

## BUG-053: Animation Triggers Zone Pollution
**Severity:** Medium | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** Performance Testing

#### Steps to Reproduce
1. Page with many animations
2. Animations keep triggering change detection
3. High CPU usage

#### Expected Behavior
Animations shouldn't cause excessive CD

#### Actual Behavior
Every frame triggers change detection

### 🔍 Investigation Hints
- Check animation callbacks
- Look for zone pollution
- Consider web animations API
- Profile with Angular DevTools

### 📚 Topics Covered
- Angular animations
- Zone.js and animations
- Performance optimization

---

## BUG-054: Resolver Blocks Route Navigation
**Severity:** High | **Time to Fix:** 30 minutes

### 🔴 Bug Report
**Reported By:** QA Team

#### Steps to Reproduce
1. Navigate to product detail
2. If API slow, navigation hangs
3. User stuck with no feedback

#### Expected Behavior
Show loading indicator during resolve

#### Actual Behavior
No feedback, appears frozen

### 🔍 Investigation Hints
- Check resolver implementation
- Consider adding loading indicator
- Look at resolver timeout handling
- Consider lazy data loading instead

### 📚 Topics Covered
- Route resolvers
- Navigation events
- Loading states
- UX during data loading

### 💡 Alternative Pattern
```typescript
// Instead of resolver, load in component
ngOnInit() {
  this.isLoading = true;
  this.route.params.pipe(
    switchMap(params => this.api.getProduct(params['id']))
  ).subscribe({
    next: product => {
      this.product = product;
      this.isLoading = false;
    },
    error: () => this.isLoading = false
  });
}
```

---

# 📊 Bug Summary Statistics

| Level | Bugs | Topics Covered | Estimated Time |
|-------|------|----------------|----------------|
| Level 0: CSS/Visual | 10 | CSS, DevTools, Responsive | 2-3h |
| Level 1: Template | 10 | Binding, Directives, Pipes | 3-4h |
| Level 2: Forms | 10 | Reactive Forms, Validation | 4-5h |
| Level 3: Services | 12 | HTTP, Auth, State | 6-8h |
| Level 4: Advanced | 12 | Performance, Signals, CD | 7-10h |
| **TOTAL** | **54** | All Angular Topics | **22-30h** |

---

## 🎓 Debugging Skills Progression

### After Level 0 (CSS Bugs):
- ✅ Use Browser DevTools Elements panel
- ✅ Inspect and modify CSS live
- ✅ Debug responsive issues
- ✅ Identify accessibility issues

### After Level 1 (Template Bugs):
- ✅ Debug binding issues
- ✅ Use console.log effectively
- ✅ Read Angular error messages
- ✅ Understand template syntax

### After Level 2 (Form Bugs):
- ✅ Debug reactive forms
- ✅ Understand validation flow
- ✅ Fix cross-field validation
- ✅ Handle form state

### After Level 3 (Service Bugs):
- ✅ Use Network tab for API debugging
- ✅ Debug interceptors
- ✅ Handle async errors
- ✅ Fix race conditions

### After Level 4 (Advanced Bugs):
- ✅ Profile performance issues
- ✅ Debug change detection
- ✅ Fix memory leaks
- ✅ Optimize applications

---

## 🔑 Interview Questions This Prepares You For

### Common Debugging Interview Questions:
1. "How do you debug an Angular application?"
2. "How would you fix a memory leak?"
3. "Explain the ExpressionChangedAfterItHasBeenCheckedError"
4. "How do you debug HTTP requests?"
5. "What tools do you use for performance profiling?"
6. "How do you handle race conditions in Angular?"
7. "Explain OnPush change detection debugging"
8. "How do you find why a form is invalid?"

---

## 📝 Bug Reproduction Environment

To introduce these bugs for learning:
1. Create a new branch: `git checkout -b bugs/training`
2. Introduce bugs intentionally in code
3. Team members fix bugs and submit PRs
4. Review fixes together for learning

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Maintained By:** TechCorp Development Team
