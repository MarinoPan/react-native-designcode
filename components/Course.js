import React from "react";
import styled from "styled-components";

const Course = props => (
  <Wrapper>
    <Container>
      <Cover>
        <Image source={props.image} />
        <Logo source={props.logo} resizeMode="contain" />
        <Subtitle>{props.subtitle}</Subtitle>
        <Title>{props.title}</Title>
      </Cover>
      <Content>
        <Avatar source={props.avatar} />
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Content>
    </Container>
  </Wrapper>
);

export default Course;

const Wrapper = styled.View`
  padding: 20px;
`;

const Container = styled.View`
  background: white;
  width: 100%;
  height: 335px;
  border-radius: 14px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  justify-content: center;
  padding-left: 62px;
  height: 75px;
`;

const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 20px;
  left: 50%;
  margin-left: -24px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-left: 20px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-top: 4px;
  width: 170px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
  font-weight: 500;
  margin-left: 20px;
  max-width: 260px;
`;

const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
  margin-left: 20px;
`;
