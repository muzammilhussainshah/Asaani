import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/header';
import Charactors from '../../components/charactors';
// import { ScrollView } from 'react-native-gesture-handler';
let { height, width } = Dimensions.get('window');
class checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "",
            err: false,
            errMessage: "",
        }
    };


    componentWillMount() {
        let basket = this.props.navigation.getParam("data")
        console.log(basket, "checkout page")
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            basket,
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
    order() {
        const { Name, Address, Description, Phone, basket } = this.state

        let obj = {
            Name, Address, Phone, Description, basket
        }
        let verify = true
        for (var key in obj) {
            if (!obj[key]) {
                this.setState({
                    err: true, errMessage: key
                })
                setTimeout(() => {
                    this.setState({
                        err: false, errMessage: ""
                    })
                }, 5000);
                verify = false
                break
            }
        }
        {verify&&console.log("order place successfully",obj)}
        console.log(obj, "checkoiut form goes to email")
    }
    render() {
        const { fields, loading, screenHeight, basket, err, errMessage } = this.state
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}

                style={{ width: '100%', height: '100%' }}>

                <View style={{ flex: 1, }}>

                    {/* //drawer close view// */}
                    {(this.state.drawer === true) && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.setState({ drawer: false }) }}
                            style={{ position: "absolute", height: screenHeight, width: "20%", right: 0, zIndex: 1 }}>
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
                    <Header func={() => this.setState({ drawer: true })} heading="Checkout" />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 1, }}>
                        <ScrollView>
                            <View style={{ alignItems: "center" }}>
                                <AntDesign name="shoppingcart" size={60} style={{ color: "#fff" }} />
                            </View>
                            <View style={{ flexDirection: "row", paddingHorizontal: 22 }}>
                                <Text style={{ flex: 7, fontSize: 16, color: "#fff" }}>Service </Text>
                                <Text style={{ flex: 3, fontSize: 16, color: "#fff", fontWeight: "bold" }}>{basket.title} </Text>
                            </View>
                            <View style={{ flexDirection: "row", paddingHorizontal: 22 }}>
                                <Text style={{ flex: 7, fontSize: 16, color: "#fff" }}>Total </Text>
                                <Text style={{ flex: 3, fontSize: 16, color: "#fff", fontWeight: "bold" }}>Rs {basket.price} </Text>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View
                                    style={{ width: "90%", borderColor: "white", borderWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Name"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Name => { this.setState({ Name }) }}

                                    // onChangeText={companyName => {
                                    //     this.setState({ [value[1]]: companyName }, () => {
                                    //         console.log("con", this.state.companyName, this.state.email, this.state.password, this.state.cnfpassword)
                                    //     })
                                    // }}
                                    />
                                </View>


                                <View
                                    style={{ marginTop: 10, width: "90%", borderColor: "white", borderWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Address"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Address => { this.setState({ Address }) }}

                                    // onChangeText={companyName => {
                                    //     this.setState({ [value[1]]: companyName }, () => {
                                    //         console.log("con", this.state.companyName, this.state.email, this.state.password, this.state.cnfpassword)
                                    //     })
                                    // }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderColor: "white", borderWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Phone"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Phone => { this.setState({ Phone }) }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderColor: "white", borderWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Description"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Description => { this.setState({ Description }) }}

                                    // onChangeText={companyName => {
                                    //     this.setState({ [value[1]]: companyName }, () => {
                                    //         console.log("con", this.state.companyName, this.state.email, this.state.password, this.state.cnfpassword)
                                    //     })
                                    // }}
                                    />
                                </View>
                            </View>
                            <View style={{ alignItems: "center", marginTop: "5%" }}>
                                <TouchableOpacity
                                    onPress={() => this.order()}
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
                                    <Text style={{ color: "white", fontWeight: "bold" }}>Confirm order</Text>
                                </TouchableOpacity>
                                {
                                    err &&
                                    <Text style={{ color: "red", marginTop: 10 }}>{errMessage}is required</Text>
                                }
                            </View>
                        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(checkout);