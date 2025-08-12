# Pokémon Next.js App

A modern, responsive Pokémon web application built with Next.js, TypeScript, and the PokeAPI. Explore detailed information about your favorite Pokémon, including their stats, abilities, and evolution chains.

![Pokémon App Screenshot](./public/screenshot.png)

## 🚀 Features

- **Server Components**: Optimized performance with Next.js 13+ Server Components
- **Type Safety**: Built with TypeScript for better developer experience
- **Responsive Design**: Works on all device sizes
- **Pokémon Details**: View detailed information about each Pokémon
- **Evolution Chains**: Visual representation of Pokémon evolutions
- **Search Functionality**: Easily find your favorite Pokémon
- **Dark/Light Mode**: Built-in theme support

## 🛠️ Technologies

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PokeAPI](https://pokeapi.co/) - Pokémon RESTful API
- [HeroUI](https://hero-ui.com/) - UI components library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## 📦 Prerequisites

- Node.js 18.0.0 or later
- pnpm package manager
- Git

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/pokemon-nextjs.git
cd pokemon-nextjs
```

### Install dependencies

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
pokemon-nextjs/
├── src/
│   ├── app/                  # App Router
│   ├── components/           # Reusable components
│   │   ├── client/          # Client components
│   │   └── server/          # Server components
│   ├── lib/                 # Utility functions and API calls
│   ├── styles/              # Global styles
│   └── types/               # TypeScript type definitions
├── public/                  # Static files
└── tests/                   # Test files
```

## 📝 Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint
- `test`: Run tests
- `format`: Format code with Prettier
- `type-check`: Check TypeScript types

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokeAPI](https://pokeapi.co/) for the amazing Pokémon data
- [Next.js](https://nextjs.org/) team for the awesome framework
- All Pokémon fans and contributors
