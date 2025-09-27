# Angular Signals Demo Application

A modern Angular v19 application demonstrating the power and usage of **Angular Signals** for reactive state management. This project showcases how to build a user-centric application with real-time data fetching, interactive UI components, and efficient state management using the latest Angular Signals API.

## 🌟 Features

- **Users Management**: Browse and view user profiles with detailed information
- **Posts Display**: View posts by selected users with detailed post information  
- **Comments System**: Interactive comments section for each post
- **Angular Signals**: Demonstrates reactive state management using Angular's new Signals API
- **Responsive Design**: Built with CoreUI for modern, responsive layouts
- **Real-time Data**: Fetches data from external APIs with reactive updates
- **Server-Side Rendering (SSR)**: Includes Angular Universal for better performance and SEO

## 🛠️ Technology Stack

- **Angular**: v19.1.0 (Latest) with standalone components support
- **TypeScript**: v5.7.2 for type-safe development
- **Angular Signals**: For reactive state management
- **CoreUI**: v5.3.14 for modern UI components and styling
- **FontAwesome**: For icons and visual enhancements
- **RxJS**: v7.8.0 for reactive programming
- **Angular Universal**: For server-side rendering
- **Karma & Jasmine**: For unit testing

## 📱 Application Structure

The application follows a modular architecture with clear separation of concerns:

### Core Components
- **Users Page**: Displays a card-based grid of users fetched from the API
- **Posts Page**: Shows posts for a selected user with detailed information
- **Post Detail**: Individual post view with reactions, tags, and metadata
- **Comments**: Dynamic comments section for each post

### Key Signals Implementation
```typescript
// Example from PostsComponent
postsSignal = signal<Post[]>([])
selectedPost = signal<Post | null>(null)
selectedUser = signal<User | null>(null)
commentsSignal = signal<Comment[]>([])
```

### Services & Data Management
- **UserService**: Manages user data and API calls
- **PostsService**: Handles post-related operations
- **CommentsService**: Manages comments functionality

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Angular CLI v19.1.7 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd angular-signals
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   ng serve
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── datacard/       # User card display component
│   │   ├── postslist/      # Posts listing component  
│   │   ├── postdetail/     # Individual post details
│   │   └── comments/       # Comments display component
│   ├── pages/              # Main application pages
│   │   ├── users/          # Users listing page
│   │   └── posts/          # Posts and details page
│   ├── services/           # Data services and API calls
│   │   ├── user.service.ts
│   │   ├── posts.service.ts
│   │   └── comments.service.ts
│   ├── models/             # TypeScript interfaces and classes
│   │   ├── entities/       # Core data models (User, Post, Comment)
│   │   ├── responses/      # API response models
│   │   └── customs/        # Custom model classes
│   └── constants/          # Application constants and routes
├── scss/                   # Global styles and theming
└── assets/                 # Static assets and images
```

## 🔌 API Integration

The application integrates with [DummyJSON API](https://dummyjson.com/) for demonstration data:

- **Users API**: `https://dummyjson.com/users` - Fetches user profiles
- **Posts API**: `https://dummyjson.com/posts/user/{userId}` - Gets posts by user
- **Comments API**: `https://dummyjson.com/comments/post/{postId}` - Retrieves post comments

## 🧪 Development Commands

### Development Server
```bash
ng serve
# Application runs on http://localhost:4200/
```

### Building for Production
```bash
ng build
# Build artifacts stored in dist/ directory
```

### Running Tests
```bash
ng test                    # Run unit tests with Karma
ng test --watch=false      # Run tests once without watch mode
```

### Code Generation
```bash
ng generate component component-name    # Generate new component
ng generate service service-name        # Generate new service
ng generate --help                      # View all generation options
```

### Linting and Code Quality
```bash
ng lint                    # Run linting (if configured)
```

## 🎯 Key Learning Points

This application demonstrates:

1. **Angular Signals Usage**: How to implement reactive state management with signals
2. **Component Communication**: Parent-child component interaction using signals
3. **HTTP Client Integration**: RESTful API consumption with Angular HttpClient
4. **Modular Architecture**: Clean separation of concerns with modules and services
5. **Modern Angular Patterns**: Latest Angular v19 features and best practices
6. **Responsive Design**: Mobile-first design principles with CoreUI

## 🌐 Browser Support

This application supports all modern browsers:
- Chrome (latest)
- Firefox (latest)  
- Safari (latest)
- Edge (latest)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational and demonstration purposes. Feel free to use it as a reference for learning Angular Signals.

## 🔗 Additional Resources

- [Angular Signals Documentation](https://angular.dev/guide/signals)
- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [CoreUI for Angular](https://coreui.io/angular/)
- [DummyJSON API Documentation](https://dummyjson.com/docs)

---

*Built with ❤️ using Angular v19 and Angular Signals*
