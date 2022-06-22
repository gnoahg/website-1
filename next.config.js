/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.myanimelist.net"]
	},
	redirects: () => [
		{
			source: "/discord/banner",
			destination: "https://discord.com/api/guilds/963594220671750174/embed.png?style=banner2",
			permanent: true
		},
		{
			source: "/discord",
			destination: "https://discord.gg/4PnXWFvmHx",
			permanent: true
		},
		{
			source: "/github",
			destination: "https://github.com/gnoahg",
			permanent: true
		},
		{
			source: "/github/:repo",
			destination: "https://github.com/gnoahg/:repo",
			permanent: true
		}
	]
};
