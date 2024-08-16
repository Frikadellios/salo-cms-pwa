interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const SITE = 'https://salo-cms-pwa.pages.dev'
export const siteSubTitle = 'Astro +  🚀'

export const siteConfig: SiteConfig = {
	author: 'Hrihorii Ilin', // Site author
	title: 'Astro Theme OpenBlog', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6,
	lang: 'en',
	ogLocale: 'en'
}

const config = {
	backend: {
		// Use netlify identity as backend
		name: 'github',
		branch: 'master',
		repo: 'Frikadellios/salo-cms-pwa'
	},

	media_folder: 'src/assets',
	public_folder: 'src/assets/',
	media_library: {
		max_file_size: 2012000,
		folder_support: true
	},

	// Please run "npx @staticcms/proxy-server" for local backend
	locale: 'en',
	site_url: 'https:salo-cms-pwa.pages.dev',
	logo_url: 'https://salo-cms-pwa.pages.dev/logo.svg',
	local_backend: true,

	// publish_mode: editorial_workflow
	collections: [
		{
			label: 'Blog',
			name: 'blog',
			folder: 'src/content/blog',
			create: true,
			editor: {
				preview: true
			},
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
				{ label: 'Author', name: 'author', widget: 'string' },
				{ label: 'Publish Date', name: 'date', widget: 'datetime' },
				{ label: 'Body', name: 'body', widget: 'markdown' }
			]
		},
		{
			label: 'Services',
			name: 'services',
			folder: 'src/assets/',
			create: true,
			editor: {
				preview: true
			},
			fields: [
				{ label: 'Title', name: 'title', widget: 'string' },
				{ label: 'Description', name: 'description', widget: 'string' },
				{ label: 'Author', name: 'author', widget: 'string' },
				{ label: 'Publish Date', name: 'date', widget: 'datetime' },
				{ label: 'Body', name: 'body', widget: 'markdown' }
			]
		}
	]
}

export default config
