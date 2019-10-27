import React,{Component} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

class Hexagon extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){

    
    return (

        <View style={[styles.hexagon,this.props.style] }>
          <View style={[styles.hexagonInner,this.props.style1]} />
        <View style={[styles.hexagonBefore,this.props.style2]} />
        <View style={[styles.hexagonAfter,this.props.style3]} />
        </View>

    )
    }
}
const styles = {

    hexagon: {
        width: 50,
        height: 27.5
    },
    hexagonInner: {
        width: 50,
        height: 27.5,
        backgroundColor: 'red'
      },
      hexagonAfter: {
        position: 'absolute',
        bottom: -12.5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderLeftColor: 'transparent',
        borderRightWidth: 25,
        borderRightColor: 'transparent',
        borderTopWidth: 12.5,
        borderTopColor: 'red'
      },
      hexagonBefore: {
        position: 'absolute',
        top: -12.5,
        left: 0,
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderLeftWidth: 25,
        borderLeftColor: 'transparent',
        borderRightWidth: 25,
        borderRightColor: 'transparent',
        borderBottomWidth: 12.5,
        borderBottomColor: 'red'
    
      },
     
}
export default  Hexagon ;