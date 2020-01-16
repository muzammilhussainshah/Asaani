import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import SlideDownCatogery from '../../components/SlideDownCatogery';
import Header from '../../components/header';
import Charactors from '../../components/charactors';
let { height, width } = Dimensions.get('window');
class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "",
            catogery: false,

        }
    };
    componentWillMount() {
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
        })
    }
    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
    animateParent(fals) {
        console.log(fals, "9999999999999999")
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }
    render() {
        const { fields, loading, screenHeight } = this.state
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}

                style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, }}>
                    {/* slidedown catogery  */}
                    {/* {(this.state.catogery === true) && (
                        <SlideDownCatogery/>
                    )} */}
                    {/* slidedown catogery  */}
                    {/* //drawer close view// */}
                    {(this.state.drawer === true) && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.setState({ drawer: false }) }}
                            style={{ position: "absolute", height: screenHeight, width: "30%", right: 0, zIndex: 1 }}>
                        </TouchableOpacity>
                    )}
                    {/* //drawer close view// */}
                    {/* draewaer  */}
                    {(this.state.drawer === true) && (
                        <Drawer
                            navigation={this.props.navigation}
                            animationStyle="fadeInLeftBig"
                            animateParent={this.animateParent.bind(this)}
                        />
                    )}
                    {/* draewaer  */}
                    {/* header */}
                    <Header func={() => this.setState({ drawer: true })} heading="Home" />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 9, }}>
                        <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>
                            <Charactors />
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ catogery: true })}
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderRadius: 5,
                                    elevation: 3,
                                    backgroundColor: "#fff", justifyContent: "center",
                                    alignItems: "center", width: "80%", height: 40,
                                    flexDirection: "row",
                                }}>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: 30, height: 30, flex: 1 }}
                                    source={require('../../assets/charactor.jpg')}
                                />
                                <Text style={{ color: "#0C4F7A", fontWeight: "bold", flex: 2 }}>AC mechanic</Text>
                                <Text style={{ color: "#0C4F7A", fontWeight: "bold", flex: 2 }}>250 Rs</Text>
                                <Icon name="chevron-small-down" size={30} style={{ color: "#515659" }} />

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("checkout")}
                                style={{
                                    marginTop: 5,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderRadius: 5,
                                    elevation: 3,
                                    backgroundColor: "#F5CD54", justifyContent: "center",
                                    alignItems: "center", width: "80%", height: 40
                                }}
                            >
                                <Text style={{ color: "white", fontWeight: "bold" }}>Book now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* body */}
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

function mapStateToProps(states) {
    return ({
    })
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            // signInWithGoogle, login
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);