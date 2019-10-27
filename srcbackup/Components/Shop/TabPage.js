import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { GetAllItems,SelectProduct } from '../../Actions'
import { Spinner } from '../../Common'
var { height, width } = Dimensions.get('window');

class TabPage extends Component {
    constructor(props) {
        super(props)

        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        };

        console.log('5555')
       this.props.GetAllItems(this.props.d_id, this.props.c_id,this.props.items);
       
    }
    sendProduct(item){
        this.props.SelectProduct(item)
    }
    renderex(){
       
    }
    keyExtractor = (item, index) => item.id;
  
    renderItems=({ item })=> {
        return (
            <TouchableOpacity  key={item.product_id}  onPress={()=>{this.sendProduct(item.product_id)}} style={style.container}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: width / 3, height: height / 8, resizeMode: 'contain' }} source={{ uri: `https://mobilebackend.turing.com/images/products/${item.thumbnail}` }} />
                </View>
                <View style={{ flex: 2, justifyContent: "center", alignItems: 'center' }}>
                    <Text style={style.TextStyle} key={item.product_id}>{item.name.toUpperCase()}</Text>

                    <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                        <Text style={[style.TextStyle, { color: "#999999", fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>${item.price.toUpperCase()}  </Text>
                        <Text style={[style.TextStyle, { fontWeight: 'bold', fontSize: 15 }]} key={item.product_id}>${item.discounted_price.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column-reverse" }}>
                    <Text style={[style.Badge,{backgroundColor:item.discounted_price>0?'#f3b453':'#b0d39b'}]}>{item.discounted_price>0?'SALE':'NEW'}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    render() {
        console.log('dasdasdasdsa',this.props)
         
        const { itemsLoading,c_id,d_id } = this.props
        const index=d_id==0?c_id:0;
        if (itemsLoading) {
            return (
                <Spinner size="large" />
            )
        }
        else {
            return (
                <ScrollView>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.props.items[index]}
                        renderItem={this.renderItems}
                        viewabilityConfig={this.viewabilityConfig}
                    />

                </ScrollView>
            )
        }
    }
}
const style = {
    container: {
        flexDirection: 'row',
        height: 120,
        borderBottomWidth: 1,
        marginTop: 10,
        borderBottomColor: "#BFBFBF"
    },
    TextStyle: {
        fontFamily: "SourceSansPro-Light",
        fontSize: 18,
        color: "#454545",

    },
    Badge: {
        backgroundColor: '#b0d39b',
        width: 60,
        textAlign: 'center',
        color: 'white'
    }
}
const mapStateToProps = ({ myshop }) => {
    const { items, itemsLoading } = myshop;
    return { items, itemsLoading };
}
export default connect(mapStateToProps, { GetAllItems,SelectProduct })(TabPage);