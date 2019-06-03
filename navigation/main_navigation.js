import React from 'react'
import { Icon } from 'native-base'
import { TabNavigator, TabBarBottom, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import ToDoAll from '../containers/todo_all'

class AllToDo extends React.Component {   
  render() {    
    return (
      <ToDoAll show_new_todo = { true } screen = "All" />
    )
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Active" />
    )
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Completed" />
    )
  }
}

export default createMaterialTopTabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo }
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName
      if (routeName === 'All') {
        iconName = `list`
      } else if (routeName === 'Active') {
        iconName = `unlock`
      } else{
        iconName = `checkmark`
      }
      return <Icon name={iconName} size={horizontal ? 20 : 25} color={'tintColor'} active = { true } />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    showLabel: true,
    showIcon: true,
    upperCaseLabel: true,
    scrollEnabled: false,
    tabStyle: {

    },
    labelStyle: {

    },
    iconStyle: {

    },
    style: {
      backgroundColor: '#eee',
    },
    indicatorStyle: {
      backgroundColor: '#0066cc',
    },
  },
  // tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  lazy: true
})

// export default TabNavigator({
//   All: { screen: AllToDo },
//   Active: { screen: ActiveToDo },
//   Completed: { screen: CompletedToDo },
// },{
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName
//       if (routeName === 'All') {
//         iconName = `list`
//       } else if (routeName === 'Active') {
//         iconName = `unlock`
//       } else{
//         iconName = `checkmark`
//       }
  
//       return <Icon name= { iconName } color = { 'red' } active = { true } />
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: 'tomato',
//     inactiveTintColor: 'gray',
//   },
//   tabBarComponent: TabBarBottom,
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   swipeEnabled: true,
// })