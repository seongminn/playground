import styled from '@emotion/styled';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from '@hooks/useInfiniteScroll';
import { FunctionComponent } from 'react';
import { PostListItemType } from 'types/PostItem.types';
import PostItem from './PostItem';

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, filteredList }: useInfiniteScrollType =
    useInfiniteScroll(selectedCategory, posts);
  return (
    <PostListWrapper ref={containerRef}>
      {filteredList.map(({ node: { id, frontmatter } }) => (
        <PostItem key={id} link="https://www.google.co.kr" {...frontmatter} />
      ))}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 768px;
  margin: 0 auto;
  padding: 50px 0 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;
