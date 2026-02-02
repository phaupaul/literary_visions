import { Book, BookQuote } from './quotes';

export interface EnhancedPrompt {
    originalPrompt: string;
    enhancedPrompt: string;
    contextAdded: string[];
}

export function enhancePromptWithBookContext(
    quote: BookQuote,
    book: Book,
    artStyleModifier?: string,
    customAdditions?: string
): EnhancedPrompt {
    const contextAdded: string[] = [];
    
    // Start with the visual context
    let enhancedPrompt = quote.visualContext;
    
    // Add world-specific context
    if (quote.worldContext) {
        enhancedPrompt += `. ${quote.worldContext}`;
        contextAdded.push('World context');
    }
    
    // Add genre-specific styling
    const genreEnhancements = getGenreEnhancements(book.genre);
    if (genreEnhancements) {
        enhancedPrompt += `. ${genreEnhancements}`;
        contextAdded.push('Genre styling');
    }
    
    // Add book series context for consistency
    if (book.series) {
        const seriesContext = getSeriesVisualStyle(book.series);
        if (seriesContext) {
            enhancedPrompt += `. ${seriesContext}`;
            contextAdded.push('Series visual style');
        }
    }
    
    // Add art style modifier
    if (artStyleModifier) {
        enhancedPrompt += `. ${artStyleModifier}`;
        contextAdded.push('Art style');
    }
    
    // Add custom user additions
    if (customAdditions && customAdditions.trim()) {
        enhancedPrompt += `. ${customAdditions}`;
        contextAdded.push('Custom additions');
    }
    
    // Add quality parameters
    enhancedPrompt += '. Highly detailed, masterpiece quality';
    contextAdded.push('Quality parameters');
    
    return {
        originalPrompt: `${quote.visualContext}. Quote: "${quote.quote}"`,
        enhancedPrompt,
        contextAdded
    };
}

function getGenreEnhancements(genre: string): string {
    const enhancements: Record<string, string> = {
        'Epic Fantasy': 'Epic fantasy art style, magical atmosphere, otherworldly elements, fantasy concept art',
        'Dystopian Sci-Fi': 'Dystopian science fiction, futuristic technology, industrial atmosphere, cyberpunk elements',
        'Space Opera': 'Space opera, grand scale, advanced technology, alien worlds, cosmic scope',
        'Urban Fantasy': 'Urban fantasy, modern magical elements, city setting with supernatural elements',
        'Steampunk': 'Steampunk aesthetic, Victorian-era technology, brass and copper, steam-powered machinery',
        'Cyberpunk': 'Cyberpunk style, neon lights, high-tech low-life, digital elements, urban decay'
    };
    
    return enhancements[genre] || 'Fantasy/sci-fi art style, detailed world-building';
}

function getSeriesVisualStyle(series: string): string {
    const seriesStyles: Record<string, string> = {
        'The Stormlight Archive': 'Alien world of Roshar, unique ecology, spren as glowing spirits, stormlight magic, crystalline formations',
        'Red Rising Saga': 'Color-coded caste society, Roman-inspired architecture, advanced technology, Mars terraforming, brutal hierarchy',
        'Mistborn Era 1': 'Victorian-industrial fantasy, ash-covered world, magical mists, steel and iron architecture, noble houses',
        'The Expanse': 'Realistic space technology, lived-in future, political tension, asteroid belt mining, Martian military',
        'Foundation': 'Galactic empire, psychohistory, vast space stations, mathematical precision, golden age sci-fi',
        'Dune': 'Desert planet Arrakis, spice mining, feudal houses, ornithopters, stillsuits, sandworms',
        'Harry Potter': 'British wizarding world, Hogwarts castle, wands and spells, magical creatures, Gothic architecture with warm lighting',
        'The Lord of the Rings': 'Middle-earth, diverse fantasy races, ancient magic, epic landscapes, Tolkien-inspired fantasy'
    };
    
    return seriesStyles[series] || '';
}

export function enhanceCustomPrompt(
    customPrompt: string,
    artStyleModifier?: string,
    selectedBook?: Book
): EnhancedPrompt {
    const contextAdded: string[] = [];
    let enhancedPrompt = customPrompt;
    
    // Add book world context if a book is selected
    if (selectedBook) {
        enhancedPrompt += `. Set in the world of ${selectedBook.title}: ${selectedBook.worldContext}`;
        contextAdded.push(`${selectedBook.title} world context`);
        
        // Add genre styling
        const genreEnhancements = getGenreEnhancements(selectedBook.genre);
        if (genreEnhancements) {
            enhancedPrompt += `. ${genreEnhancements}`;
            contextAdded.push('Genre styling');
        }
        
        // Add series visual style
        if (selectedBook.series) {
            const seriesContext = getSeriesVisualStyle(selectedBook.series);
            if (seriesContext) {
                enhancedPrompt += `. ${seriesContext}`;
                contextAdded.push('Series visual style');
            }
        }
    }
    
    // Add art style modifier
    if (artStyleModifier) {
        enhancedPrompt += `. ${artStyleModifier}`;
        contextAdded.push('Art style');
    }
    
    // Add quality parameters
    enhancedPrompt += '. Highly detailed, masterpiece quality';
    contextAdded.push('Quality parameters');
    
    return {
        originalPrompt: customPrompt,
        enhancedPrompt,
        contextAdded
    };
}