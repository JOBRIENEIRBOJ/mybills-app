# MyBills - Bill Tracker App

A modern, mobile-first Progressive Web App (PWA) for tracking recurring bills. Built with React, TypeScript, and Vite.

## ✨ Features

- **📱 Mobile-First Design**: Optimized for mobile devices with responsive layout
- **💾 Local Storage**: Data persists locally in your browser
- **🎨 Modern UI**: Clean, intuitive interface with color-coded bill status
- **📊 Summary Dashboard**: Overview of total, paid, and overdue bills
- **✅ Quick Actions**: Mark bills as paid/unpaid with one click
- **✏️ Inline Editing**: Edit bill details directly in the list
- **⚡ PWA Support**: Install as a native app on your device
- **🔒 Secure**: No data leaves your device - complete privacy

## 🎯 Bill Status Color Coding

- **🔵 Blue**: Upcoming bills (not yet due)
- **🟢 Green**: Paid bills
- **🔴 Red**: Overdue bills (past due date)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use Node 20+)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mybills-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📦 Build & Deployment

### Build for Production

```bash
# Run linting and build
npm run build:prod

# Or just build
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment Options

### 1. Netlify (Recommended)

1. **Push code to GitHub/GitLab**
2. **Connect to Netlify**
3. **Build settings are preconfigured** in `netlify.toml`
4. **Deploy automatically** on push

### 2. Vercel

1. **Push code to GitHub**
2. **Import project** to Vercel
3. **Deploy automatically** - `vercel.json` handles configuration

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

### 4. Self-Hosted

After building, serve the `dist` folder with any static file server:

```bash
# Using serve
npx serve dist

# Using Python
cd dist && python -m http.server 8000
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS Custom Properties, Mobile-First
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **PWA**: Vite PWA Plugin
- **Storage**: Local Storage API

## 📱 PWA Installation

### Mobile Devices
1. Open the app in your mobile browser
2. Look for "Add to Home Screen" prompt
3. Tap "Add" to install as a native app

### Desktop
1. Open the app in Chrome/Edge
2. Look for install icon in the address bar
3. Click to install as a desktop app

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and customize:

```env
VITE_APP_NAME=MyBills
VITE_APP_VERSION=1.0.0
```

### Customization

- **Colors**: Update CSS custom properties in `src/index.css`
- **Icons**: Replace PWA icons in `public/` folder
- **App Name**: Update in `package.json` and PWA manifest

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors
2. Clear local storage and refresh
3. Try in an incognito/private window
4. Create an issue with details about your problem

## 🗺️ Roadmap

- [ ] Data export/import functionality
- [ ] Recurring bill templates
- [ ] Bill categories and filtering
- [ ] Dark mode theme
- [ ] Notification reminders
- [ ] Multi-language support
