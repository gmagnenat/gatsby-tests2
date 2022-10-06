import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
	return (
		<>
			<p>I'm making a blog</p>
			<StaticImage
				alt='A brickwall with several posters aligned on 2 rows showing the mailchimp logo'
				src='../images/mailchimpPoster.avif'
			/>
		</>
	);
};

export const Head = () => (
	<Seo title='Home Page' description='this is the home page' />
);

export default IndexPage;
