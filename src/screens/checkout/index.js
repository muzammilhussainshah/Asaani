import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView, Image, Modal, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import ThankYou from '../../components/ThankYou'
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/header';
import DatePicker from 'react-native-datepicker'
import { createOrder } from "../../store/action/action"
import * as Animatable from 'react-native-animatable';

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
            date: "",
            coupon: "",
            modalVisible: true,
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
        const { Name, Address, Description, Phone, basket, date } = this.state
        let obj = {
            Name, Address, Phone, Description, basket, date
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
        {
            verify && this.props.createOrder(obj)
        }
    }

    render() {
        const { fields, loading, screenHeight, basket, err, errMessage, modalVisible, coupon } = this.state
        const { appLoader, thankYou, discountFrmDb } = this.props
        console.log(discountFrmDb, "coupon")
        console.log(discountFrmDb[0]["coupon expiry date"], "coupon",
            new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime()
        )
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}

                style={{ width: '100%', height: '100%' }}>
                {(thankYou) ? (
                    <ThankYou modalState={thankYou} navigation={this.props.navigation} />
                ) : (null)}

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
                    <Header func={() => this.setState({ drawer: true })} />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <ScrollView>
                            <View style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.20,
                                shadowRadius: 1.41,

                                elevation: 3,
                            }}>

                                {/* <View style={{ alignItems: "center" }}>
                                <AntDesign name="shoppingcart" size={60} style={{ color: "black" }} />
                            </View> */}
                                <View style={{ flexDirection: "row", paddingVertical: 5, paddingHorizontal: 22, borderBottomColor: "black", borderBottomWidth: 0.3 }}>
                                    <AntDesign name="shoppingcart" size={60} style={{ flex: 5, color: "black" }} />
                                    <Text style={{ flex: 5, fontSize: 16, color: "black", fontWeight: "bold", alignSelf: "center" }}>{basket.title} </Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", paddingHorizontal: 22 }}>
                                    <Text style={{ flex: 5, fontSize: 16, color: "black" }}>Total </Text>
                                    <Text style={{ flex: 5, fontSize: 16, color: "black", fontWeight: "bold" }}>Rs {basket.price} </Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View
                                    style={{ width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
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
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
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
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
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
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
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
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <DatePicker
                                        style={{ width: "100%", }}
                                        date={this.state.date}
                                        mode="date"
                                        placeholder="Booking Slot"
                                        format="YYYY-MM-DD"
                                        // minDate="2016-05-01"
                                        // maxDate="2016-06-01"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 0,
                                                top: 4,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                borderColor: "black", borderWidth: 0,
                                                marginLeft: 36
                                            }
                                            // ... You can check the source to find the other keys.
                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Do you have any discount coupon?"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={coupon => {
                                            
                                            this.setState({ coupon }) }}

                                    // onChangeText={companyName => {
                                    //     this.setState({ [value[1]]: companyName }, () => {
                                    //         console.log("con", this.state.companyName, this.state.email, this.state.password, this.state.cnfpassword)
                                    //     })
                                    // }}
                                    />
                                </View>
                                {
                                    (discountFrmDb[0]["coupon code"] !== coupon && coupon !== "") ?
                                        <Text style={{ color: "red", marginTop: 10 }}>
                                            Invalid coupon<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                        </Text> :
                                        (discountFrmDb[0]["coupon code"] === coupon && coupon !== ""
                                        &&(new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime()>1)
                                        ) ?
                                        
                                            <Text style={{ color: "green", marginTop: 10 }}>
                                                Activated<AntDesign name="check" size={20} style={{ flex: 5, color: "green" }} />
                                            </Text> 
                                            
                                            
                                            :
                                               (discountFrmDb[0]["coupon code"] === coupon && coupon !== "")
                                               &&(new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime()<0)?
                                               <Text style={{ color: "red", marginTop: 10 }}>
                                                your coupon is expired<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                            </Text> : 
                                            null
                                }
                            </View>
                            <View style={{ alignItems: "center", marginTop: "5%" }}>
                                {appLoader ?
                                    <View
                                        //  onPress={() => this.order()}
                                        style={{
                                            marginTop: 5,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.22,
                                            shadowRadius: 2.22,
                                            // borderRadius: 5,
                                            elevation: 3,
                                            backgroundColor: "#F5CD54", justifyContent: "center",
                                            alignItems: "center", width: "100%", height: 50
                                        }}
                                    >
                                        <ActivityIndicator style={styles.row1} size={25} color="white" />
                                    </View>
                                    :
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
                                            // borderRadius: 5,
                                            elevation: 3,
                                            backgroundColor: "#F5CD54", justifyContent: "center",
                                            alignItems: "center", width: "100%", height: 50
                                        }}
                                    >
                                        <Text style={{ color: "white", }}>Confirm order</Text>
                                    </TouchableOpacity>
                                }
                                {
                                    err && <Text style={{ color: "red", marginTop: 10 }}>{errMessage} is required</Text>
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

// function mapStateToProp(state) {
//     return ({
//         test: state.root.test,

//     })
// }





function mapStateToProp(state) {
    return ({

        thankYou: state.root.thankYou,
        appLoader: state.root.appLoader,
        discountFrmDb: state.root.discountFrmDb,

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        createOrder: (obj) => {
            dispatch(createOrder(obj));
        },

    })
}

export default connect(mapStateToProp, mapDispatchToProp)(checkout);