import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: false, // Throws "Cross-site POST form submissions are forbidden" without
		}
	}
};

export default config;
