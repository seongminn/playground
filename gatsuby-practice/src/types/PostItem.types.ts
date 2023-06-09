import { IGatsbyImageData } from 'gatsby-plugin-image';

export type PostFrontmatterType = {
  title: string;
  date: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
    publicURL: string;
  };
};

export type PostPageItemProps = {
  node: {
    html: string;
    id: string;
    fields: { slug: string };
    frontmatter: PostFrontmatterType;
  };
};
