import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView,  ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import ThankYou from '../../components/ThankYou'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/header';
import DatePicker from 'react-native-datepicker'
import { createOrder, storeData } from "../../store/action/action"
import AsyncStorage from '@react-native-community/async-storage';
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
            discountPkg: "",
            Name: "", Address: "", Phone: "",
        }
    };
    componentWillMount() {
        this.getData()
        let basket = this.props.navigation.getParam("data")
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            basket,
        })
    }
    componentWillUnmount() {
        this.setState({
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "",
            err: false,
            errMessage: "",
            date: "",
            coupon: "",
            modalVisible: true,
            discountPkg: ""
        })
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }
    getData = async () => {
        try {
            const UserName = await AsyncStorage.getItem('UserName')
            const UserAddress = await AsyncStorage.getItem('UserAddress')
            const UserPhone = await AsyncStorage.getItem('UserPhone')
            if (UserName && UserAddress && UserPhone) {
                this.setState({
                    Name: UserName, Address: UserAddress, Phone: UserPhone,
                })
            }
        } catch (e) {
        }
    }
    storeData = async (obj) => {
        try {
            await AsyncStorage.setItem('UserName', obj.Name)
            await AsyncStorage.setItem('UserAddress', obj.Address)
            await AsyncStorage.setItem('UserPhone', obj.Phone)
        } catch (e) {
        }
    }
    order() {
        const { Name, Address, Description, Phone, basket, date, discountPkg, coupon } = this.state
        let obj = {
            Name, Address, Phone, Description, basket, date, discountPkg, coupon
        }
        this.storeData({ Name, Address, Phone })
        let verify = true
        for (var key in obj) {
            if (!obj[key] && key !== "discountPkg" && key !== "coupon") {
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
            verify && this.props.createOrder(obj, discountPkg)
        }
    }
    render() {
        const {  screenHeight, basket, err, errMessage, discountPkg, coupon, Name, Address, Phone, } = this.state
        const { appLoader, thankYou, discountFrmDb } = this.props
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
                    {/* draewaer  */}
                    {(this.state.drawer === true) && (
                        <Drawer
                            navigation={this.props.navigation}
                            animationStyle="fadeInLeftBig"
                            animateParent={this.animateParent.bind(this)}
                        />
                    )}
                    {/* header */}
                    <Header func={() => this.setState({ drawer: true })} />
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
                                <View style={{ flexDirection: "row", paddingVertical: 5, paddingHorizontal: 22, borderBottomColor: "black", borderBottomWidth: 0.3 }}>
                                    <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
                                        <AntDesign name="shoppingcart" size={40} style={{ color: "black" }} />
                                    </View>
                                    <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: 'Verdana-Bold',
                                            color: "black", fontWeight: "bold", alignSelf: "center"
                                        }}>{basket.title} </Text>

                                    </View>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: "row", paddingHorizontal: 22 }}>
                                    <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ fontSize: 16, color: "black" }}>Total </Text>
                                    </View>
                                    <View style={{ flex: 5, }}>
                                        <Text style={{ fontSize: 16, color: "black", fontWeight: "bold" }}>Rs {discountPkg ? basket.price - basket.price / 100 * discountPkg : basket.price} </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View
                                    style={{ width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        defaultValue={Name} placeholder={"Name"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Name => { this.setState({ Name }) }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        defaultValue={Address}
                                        placeholder={"Address"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Address => { this.setState({ Address }) }}

                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        defaultValue={Phone}
                                        placeholder={"Phone"}
                                        keyboardType={"numeric"}
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
                                        placeholder={"Description"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Description => { this.setState({ Description }) }}

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
                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        placeholder={"Do you have any discount coupon?"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={coupon => {
                                            this.setState({
                                                coupon,
                                                discountPkg: (discountFrmDb[0]["coupon code"] === coupon && coupon !== "" &&
                                                    new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() > 1) ? discountFrmDb[0]["discount ammount in %"] : "",
                                            })
                                        }}
                                    />
                                </View>
                                {
                                    (discountFrmDb[0]["coupon code"] === coupon) && (coupon !== "")
                                        && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() > 1)
                                        ?
                                        <Text style={{ color: "green", marginTop: 10 }}>
                                            Activated<AntDesign name="check" size={20} style={{ flex: 5, color: "green" }} />
                                        </Text>

                                        : null
                                }
                            </View>
                            <View style={{ alignItems: "center", marginTop: "5%" }}>
                                {appLoader ?
                                    <View
                                        style={{
                                            marginTop: 5,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 1,
                                            },
                                            shadowOpacity: 0.22,
                                            shadowRadius: 2.22,
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
})
function mapStateToProp(state) {
    return ({
        thankYou: state.root.thankYou,
        appLoader: state.root.appLoader,
        discountFrmDb: state.root.discountFrmDb,

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        createOrder: (obj, discountPkg) => {
            dispatch(createOrder(obj, discountPkg));
        },
        storeData: (obj, ) => {
            dispatch(storeData(obj));
        },

    })
}
export default connect(mapStateToProp, mapDispatchToProp)(checkout);