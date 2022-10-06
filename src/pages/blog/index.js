import React from 'react';
import { Link, graphql } from 'gatsby';
import Seo from '../../components/seo';

const BlogPage = ({ data }) => {
	return (
		<>
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
					</h2>
					<p>Posted: {node.frontmatter.date}</p>
				</article>
			))}
		</>
	);
};

// graphql query
export const query = graphql`
	query {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
					slug
				}
				id
				excerpt
			}
		}
	}
`;

export const Head = () => (
	<Seo title='My Blog Posts' description='Blog Posts archive' />
);

export default BlogPage;
