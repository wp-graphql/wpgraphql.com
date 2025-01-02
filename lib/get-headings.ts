import { load } from 'cheerio';

export interface Heading {
    id: string;
    text: string;
    level: number;
  }
  
  export function extractHeadings(html: string): Heading[] {
    const headings: Heading[] = [];
    const headingRegex = /<h([2-4])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-4]>/g;
    
    let match;
    while ((match = headingRegex.exec(html)) !== null) {
      const [_, level, id, text] = match;
      
      // Remove any HTML tags from the text content
      const cleanText = text.replace(/<[^>]*>/g, '');
      
      headings.push({
        id,
        text: cleanText,
        level: parseInt(level),
      });
    }
  
    return headings;
  }