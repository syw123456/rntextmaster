import React from "react";
import {
    StyleSheet,
    Navigator,
    Text,
    View,
    StatusBar,
    BackAndroid,
    Platform
} from 'react-native';
import {getRouteMap, registerNavigator} from './route';
import {createStore,applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from "./reducers";
import MusicControlModal from './component/musicControlModal';
import Toast from './util/toast';
import Orientation from './util/orientation';
import  * as Wechat from "react-native-wechat";
let lastClickTime = 0;
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    navigator:{
        flex:1,
        backgroundColor:white
    },
    errorView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        bckgroundColor:'white'

    },
    errorText:{
        color:'red',
        fontSize:16
    }
});
class App extends React.Component{
  constructor(props){
        super(pops);
        this.renderScene = this.renderScene.bind(this);
        this.onBackAndroid = this.onBackAndroidbind(this);
  }
  //componentWillMount在页面被渲染之前执行，也就是在render方法之前执行，一般在componentWillMount中触发请求数据的方法
  componentWillMount(){
      Orientation.lockToPortrait();
      if(Platform.os == 'android'){
          Orientation.registerOrientationChanged();
          BackAndroid.addEventListener('hardwarebackpress',this.onBackAndroid);
      }
  }
  //componentDidMount类似js中的window.onload，执行在render方法之后，也就是页面的组件渲染完毕之后
  componentDidMount(){
    Wechat.registerApp('your wechat appid');
  }
  componentWillUnmount(){
      if(Platform.OS == "android"){
          BackAndroid.addEventListener('hardwarebackpress',this.onBackAndroid);
      }
  }
  render(){
      return 
  }

}
