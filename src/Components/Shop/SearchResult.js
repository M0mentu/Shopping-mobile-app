import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchItemsAction, SelectProduct, searchTextChange } from '../../Actions'
import { View, Text, ScrollView, FlatList, Image, Dimensions, TouchableOpacity, TouchableHighlight, Alert, SafeAreaView, Switch } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Button, ActionSheet, ScrollableTab, Icon, Item, Input, Label, Textarea } from 'native-base';
import { Spinner, InputBB } from '../../Common'
import Modal from "react-native-modal";

import { styles } from 'react-native-image-slider-box/SliderBox';
var { height, width } = Dimensions.get('window');

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.props.SearchItemsAction(this.props.searchText)
        this.state = {
            clicked: '',
            modalWord: false,
            modalPage: false,
            modalPageLimit: false,
            modealDesc: false,
            modalText: false,

            all_words: true,
            page: 1,
            limit: 20,
            description_length: 200,
        }
        this.viewabilityConfig = {
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95
        };
    }
    sendProduct(item) {
        this.props.SelectProduct(item)
    }
    keyExtractor = (item, index) => item.id;
    renderItems = ({ item }) => {
        return (
            <View style={{ flexDirection: 'column',backgroundColor: "#fff"}}>
                
                <TouchableOpacity key={item.product_id} onPress={() => { this.sendProduct(item.product_id) }} style={style.container}>

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
                        <Text style={[style.Badge, { backgroundColor: item.discounted_price > 0 ? '#f3b453' : '#b0d39b' }]}>{item.discounted_price > 0 ? 'SALE' : 'NEW'}</Text>
                    </View>

                </TouchableOpacity>
                <View>
                    <Textarea disabled={true} editable={false} rowSpan={5} bordered value={item.description} />
                </View>
            </View>
        )
    }
    modalVisible1() {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    saveSearch() {
        this.setState({
            modalWord: false,
            modalPage: false,
            modalPageLimit: false,
            modealDesc: false,
            modalText: false,
        })
        const { all_words, page, limit, description_length } = this.state

        if (all_words) {

            var allWords = 'on'
        }
        else {
            var allWords = "off"
        }
        this.props.SearchItemsAction(this.props.searchText, allWords, page, limit, description_length)
    }
    onpageTextChange(text) {
        this.setState({ page: text })
    }
    onLimitTextChange(text) {
        this.setState({ limit: text })
    }
    onDescTextChange(text) {
        let x=parseInt(text)
        this.setState({ description_length:  x })
    }
    onTextChange(text) {
        this.props.searchTextChange(text)
    }
    render() {
        console.log("state", this.state)
        if (this.props.searcResult != '') {
            return (
                <ScrollView>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ backgroundColor: "#f2f2f2" }} >
                        <View style={{ flex: 1, backgroundColor: "#f2f2f2", paddingLeft: 10, paddingRight: 10, flexDirection: "row" }}>
                            <Button small rounded iconRight transparent style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: 'center' }}
                                onPress={_ => this.setState({ modalText: true })}>
                                <Text style={style.TextStyleTan} >Search item</Text>
                                <Icon name='arrow-down' type="Feather" style={{ color: "#454545" }} />
                            </Button>
                            <Button small rounded iconRight transparent style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: 'center', marginLeft: 10 }}
                                onPress={_ => this.setState({ modalWord: true })}>
                                <Text style={style.TextStyleTan} >All words</Text>
                                <Icon name='arrow-down' type="Feather" style={{ color: "#454545" }} />
                            </Button>
                            <Button small rounded iconRight transparent style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: 'center', marginLeft: 10 }}
                                onPress={_ => this.setState({ modalPage: true })}>
                                <Text style={style.TextStyleTan} >Page</Text>
                                <Icon name='arrow-down' type="Feather" style={{ color: "#454545" }} />
                            </Button>
                            <Button small rounded iconRight transparent style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: 'center', marginLeft: 10 }}
                                onPress={_ => this.setState({ modalPageLimit: true })}>
                                <Text style={style.TextStyleTan} >Per page</Text>
                                <Icon name='arrow-down' type="Feather" style={{ color: "#454545" }} />
                            </Button>
                            <Button small rounded iconRight transparent style={{ backgroundColor: "#fff", justifyContent: "center", alignItems: 'center', marginLeft: 10 }}
                                onPress={_ => this.setState({ modealDesc: true })}>
                                <Text style={style.TextStyleTan} >Descrition length</Text>
                                <Icon name='arrow-down' type="Feather" style={{ color: "#454545" }} />
                            </Button>
                        </View>

                    </ScrollView>
                    <Modal backdropColor={'transparent'} animationIn="fadeInUp" onBackdropPress={() => this.setState({ modalText: false })} isVisible={this.state.modalText}
                        style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                        }}>
                        <View style={{ height: height * 0.20, width: width, backgroundColor: "#fff", bottom: 0, position: "absolute", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={style.TextStyleMod}>Search for item by name</Text>
                            <Item floatingLabel  >
                                <Label style={{ textalign: 'center' }}>Item Name</Label>
                                <Input style={{ textalign: 'center' }}
                                    onChangeText={this.onTextChange.bind(this)}
                                    maxLength={40} value={this.props.searchText}
                                    keyboardType="default"
                                    returnKeyType='search'
                                    autoFocus={true}
                                    onSubmitEditing={_ => this.saveSearch()}
                                />
                            </Item>


                            <Button title="Save" style={style.saveButtonStyle} onPress={_ => this.saveSearch()} >
                                <Text style={{ fontSize: 20, fontFamily: 'SourceSansPro', color: "#fff" }}>SAVE</Text>
                            </Button>
                        </View>
                    </Modal>


                    <Modal backdropColor={'transparent'} animationIn="fadeInUp" onBackdropPress={() => this.setState({ modalWord: false })} isVisible={this.state.modalWord}
                        style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                        }}>
                        <View style={{ height: height * 0.20, width: width, backgroundColor: "#fff", bottom: 0, position: "absolute" }}>
                            <Text style={style.TextStyleMod}>Search for all the words or each word seperatly, default ON</Text>
                            <Switch
                                value={this.state.all_words}
                                color={"#EFB961"}
                                onValueChange={_ => {
                                    this.setState({ all_words: !this.state.all_words });
                                }
                                }
                            />
                            <Button title="Save" style={style.saveButtonStyle} onPress={_ => this.saveSearch()} >
                                <Text style={{ fontSize: 20, fontFamily: 'SourceSansPro', color: "#fff" }}>SAVE</Text>
                            </Button>
                        </View>
                    </Modal>



                    <Modal backdropColor={'transparent'} animationIn="fadeInUp" onBackdropPress={() => this.setState({ modalPage: false })} isVisible={this.state.modalPage}
                        style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                        }}>
                        <View style={{ height: height * 0.20, width: width, backgroundColor: "#fff", bottom: 0, position: "absolute", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={style.TextStyleMod}>Select a page to start from, default 1</Text>
                            <Item floatingLabel  >
                                <Label style={{ textalign: 'center' }}>Page Number</Label>
                                <Input style={{ textalign: 'center' }}
                                    onChangeText={this.onpageTextChange.bind(this)}
                                    maxLength={2} value={this.state.page}
                                    keyboardType="number-pad"
                                    returnKeyType='search'
                                    autoFocus={true}
                                    onSubmitEditing={_ => this.saveSearch()} />
                            </Item>


                            <Button title="Save" style={style.saveButtonStyle} onPress={_ => this.saveSearch()} >
                                <Text style={{ fontSize: 20, fontFamily: 'SourceSansPro', color: "#fff" }}>SAVE</Text>
                            </Button>
                        </View>
                    </Modal>



                    <Modal backdropColor={'transparent'} animationIn="fadeInUp" onBackdropPress={() => this.setState({ modalPageLimit: false })} isVisible={this.state.modalPageLimit}
                        style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                        }}>
                        <View style={{ height: height * 0.20, width: width, backgroundColor: "#fff", bottom: 0, position: "absolute", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={style.TextStyleMod}>Limit items per page, default 20</Text>
                            <Item floatingLabel  >
                                <Label style={{ textalign: 'center' }}>Pages Limit</Label>
                                <Input style={{ textalign: 'center' }}
                                    onChangeText={this.onLimitTextChange.bind(this)}
                                    maxLength={2} value={this.state.limit}
                                    keyboardType="number-pad"
                                    returnKeyType='search'
                                    autoFocus={true}
                                    onSubmitEditing={_ => this.saveSearch()} />
                            </Item>


                            <Button title="Save" style={style.saveButtonStyle} onPress={_ => this.saveSearch()} >
                                <Text style={{ fontSize: 20, fontFamily: 'SourceSansPro', color: "#fff" }}>SAVE</Text>
                            </Button>
                        </View>
                    </Modal>


                    <Modal backdropColor={'transparent'} animationIn="fadeInUp" onBackdropPress={() => this.setState({ modealDesc: false })} isVisible={this.state.modealDesc}
                        style={{
                            margin: 0, alignItems: undefined,
                            justifyContent: undefined,
                        }}>
                        <View style={{ height: height * 0.20, width: width, backgroundColor: "#fff", bottom: 0, position: "absolute", justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={style.TextStyleMod}>Limit of the description, Default: 200 characters</Text>
                            <Item floatingLabel  >
                                <Label style={{ textalign: 'center' }}>Describtion Limit</Label>
                                <Input style={{ textalign: 'center' }}
                                    onChangeText={this.onDescTextChange.bind(this)}
                                    maxLength={3} value={this.state.description_length}
                                    keyboardType="number-pad"
                                    returnKeyType='search'
                                    autoFocus={true}
                                    onSubmitEditing={_ => this.saveSearch()} />
                            </Item>


                            <Button title="Save" style={style.saveButtonStyle} onPress={_ => this.saveSearch()} >
                                <Text style={{ fontSize: 20, fontFamily: 'SourceSansPro', color: "#fff" }}>SAVE</Text>
                            </Button>
                        </View>
                    </Modal>

                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.props.searcResult.rows}
                        renderItem={this.renderItems}
                        viewabilityConfig={this.viewabilityConfig}
                    />


                </ScrollView>
            )
        }
        else if (this.props.searcResult.count == 0) {
            <Text>NO ITEMS FOUND</Text>
        }
        else {
            return (<Spinner size="large" />)
        }
    }
}
const style = {
    container: {
        flexDirection: 'row',
        height: 120,
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom:  10,

       // borderBottomColor: "#BFBFBF"

    },
    TextStyle: {
        fontFamily: "SourceSansPro-Light",
        fontSize: 18,
        color: "#454545",

    },
    TextStyleTan: {
        fontFamily: "SourceSansPro",
        fontSize: 18,
        color: "#454545",
        paddingLeft: 20

    },
    TextStyleMod: {
        fontFamily: "SourceSansPro",
        fontSize: 18,
        color: "#454545",
        textalign: 'center'

    },
    Badge: {
        backgroundColor: '#b0d39b',
        width: 60,
        textAlign: 'center',
        color: 'white'
    },
    saveButtonStyle: {
        bottom: 0,
        position: "absolute",
        width: width,
        backgroundColor: '#EFB961',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
const mapStateToProps = ({ myshop }) => {
    const { searchText, searcResult } = myshop
    return { searchText, searcResult };
}
export default connect(mapStateToProps, { searchTextChange, SearchItemsAction, SelectProduct })(SearchResult)
