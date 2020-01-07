import React, { Component } from 'react';
import { Container, Button, Text, Content, Form, Item, Input, Label, Alert, Thumbnail, View } from 'native-base';
import { Image, TouchableOpacity, PanResponder, TouchableHighlight } from 'react-native';
import { login, notifications, logOut } from '../store/action/action';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {
    StyleSheet,

} from 'react-native';
import * as Animatable from 'react-native-animatable';


class Drawer extends Component {
    constructor() {
        super()
        this.state = {
            rout: "Feeds",
            animationStyle: ""
        }
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return !(gestureState.dx === 0 && gestureState.dy === 0)
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                return !(gestureState.dx === 0 && gestureState.dy === 0)
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return !(gestureState.dx === 0 && gestureState.dy === 0)
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                return !(gestureState.dx === 0 && gestureState.dy === 0)
            },
            onPanResponderGrant: (evt, gestureState) => {
                console.log("grant", gestureState.dx)
            },
            onPanResponderMove: (evt, gestureState) => {
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                console.log("release", gestureState.dx)
                if (gestureState.dx < -40) {
                    console.log("slide close")
                    this.setState({
                        animationStyle: "fadeOutLeftBig"
                    })
                    this.props.animateParent(false)
                }
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true;
            },
        });
    }
    componentWillMount() {
        console.log(this.props.animationStyle, "***************")
        this.setState({
            animationStyle: this.props.animationStyle,
        })
    }
    render() {
        console.log(this.state.animationStyle, "*********ssssssss******")
        return (
            <Animatable.View
                {...this._panResponder.panHandlers}
                animation={this.state.animationStyle}
                duration={500}
                style={{
                    // backgroundColor:"red",
                    borderRightWidth: 1,
                    borderRightRadius: 2,
                    borderRightColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 55,
                    flex: 1, width: "80%", height: "100%", position: "absolute", zIndex: 1,
                }}>

                <View style={{ flex: 1, backgroundColor: "#02275c", }}>
                    <Image style={{
                        width: "60%", height: "100%", marginHorizontal: "38%"
                    }}
                        source={require("../assets/logocopy.png")}
                    />
                    <View style={{ position: "absolute", zIndex: 1, padding: "5%" }}>
                        <Image
                            style={{
                                width: 100, height: 100, borderColor: "grey", borderWidth: 2, borderRadius: 100 / 2
                            }}
                            source={require("../assets/logocopy.png")}
                            uri
                        />
                        <Text style={{ color: "white", textDecorationLine: "underline" }}>
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: "white" }}>
                    {/* favrtssssssss */}
                    <TouchableOpacity
                        // onPress={() => this.props.navigation.navigate("Favorites")}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <MaterialIcons name="favorite" size={20} style={{ color: "#02275c", fontSize: 30 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>My Favorites</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* favrtssssssss */}
                    {/* logout */}
                    <TouchableOpacity
                        // onPress={this.logOut.bind(this)}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <Icon name="logout" size={20} style={{ color: "#02275c", fontSize: 30 }} />
                        </View>
                        <View style={{ flex: 5 }}>

                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>Logout</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        );
    }
}

function mapStateToProp(state) {
    return ({
        // isLoader: state.root.isLoader,
        // isError: state.root.isError,
        // errorMessage: state.root.errorMessage,
        // userProfile: state.root.userProfile,
        // favoriteAllAdds: state.root.favorites,

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // login: (userCredentials, navigation) => {
        //     dispatch(login(userCredentials, navigation));
        // },
        // logOut: (navigation) => {
        //     dispatch(logOut(navigation));
        // },
        // errorRemove: () => {
        //     dispatch(errorRemove());
        // }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Drawer);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    imgSize: {
        width: "50%",
        height: 100,
    },
    imgView: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        height: 200,
    },
    footerColor: {
        backgroundColor: "#cc3333"
    },
    marginText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 15
    },
    forgetYourPassword: {
        color: '#004D94',
        textAlign: 'center',
        margin: 15

    },
    btnTextMargin: {
        fontWeight: 'bold',
        marginTop: 8,

    }

});

const styl = StyleSheet.create({
    header: { backgroundColor: "#2196f3", flexDirection: 'row', borderBottomColor: '#cbcacf', borderBottomWidth: 1, shadowRadius: 1.2, shadowOpacity: 0.2, height: 50, shadowOffset: { width: 0, height: 2 }, elevation: 3 },
    input: { backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', width: '80%', margin: 5, borderBottomColor: "#FFCB05", borderBottomWidth: 0.5 },
    icons: { color: '#2196f3', marginRight: 10 },
    form: { backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, width: '80%', margin: 10, elevation: 7, borderRadius: 100, borderWidth: 1, borderColor: '#d6d7da' },
    button: { width: '80%', backgroundColor: '#FFCB05', marginLeft: '10%', marginRight: '10%', marginTop: '5%', borderColor: '#FFCB05', borderRadius: 100, borderWidth: 1, shadowColor: '#d7f0ff', shadowOffset: { width: 2, height: 4 }, shadowOpacity: 2, elevation: 9, marginBottom: 30 },
    error: { color: 'red', marginLeft: 30, marginRight: 30, width: '80%', fontWeight: "600" }
})