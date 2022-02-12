const siteMetadata = {
	title: `Kosta Hassouros`,
	description: `Kosta's Personal Website Built with Gatsby, React, NodeJS, and Chakra UI.`,
	author: `@kostahassouros`,
	siteUrl: `https://kostahassouros.com/`,	
};

module.exports = {
	siteMetadata,
	plugins: [
		`gatsby-plugin-netlify`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `kostahassouros.com`,
				short_name: `website`,
				start_url: `/`,
				background_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/siteIcon.png`,
			},
		},
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				resetCSS: true,
				isUsingColorMode: true,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
			},
		},	
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`,
			},
		}
	],
};