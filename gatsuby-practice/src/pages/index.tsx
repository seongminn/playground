import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import GlobalStyle from '@components/common/GlobalStyle';
import Introduction from '@components/main/Introduction';
import Footer from '@components/common/Footer';
import CategoryList from '@components/main/CategoryList';
import PostList from '@components/main/PostList';

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
};

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default IndexPage;
