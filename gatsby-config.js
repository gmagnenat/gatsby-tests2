module.exports = {
	siteMetadata: {
		title: `ABC Blog`,
		description: `Boilerplate project with a simple blog system`,
		twitterUsername: `@magnenatg`,
		image: ``,
		siteUrl: `https://gmagnenat.co`,
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-transformer-sharp',
	],
};
