import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

type MetaProps = JSX.IntrinsicElements["meta"];

interface Props {
	description?: string
	lang?: string
	meta?: MetaProps[]
	title: string
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery(
	graphql`
			query SiteMetadata {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

  const metaDescription = description || site?.siteMetadata?.description || "";

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={site?.siteMetadata?.title || ""}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.author || "",
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			// @ts-ignore
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};

export default SEO;