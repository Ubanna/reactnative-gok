import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FlatList } from "react-native-gesture-handler";
import { getTodos } from "../components/redux/actions/userActions";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.todos !== nextProps.user.todos) {
      return {
        todos: nextProps.user.todos,
      };
    }

    return null;
  }

  componentDidMount() {
    this.props.getTodos();
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.ListItems}>
        <View style={{ flex: 1, justifyContent: "center", paddingLeft: 12 }}>
          <Text style={styles.titleNews}>{item.title}</Text>
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 12,
              marginVertical: 5,
              color: "#617d98",
            }}
          >
            {item.completed} {item.userId}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    const { todos } = this.state;
    let view = (
      <View>
        <FlatList
          data={this.state.todos}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    );

    return (
      <>
        <View>{view}</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  ListItems: {
    flex: 1,
    // flexDirection: 'row',
    borderBottomColor: "#a5a5a5",
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    // marginTop: 15,
    paddingLeft: 15,
    padding: 15,
    marginVertical: 10,
  },
  images: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 8,
  },
  titleNews: {
    fontSize: 14,
    color: "#102A42",
  },
});

Home.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps = {
  getTodos,
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
