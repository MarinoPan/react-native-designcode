import React from "react";
import { ScrollView, SafeAreaView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Logo from "../components/Logo";
import Course from "../components/Course";
import Menu from "../components/Menu";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU"
      })
  };
}

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity onPress={this.props.openMenu}>
                <Avatar source={require("../assets/avatar.jpg")} />
              </TouchableOpacity>
              <Title>Welcome back,</Title>
              <Name>Marino</Name>
              <Ionicons
                name="ios-notifications"
                size={32}
                color="#4775f2"
                style={{ position: "absolute", right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle>Related Courses</Subtitle>

            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-bottom: 10px;
`;

const logos = [
  {
    image: require("../assets/logo-sketch.png"),
    text: "Sketch"
  },
  {
    image: require("../assets/logo-framerx.png"),
    text: "Framer X"
  },
  {
    image: require("../assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("../assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/logo-swift.png"),
    text: "Swift"
  }
];

const cards = [
  {
    image: require("../assets/background11.jpg"),
    title: "React Native",
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    image: require("../assets/background12.jpg"),
    title: "React Native",
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    image: require("../assets/background6.jpg"),
    title: "React Native",
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    image: require("../assets/background3.jpg"),
    title: "React Native",
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("../assets/logo-react.png")
  },
  {
    image: require("../assets/background4.jpg"),
    title: "React Native",
    subtitle: "React Native",
    caption: "5 of 12 sections",
    logo: require("../assets/logo-react.png")
  }
];

const courses = [
  {
    image: require("../assets/background7.jpg"),
    title: "Prototype in InVision Studio",
    subtitle: "10 Sections",
    logo: require("../assets/logo-studio.png"),
    author: "Marino Panariello",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design with InVision"
  },
  {
    image: require("../assets/background13.jpg"),
    title: "Design and Code with Framer",
    subtitle: "8 Sections",
    logo: require("../assets/logo-studio.png"),
    author: "Marino Panariello",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  }
];
