# Literary Visions

Transform epic book scenes into stunning desktop wallpapers using AI-powered image generation.

## 🎨 About

Literary Visions is an intelligent wallpaper generator that brings your favorite book scenes to life. Select from curated scenes from beloved fantasy and sci-fi novels, or describe your own vision. The app uses advanced AI image generation with intelligent prompt enhancement.

### Key Features

- **📚 Curated Book Library**: Choose from iconic scenes from The Way of Kings, Harry Potter, Lord of the Rings, Dune, and more
- **🎭 8 Art Styles**: Realistic, Digital Art, Cinematic, Anime, Pixel Art, Oil Painting, Watercolor, and Fantasy Art
- **🧠 Intelligent Enhancement**: Automatically adds world context, genre styling, and technical details to prompts
- **📐 Multiple Resolutions**: Desktop (4K, QHD, Full HD, Ultrawide), Mobile, Social Media, and Print formats
- **⚡ Multiple Models**: Choose between FLUX.1 [dev], [schnell], and [pro] for different speed/quality tradeoffs
- **🎯 Context-Aware**: Understands book worlds and automatically enhances prompts with relevant details

### How It Works

1. **Select a Book**: Choose from popular fantasy and sci-fi novels
2. **Pick a Scene**: Select from 3-4 curated scenes per book, or describe your own
3. **Choose Art Style**: Pick from 8 different artistic styles
4. **Customize Settings**: Adjust model and resolution (optional)
5. **Generate**: Watch as AI brings the scene to life

The app intelligently enhances your prompts by adding:
- World-specific context (e.g., "massive industrial claw drill" for Red Rising, not just "drill")
- Genre-appropriate styling
- Series visual consistency
- Art style modifiers
- Quality parameters

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A [fal.ai](https://fal.ai) API key

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd book-scene-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file:
```bash
cp .env.local.example .env.local
```

4. Add your fal.ai API key to `.env.local`:
```
FAL_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules with custom design system
- **AI Models**: fal.ai (FLUX.1 models)
- **Deployment**: Vercel-ready

## 📖 Book Library

Currently includes scenes from:
- The Way of Kings (Brandon Sanderson)
- Harry Potter and the Prisoner of Azkaban (J.K. Rowling)
- The Lord of the Rings (J.R.R. Tolkien)
- Dune (Frank Herbert)
- The Name of the Wind (Patrick Rothfuss)

## 🎨 Art Styles

- **Realistic**: Photorealistic imagery
- **Digital Art**: Modern concept art style
- **Cinematic**: Movie-like dramatic scenes
- **Anime**: Japanese animation style
- **Pixel Art**: Retro gaming aesthetic
- **Oil Painting**: Classical fine art
- **Watercolor**: Soft, flowing paint
- **Fantasy Art**: Epic fantasy illustration

## 🤝 Contributing

Feel free to fork and customize with your own book selections and scenes!

## 📝 License

MIT

## 🙏 Acknowledgments

- Book quotes and world-building from their respective authors
- Built with Next.js and TypeScript
