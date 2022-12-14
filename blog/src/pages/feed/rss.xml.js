import rss from '@astrojs/rss';
import { getAllPosts } from '../../lib/api.js';

const entries = await getAllPosts(5);
const siteName = "Astro.js Sample Blog";
const description = "サンプルブログです。";
const url = "https://example.com/";

export const get = () => rss({
    title: siteName,
    description: description,
    site: url,
    customData: `<language>ja</language>`,
    items: entries.items.map((item) => ({
        link: `${url}articles/${item.basename}/`,
        title: item.title,
        pubDate: item.date,
    }))
});