export interface ModelConfig {
    id: string;
    name: string;
    description: string;
    maxResolution: { width: number; height: number };
    supportedAspectRatios: string[];
    speed: 'fast' | 'medium' | 'slow';
    quality: 'standard' | 'high' | 'ultra';
}

export interface ResolutionPreset {
    name: string;
    width: number;
    height: number;
    aspectRatio: string;
    description: string;
    category: 'desktop' | 'mobile' | 'social' | 'print';
}

export interface ArtStyle {
    id: string;
    name: string;
    description: string;
    promptModifier: string;
    icon: string;
}

export const ART_STYLES: ArtStyle[] = [
    {
        id: 'realistic',
        name: 'Realistic',
        description: 'Photorealistic, detailed imagery',
        promptModifier: 'photorealistic, highly detailed, 8K resolution, professional photography, realistic lighting and textures',
        icon: '📷'
    },
    {
        id: 'digital-art',
        name: 'Digital Art',
        description: 'Modern digital painting style',
        promptModifier: 'digital art, concept art, detailed illustration, trending on artstation, professional digital painting',
        icon: '🎨'
    },
    {
        id: 'cinematic',
        name: 'Cinematic',
        description: 'Movie-like dramatic scenes',
        promptModifier: 'cinematic lighting, dramatic composition, film grain, movie still, epic scale, volumetric lighting',
        icon: '🎬'
    },
    {
        id: 'anime',
        name: 'Anime',
        description: 'Japanese animation style',
        promptModifier: 'anime style, manga art, Studio Ghibli inspired, detailed anime illustration, vibrant colors',
        icon: '🎌'
    },
    {
        id: 'pixel-art',
        name: 'Pixel Art',
        description: 'Retro pixel graphics',
        promptModifier: 'pixel art, 16-bit style, retro gaming aesthetic, detailed pixel graphics, isometric view',
        icon: '🕹️'
    },
    {
        id: 'oil-painting',
        name: 'Oil Painting',
        description: 'Classic painted artwork',
        promptModifier: 'oil painting, classical art style, painterly, brushstrokes visible, fine art, museum quality',
        icon: '🖼️'
    },
    {
        id: 'watercolor',
        name: 'Watercolor',
        description: 'Soft, flowing watercolor',
        promptModifier: 'watercolor painting, soft colors, flowing paint, artistic, hand-painted, delicate brushwork',
        icon: '💧'
    },
    {
        id: 'fantasy-art',
        name: 'Fantasy Art',
        description: 'Epic fantasy illustration',
        promptModifier: 'fantasy art, epic fantasy illustration, magical atmosphere, detailed fantasy concept art, dramatic lighting',
        icon: '⚔️'
    }
];

export const DEFAULT_ART_STYLE = ART_STYLES[0]; // Realistic

export const AVAILABLE_MODELS: ModelConfig[] = [
    {
        id: 'fal-ai/flux-pro',
        name: 'FLUX.1 [pro]',
        description: 'Premium model for highest quality results',
        maxResolution: { width: 2048, height: 2048 },
        supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4', '21:9', '2:3', '3:2'],
        speed: 'slow',
        quality: 'ultra'
    },
    {
        id: 'fal-ai/flux/dev',
        name: 'FLUX.1 [dev]',
        description: 'High-quality, versatile model for detailed scenes',
        maxResolution: { width: 2048, height: 2048 },
        supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4', '21:9'],
        speed: 'medium',
        quality: 'high'
    },
    {
        id: 'fal-ai/flux/schnell',
        name: 'FLUX.1 [schnell]',
        description: 'Fast generation with good quality',
        maxResolution: { width: 1920, height: 1920 },
        supportedAspectRatios: ['1:1', '16:9', '9:16', '4:3', '3:4'],
        speed: 'fast',
        quality: 'standard'
    }
];

export const RESOLUTION_PRESETS: ResolutionPreset[] = [
    // Desktop Wallpapers
    { name: '4K Desktop', width: 3840, height: 2160, aspectRatio: '16:9', description: '4K Ultra HD', category: 'desktop' },
    { name: 'QHD Desktop', width: 2560, height: 1440, aspectRatio: '16:9', description: '1440p Quad HD', category: 'desktop' },
    { name: 'Full HD Desktop', width: 1920, height: 1080, aspectRatio: '16:9', description: '1080p Full HD', category: 'desktop' },
    { name: 'Ultrawide', width: 3440, height: 1440, aspectRatio: '21:9', description: 'Ultrawide monitor', category: 'desktop' },
    
    // Mobile Wallpapers
    { name: 'iPhone 15 Pro', width: 1179, height: 2556, aspectRatio: '9:19.5', description: 'iPhone 15 Pro wallpaper', category: 'mobile' },
    { name: 'iPhone Standard', width: 1170, height: 2532, aspectRatio: '9:19.5', description: 'iPhone 12-14 wallpaper', category: 'mobile' },
    { name: 'Android HD', width: 1080, height: 1920, aspectRatio: '9:16', description: 'Standard Android', category: 'mobile' },
    
    // Social Media
    { name: 'Instagram Post', width: 1080, height: 1080, aspectRatio: '1:1', description: 'Square Instagram post', category: 'social' },
    { name: 'Instagram Story', width: 1080, height: 1920, aspectRatio: '9:16', description: 'Instagram/TikTok story', category: 'social' },
    { name: 'Twitter Header', width: 1500, height: 500, aspectRatio: '3:1', description: 'Twitter/X header image', category: 'social' },
    
    // Print
    { name: 'A4 Portrait', width: 2480, height: 3508, aspectRatio: '3:4', description: 'A4 print quality', category: 'print' },
    { name: 'A4 Landscape', width: 3508, height: 2480, aspectRatio: '4:3', description: 'A4 landscape print', category: 'print' }
];

export const DEFAULT_MODEL = AVAILABLE_MODELS[0];
export const DEFAULT_RESOLUTION = RESOLUTION_PRESETS[2]; // Full HD Desktop