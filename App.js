
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,  
  View,Button,Picker,Image
} from 'react-native';
import {TabNavigator,StackNavigator,TabBarBottom} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import VideoTab from "./src/comp/tabs/VideoTab";   
import Images from './src/comp/tabs/Images'
import BackboneEvents from "backbone-events-standalone";
// global event bus
window.EventBus = BackboneEvents.mixin({});

export const Tabbar = TabNavigator({
  
  Video:
  {
    screen: VideoTab,
    navigationOptions: {
      tabBarLabel: 'Video',  
     tabBarIcon: () => <Icon name="list" size={30} style={{color:'gray'}} />,
    },
  }, 
  Images:
  {
    screen: Images,
    navigationOptions: {
      tabBarLabel: 'Images',  
     tabBarIcon: () => <Icon name="list" size={30} style={{color:'gray'}} />,
    },
  }, 
  }, {
  tabBarComponent: ({ jumpToIndex, ...props}) => (
       <TabBarBottom
          {...props}
          jumpToIndex={(index) => {
            if(props.navigation.state.index === index) {
            props.navigation.clickButton(); //----> pass props params (code processes)
          }
          else {
            jumpToIndex(index);
          }
        }
      }
    />
   ), 
      tabBarPosition: "bottom",
      swipeEnabled: true,  
      lazy: true,
      tabBarOptions: {
        labelStyle: { fontSize: 10 },
        activeTintColor: 'red', 
      inactiveTintColor: 'gray',
        showIcon: true,
        showLabel: true,  
        style: {
          backgroundColor: '#000000',
          borderTopColor: '#000000',
          borderTopWidth: 1,  
         
        },  
        indicatorStyle: {
          backgroundColor: '#ffffff',  
          width: 0,
          height: 0,
          padding: 0,
          margin: 0
        }
      },
});    

  //const video = new Videos();
  
  

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.clickButton = this.clickButton.bind(this);
    
  }
  clickButton(){
    console.log('click button');
  }

  

  _handleNavagationStateChange(prevState, currentState){
  
  }  
  render (){   
    return (  
        <Tabbar onNavigationStateChange={(prevState, currentState) => {
          this._handleNavagationStateChange(prevState, currentState)
        }}
        clickButton={()=> this.clickButton()}
        />
    )  
  }   
}


