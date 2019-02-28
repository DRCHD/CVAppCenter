/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component,} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import Analytics from 'appcenter-analytics';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  constructor(props){
    super(props);
    this.state = { text: "Antwort"}
  }
  
  state = {
    mytext: "Simple App Center Text App ",
    y: " __ABCDE____",
    mytext: "<ANTWORT>",
    NumberHolder : 5
  }

  crashApp = () => {
      Analytics.trackEvent("before Crash");
      this.setState(x,null)
  }

  onPressLearnMore = () => {
      x = Math.floor(Math.random() * 5) + 1 ;

      if(this.state.text == ""+x){
        this.setState({y: "RICHTIG"})
      } else {
        this.setState({y: "FALSCH =>" + x})
      }

      //this.setState({y: ""+x})
  }


  render() {
    return (
      <View style={styles.container}>

      

        <Text style={styles.welcome}>Ich denke an eine Zahl zwischen 1 und 5, Welche?</Text>
        <TextInput  style={{height: 40, width: 50, borderColor: 'gray', borderWidth: 1}} 
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="eingabe"
          color="#841584"
        />
       <Text style={styles.welcome}>{this.state.y}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
