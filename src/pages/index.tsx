import React, { FC } from "react";
import { graphql } from "gatsby";

import FadeIn from 'react-fade-in';

import BaseLayout from "../components/Layout/BaseLayout";
import Welcome from "../sections/Welcome";
import Status from "../sections/Status";
import Notes from "../sections/Notes";
import Work from "../sections/Work";
import WorkInteractive from "../sections/WorkInteractive";
import Contact from "../sections/Contact";

interface IProps {
	data: any;
}

const Index: FC<IProps> = ({ data }) => {
	return (
		<BaseLayout>
			<FadeIn>
				<Welcome content={data.welcome.edges[0].node} />
				<Status content={data.status.edges[0].node} />
                <Notes content={data.notes.edges} />
				<Work content={data.work.edges} />
				<WorkInteractive />
				<Contact content={data.contact.edges[0].node} />
			</FadeIn>
		</BaseLayout>
	);
};

export default Index;

export const pageQuery = graphql`
	{
		welcome: allMdx(
			filter: { fileAbsolutePath: { regex: "/index/welcome/" } }
		) {
			edges {
				node {
					frontmatter {
						welcomeText
						wordsToMark
					}
				}
			}
		},
		status: allMdx(
			filter: { fileAbsolutePath: { regex: "/index/status/" } }
		) {
			edges {
				node {
					frontmatter {
						description
					}
				}
			}
		},
		work: allMdx(
			filter: { fileAbsolutePath: { regex: "/index/work/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						url
						date	
					}
				}
			}
		},
		notes: allMdx(
			filter: { fileAbsolutePath: { regex: "/index/notes/" } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						url
						date	
					}
				}
			}
		},
		contact: allMdx(
			filter: { fileAbsolutePath: { regex: "/index/contact/" } }
		) {
			edges {
				node {
					frontmatter {
						contact
					}
				}
			}
		}
	}
`;