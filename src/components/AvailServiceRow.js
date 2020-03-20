import React, { useReducer } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { _AddToCart, _RemoveToCart} from '../store/action/action'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

let { height, width } = Dimensions.get('window');

class AvailServiceRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            removeItem: []
        }
    };
    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
   
    render() {
        const { removeItem } = this.state
        const { func, heading, title, data, addOrRemove, Index, subChildPro, childPro, mainPro, _AddToCart,_RemoveToCart, addToCartArray } = this.props
        let obj = { subChildPro, childPro, mainPro }
        console.log(data, "cccccccccccccccccccc", subChildPro, childPro, mainPro)
        return (
            <View
                style={{
                    flexDirection: "row", flex: 1, height: 80, alignItems: "center", borderBottomColor: "black", borderBottomWidth: 0.3,
                }}>
                    
                <View style={{ flex: 1.5, alignItems: "center" }} >
                    <Image
                        style={{ width: "100%", height: 200, }}
                        // style={{height:200}}
                        resizeMode="contain"
                        source={require('../assets/logocopy.png')} />
                </View>
                <View style={{ flex: 6.5, }}>
                    <View>
                        <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 16, fontFamily: 'Verdana-Bold', }}> {data.title} </Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 5, fontFamily: 'Verdana-Bold', fontSize: 16 }}>{data.text} Rs{data.price} </Text>
                    </View>
                </View>
                {/* {removeItem.map(i,v)} */}
                {addOrRemove === "Add" ?
                    <TouchableOpacity
                        onPress={() => {
                            _AddToCart(addToCartArray, data, subChildPro, childPro, mainPro)
                            func(Index)
                        }}
                        style={{ flex: 2, alignItems: "center" }}>
                        {/* <Ionicons name="ios-arrow-forward" size={35} style={{ color: "#235071" }} /> */}
                        <Text style={{ marginLeft: 5, fontFamily: 'Verdana-Bold', fontSize: 16, fontWeight: "bold", color: "#0C4F7A" }}> {addOrRemove} </Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => {
                            _RemoveToCart(addToCartArray, data, subChildPro, childPro, mainPro)
                            func(Index)
                        }}
                        style={{ flex: 2, alignItems: "center", }}>
                        {/* <Ionicons name="ios-arrow-forward" size={35} style={{ color: "#235071" }} /> */}
                        <Text style={{ marginLeft: 5, fontFamily: 'Verdana-Bold', fontSize: 16, fontWeight: "bold", color: "#0C4F7A" }}> {addOrRemove} </Text>
                    </TouchableOpacity>
                }



            </View>
        );
    }
}

const styles = StyleSheet.create({

})


function mapStateToProps(states) {
    return ({
        addToCartArray: states.root.addToCart
    })
}

function mapDispatchToProps(dispatch) {
    return {
        _AddToCart: (addToCartArray, data, subChildPro, childPro, mainPro, ) => {
            dispatch(_AddToCart(addToCartArray, data, subChildPro, childPro, mainPro));
        },
        _RemoveToCart: (addToCartArray, data, subChildPro, childPro, mainPro, ) => {
            dispatch(_RemoveToCart(addToCartArray, data, subChildPro, childPro, mainPro));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailServiceRow);