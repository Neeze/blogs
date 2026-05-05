// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';
import mermaid from 'astro-mermaid';
import starlightAutoSidebar from 'starlight-auto-sidebar';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			plugins: [starlightAutoSidebar(), starlightThemeGalaxy()],
			title: "Nam Nam's Blogs",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Neeze/blogs' }, { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/halo.im.nam/' }],
			sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
				{
					label: 'Hậu mô hình Transformer',
					autogenerate: { directory: 'beyond-transformer' },
				},
				{
					label: 'Practical AI',
					autogenerate: { directory: 'practical-ai' },
				},
			],
			customCss: [
				'./src/styles/mathjax.css',
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/700.css',
				'@fontsource/roboto/400.css',
				'@fontsource/roboto/700.css',
				'./src/styles/font.css',
				'./src/styles/font-override.css',
				'./src/styles/custom.css',
			],
		}),
		mermaid({
			theme: 'dark',
			autoTheme: true,
			mermaidConfig: {
				flowchart: {
					curve: 'basis',
					padding: 15
				},
			}
		}),
	],
	site: 'https://neeze.github.io/',
	base: '/docs'
});
