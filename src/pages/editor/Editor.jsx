import React from 'react'
import styled from 'styled-components';

const Editor = (props) => {
  const sections = props.sections;
  return (
    <Container>
      <Header>

      </Header>
    </Container>
  )
}

export default Editor;

const Container = styled.div`
    min-width: 550px;
  min-height: 450px;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  padding-top: 5px;
  height: fit-content;
  margin: 0 auto;
`

const Header = styled.div`
    .header {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
`