import { FunctionComponent, ReactNode } from 'react';
import GlobalStyle from './GlobalStyle';
import styled from '@emotion/styled';
import Footer from './Footer';

type TemplateProps = {
  children: ReactNode;
};

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

export default Template;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
