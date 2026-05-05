import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { autoSidebarSchema } from 'starlight-auto-sidebar/schema';

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	autoSidebar: defineCollection({ type: 'data', schema: autoSidebarSchema() }),
};
