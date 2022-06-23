/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore
	url: 'https://noah.tannibus.games/',
	silent: true, // Suppresses all logs
	authToken: '01e764fedbb746a9a3803d26a54065bbac70e005640241fe8e346d12627d9cb7'
};

function moduleExports() {
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
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

