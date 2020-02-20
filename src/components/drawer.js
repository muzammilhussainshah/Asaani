import React, { Component } from 'react';
import { Text, View } from 'native-base';
import { Image, TouchableOpacity, PanResponder, StyleSheet,Linking, Platform,  } from 'react-native';
import { login, notifications, logOut } from '../store/action/action';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
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
    makeCall = () => {

        let phoneNumber = '';
    
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${03464100928}';
        } else {
          phoneNumber = 'telprompt:${03464100928}';
        }
    
        Linking.openURL(phoneNumber);
      };
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
                    flex: 1, width: "70%", height: "100%", position: "absolute", zIndex: 1,
                }}>
                <View style={{ flex: 1, backgroundColor: "#0C4F7A", justifyContent: "center", alignItems: "center" }}>
                    <View style={{}}>
                        <Image
                            resizeMode={"contain"}
                            style={{
                                width: 170, height: 170,
                            }}
                            source={require("../assets/drawerHead.png")}
                        />
                    </View>
                </View>
                <View style={{ flex: 3, backgroundColor: "white" }}>
                    {/* Home */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("home")}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <AntDesign name="home" size={20} style={{ color: "#02275c", fontSize: 25 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>Home</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Home */}
                       {/* Notifications */}
                       <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Notifications")}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <Ionicons name="ios-notifications-outline" size={20} style={{ color: "#02275c", fontSize: 30 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>Notifications</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* Notifications */}
                    {/* About */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("about")}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <MaterialCommunityIcons name="account-details" size={20} style={{ color: "#02275c", fontSize: 30 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>About</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* About */}
                    {/*FAQs */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("faqs")}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <AntDesign name="retweet" size={20} style={{ color: "#02275c", fontSize: 25 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>FAQs</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/*FAQs */}
                    {/*Contact us*/}
                    <TouchableOpacity
                        // onPress={() => this.props.navigation.push("contactUs")}
                        onPress={this.makeCall}
                        style={{ flex: 0.13, flexDirection: "row" }}>
                        <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
                            <AntDesign name="phone" size={20} style={{ color: "#02275c", fontSize: 25 }} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <View style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ color: "#02275c", }}>Help line</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/*Contact us */}
                </View>
            </Animatable.View>
        );
    }
}

function mapStateToProp(state) {
    return ({
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Drawer);
const styles = StyleSheet.create({
    container: {
    },
});
