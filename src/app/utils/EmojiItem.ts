export interface EmojiItem {
    emoji: string;
    description: string;
    category: string;
    aliases: string[];
    tags: string[];
    unicodeVersion: string;
    iosVersion: string;
    skinTones?: boolean;
}