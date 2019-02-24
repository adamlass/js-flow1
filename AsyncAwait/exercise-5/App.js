import React from 'react';
import {
  Text, View, Platform, TouchableOpacity, StyleSheet,
  Button, TextInput, ActivityIndicator
} from 'react-native';
import { Constants } from "expo";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Facade from "./swapiFacade"

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class RandomPerson extends React.Component {
  static navigationOptions = { title: "Random Person" }
  constructor() {
    super();
    this.state = { person: null, interval: null }
  }


  async componentDidMount() {
    this.fetchRandomPerson()
    const interval = setInterval(this.fetchRandomPerson, 3000);
    this.setState({ interval })
  }
  async componentWillUnmount() {
    clearInterval(this.state.interval)
    console.log("interval cleared!")
  }

  fetchRandomPerson = async () => {
    console.log("im fetch")
    const person = await Facade.getRandomPerson()
    this.setState({ person })
  }

  render() {
    var films = []
    if (this.state.person) {
      this.state.person.films.forEach(film => {
        films.push(
          <Text>{film}</Text>
        )
      });
    }
    return (
      <View style={{ margin: 10 }}>
        {this.state.person ?
          <>
            <PersonRender person={this.state.person} />
            <Text style={{ fontSize: "25px" }}>Films</Text>

            {films}
          </>
          : null
        }
      </View>
    );
  }
}

PersonRender = ({ person }) => {
  return (
    <>
      <Text style={{ fontSize: "30px" }}>Person</Text>
      <Text>Name: {person["name"]}</Text>
      <Text>Height: {person["height"]}</Text>
      <Text>Mass: {person["mass"]}</Text>
      <Text>Gender: {person["gender"]}</Text>
    </>
  )
}

class FetchPerson extends React.Component {
  static navigationOptions = { title: "Get Person by id" }
  constructor() {
    super();
    this.state = { person: null }
  }

  componentDidMount() {

  }

  updatePerson = async (id) => {
    const person = await Facade.getPerson(id)
    this.setState({ person })
  }

  render() {

    return (
      <View style={{ margin: 10 }}>
        {/* <Text >Add code to let users provide and ID, and use fetch to fetch the person (character)</Text> */}
        <TextInput
          style={{ height: 40, fontSize: 40 }}
          placeholder="Type in a id"
          onChangeText={this.updatePerson}
        />
        {this.state.person ?
          <PersonRender person={this.state.person} />
          : null
        }
      </View>
    )
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Using async/await in Apps' };
  render() {
    Facade.init()
    Facade.getRandomPerson()
    const { navigate } = this.props.navigation;
    return (
      <View style={{ margin: 10 }}>
        <Text>Using the swapi.co API, fetch and async/await</Text>
        <Touchable onPress={() => navigate('randomperson')} title="Random Person" />
        <Touchable onPress={() => navigate('fetchperson')} title="Get person by id" />
      </View>
    )
  }
}

export default App = () => (
  <View style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight, flex: 1 }}>
    <RouteStack />
  </View>
)

const RouteStack = createAppContainer(createStackNavigator({
  Home: { screen: HomeScreen },
  randomperson: { screen: RandomPerson },
  fetchperson: { screen: FetchPerson },
}))

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})