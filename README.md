
# TechNova - Modern IT Company Website

A stunning, modern website for TechNova, featuring a sleek dark theme with neon accents, smooth animations, and responsive design.

## 🚀 Features

- **Modern Design**: Dark theme with neon blue/purple accents and glassmorphism effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Floating backgrounds, glow effects, and smooth transitions
- **Interactive Sections**: 
  - Hero section with animated title and CTA
  - Projects showcase with hover effects
  - Team member cards with social links
  - Contact form with validation
- **Performance Optimized**: Built with Vite and React for fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom neon theme
- **UI Components**: Shadcn/ui components
- **Build Tool**: Vite
- **Animations**: Custom CSS animations and Tailwind transitions

## 📦 Installation & Setup

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors
The neon theme colors can be customized in `tailwind.config.ts`:
```typescript
neon: {
  blue: '#00f5ff',
  purple: '#8b5cf6',
  pink: '#ec4899',
  green: '#00ff88',
}
```

### Content
- **Projects**: Update the `projects` array in `src/pages/Index.tsx`
- **Team Members**: Update the `teamMembers` array in `src/pages/Index.tsx`
- **Company Info**: Update text content throughout the Index component

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

## 🔮 Future Enhancements

To create a full-stack application with admin panel and database, consider adding:

1. **Backend Integration**: Connect to Supabase for:
   - User authentication
   - Database for projects and team members
   - Admin panel for content management
   - Contact form submissions

2. **Additional Features**:
   - Blog/News section
   - Case studies with detailed project pages
   - Client testimonials
   - Service offerings pages
   - Admin dashboard for content management

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Built with ❤️ using Lovable.dev
