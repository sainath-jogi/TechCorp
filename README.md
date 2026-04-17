# TechCorp Enterprise Portal - Angular 21 Application

> Professional enterprise-grade portal built with Angular 21 for team training purposes.

## ✅ Current Project Status

| Component | Status |
|-----------|--------|
| Login/Register | ✅ Working |
| Dashboard | ✅ Working |
| Products List | ✅ Working |
| Cart | ✅ Working |
| Header/Footer | ✅ Working |
| Routing | ✅ Working |
| Mock API | ✅ Working |
| **Overall** | **50% Complete** |

## 📚 Training Documents

| Document | Purpose |
|----------|---------|
| [KT_GUIDE.md](KT_GUIDE.md) | **START HERE** - Complete knowledge transfer guide |
| [JIRA_TASKS.md](JIRA_TASKS.md) | 44 tasks to complete remaining features |
| [JIRA_BUGS.md](JIRA_BUGS.md) | 54 bugs for debugging practice |
| [PROJECT_STATUS.md](PROJECT_STATUS.md) | Detailed implementation status |
| [SUGGESTIONS.md](SUGGESTIONS.md) | Improvement recommendations |

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- Angular CLI 21
- npm 10+

### Installation

```bash
npm install
npm start
```

Application will open at `http://localhost:4200`

### Demo Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@techcorp.com | demo123 |
| User | user@techcorp.com | demo123 |
| Developer | developer@techcorp.com | demo123 |

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                 # Singleton services, guards, interceptors
│   │   ├── services/         # Business logic services
│   │   ├── guards/          # Route guards
│   │   ├── interceptors/    # HTTP interceptors
│   │   ├── models/          # TypeScript interfaces
│   │   ├── constants/       # Application constants
│   │   └── mock/            # Mock API data
│   ├── shared/               # Reusable components, directives, pipes
│   │   ├── components/      # Header, Footer
│   │   ├── directives/      # Custom directives
│   │   ├── pipes/           # Custom pipes
│   │   └── validators/      # Form validators
│   ├── features/             # Feature modules (lazy-loaded)
│   │   ├── auth/            # Authentication feature
│   │   ├── products/        # Products feature
│   │   ├── cart/            # Shopping cart feature
│   │   ├── checkout/        # Checkout feature
│   │   └── orders/          # Orders feature
│   ├── app.component.ts     # Root component
│   └── app.routes.ts        # Route definitions
├── environments/             # Environment configurations
├── styles/                   # Global styles
└── assets/                   # Static assets

```

## 🛠️ Development Scripts

```bash
# Development server
npm start

# Build for development
npm run build

# Build for production
npm run build:prod

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run e2e

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🏗️ Architecture

### Core Services

- **AuthService** - Authentication and authorization
- **ApiService** - HTTP requests with retry and timeout logic
- **LoggerService** - Structured logging
- **NotificationService** - User notifications

### HTTP Interceptors

- **LoggingInterceptor** - Request/response logging
- **AuthInterceptor** - JWT token injection
- **ErrorInterceptor** - Global error handling

### Route Guards

- **authGuard** - Protects authenticated routes

## 📚 Key Features

✅ Angular 21 with Standalone Components  
✅ RxJS for reactive programming  
✅ Bootstrap 5 for responsive UI  
✅ TypeScript Strict Mode  
✅ ESLint & Prettier Integration  
✅ Karma/Jasmine for Unit Testing  
✅ Lazy-loaded Feature Modules  
✅ Error Handling & Logging  
✅ JWT Authentication  
✅ Request Caching  

## 🧪 Testing

### Unit Tests

```bash
npm test
```

### With Coverage

```bash
npm run test:coverage
```

Coverage reports are available in `coverage/` directory.

### E2E Tests

```bash
npm run e2e
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build:prod
```

Optimized build output is in `dist/` directory.

### Bundle Analysis

```bash
npm run analyze
```

## 🔒 Security

- **XSRF Protection** - Configured in HTTP client
- **JWT Authentication** - Token-based auth
- **HTTP-Only Cookies** - Secure token storage
- **Content Security Policy** - Via headers
- **Strict TypeScript** - Prevents type-related bugs

## 🌐 Environment Configuration

### Development (`.env`)

```
API_URL=http://localhost:3000/api
LOG_LEVEL=debug
```

### Production (`.env.prod`)

```
API_URL=https://api.ukstore.com/api
LOG_LEVEL=error
```

## 📖 API Integration

All API calls go through `ApiService` which handles:

- Request/response logging
- Automatic retries
- Request timeout
- Error handling
- JWT token injection

Example:

```typescript
this.apiService.get<Product>('products/1', {
  timeout: 30000,
  retries: 2
}).subscribe(response => {
  if (response.success) {
    console.log(response.data);
  }
});
```

## 👥 Contributing

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) guide.

## 📝 License

Proprietary - UKStore Educational Platform

## 🤝 Support

For issues and questions, contact: support@ukstore.com
