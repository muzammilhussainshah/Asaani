import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView, Image, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import ThankYou from '../../components/ThankYou'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/header';
import DatePicker from 'react-native-datepicker'
import { createOrder, storeData, _RemoveToCart } from "../../store/action/action"
import AsyncStorage from '@react-native-community/async-storage';
import * as Animatable from 'react-native-animatable';

class checkout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "",
            err: false,
            errMessage: "",
            emailValid:false,
            date: new Date(),
            coupon: "",
            couponActive:"",
            modalVisible: true,
            discountPkg: "",
            collaps: false,
            Name: "", Address: "", Phone: "", Email: ""
        }
    };

    componentWillMount() {


        this.getData()

        let basket = this.props.navigation.getParam("data")
        console.log(basket, "checkout page")
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            basket,
            // basket:this.props.addToCart,
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
        console.log(fals, "9999999999999999")
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }

    getData = async () => {
        console.log("storeData work")
        try {
            const UserName = await AsyncStorage.getItem('UserName')
            const UserAddress = await AsyncStorage.getItem('UserAddress')
            const UserPhone = await AsyncStorage.getItem('UserPhone')
            if (UserName && UserAddress && UserPhone) {
                // value previously stored
                this.setState({
                    Name: UserName, Address: UserAddress, Phone: UserPhone,
                })
                console.log(UserPhone, UserAddress, UserName, "gettttttttttt")
            }
        } catch (e) {
            // error reading value
        }
    }
    storeData = async (obj) => {
        console.log("storeData work", obj)
        try {
            await AsyncStorage.setItem('UserName', obj.Name)
            await AsyncStorage.setItem('UserAddress', obj.Address)
            await AsyncStorage.setItem('UserPhone', obj.Phone)
            console.log("try")
        } catch (e) {
            console.log(e, "async error")
            // saving error
        }
    }
    order() {
        const { Name, Address, Description, Phone, basket, date, discountPkg, coupon, Email,emailValid } = this.state
        let obj = {
            Name, Address, Phone,Email, Description, basket, date, discountPkg, coupon, 
        }
        // { discountPkg && (obj.basket.price = basket.price - basket.price / 100 * discountPkg) }
        // if (discountPkg) {
        //     obj.basket.price = obj.basket.price - obj.basket.price / 100 * discountPkg
        // }
        // {discountPkg ?obj.basket.price= obj.basket.price - obj.basket.price / 100 * discountPkg : obj.basket.price}

        this.storeData({ Name, Address, Phone })
        let verify = true
        for (var key in obj) {
            if (!obj[key] && key !== "discountPkg" && key !== "Description" && key !== "coupon" && obj.basket.length > 0) {
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
        if (!obj.basket.length) {
            this.setState({
                err: true, errMessage: "Item"
            })
            setTimeout(() => {
                this.setState({
                    err: false, errMessage: ""
                })
            }, 5000);
            verify = false
        }
        if (!emailValid&&!this.state.err) {
            this.setState({
                err: true, errMessage: "Valid email"
            })
            setTimeout(() => {
                this.setState({
                    err: false, errMessage: ""
                })
            }, 5000);
            verify = false
        }
        {
            verify && this.props.createOrder(obj, discountPkg)
        }
    }
    quantity(i, operation) {
        let basketClone = this.state.basket
        if (operation === "add" && basketClone[i].quantity > 0) {
            basketClone[i].quantity = basketClone[i].quantity + 1
        }
        else if (basketClone[i].quantity > 1) {
            basketClone[i].quantity = basketClone[i].quantity - 1
        }
        this.setState({
            basket: basketClone
        })

    }

    cop(arrayOfObj, coupon) {
        let flag = false
        for (var i = 0; i < arrayOfObj.length; i++) {
            // console.log()
            if (coupon === arrayOfObj[i]["coupon code"]) {

                if (((new Date(arrayOfObj[i]["coupon expiry date"]).getTime() - new Date().getTime()) > 1)) {
                    flag = true
                    // return arrayOfObj[i]["discount ammount in %"]
                    this.setState({
                        couponActive:"Activated",
                        discountPkg:arrayOfObj[i]["discount ammount in %"],
                    })
                }
                else {
                    flag = true
                    this.setState({
                        couponActive:"Your coupon is expired",
                        discountPkg:"",
                    })
                }
            }
        }
        if (coupon !== "" && !flag) {

            this.setState({
                couponActive:"Invalid coupon",
                discountPkg:"",

            })
        }
    }

    render() {
        let sum = null
        const { fields, collaps, screenHeight, basket, err, errMessage, discountPkg, coupon, Name, Address, Phone, } = this.state
        const { appLoader, thankYou, discountFrmDb, _RemoveToCart } = this.props
        console.log("Basketrender---", discountFrmDb[0]["coupon expiry date"], new Date(discountFrmDb[0]["coupon expiry date"]).getTime())
        // discountFrmDb[0]["coupon code"] === coupon && coupon !== ""
        //                                     && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() > 1)
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}
                style={{ width: '100%', height: '100%' }}>
                {(thankYou) ? (
                    <ThankYou modalState={thankYou} navigation={this.props.navigation} asynk={Name} />
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
                    <Header func={() => this.setState({ drawer: true })} navigation={this.props.navigation} />
                    {/* body */}
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                        <ScrollView>

                            <FlatList
                                // contentConatinerStyle={styles.container}
                                data={basket}
                                keyExtractor={item => `${item}`}
                                renderItem={({ item, index }) =>
                                    // console.log(item,index,basket.length,"963852741") 

                                    <Animatable.View
                                        animation={"slideInDown"}
                                        duration={1000}
                                        style={{
                                            // backgroundColor: "rgba(0, 0, 0, 0.1)",
                                            // shadowColor: "#000",
                                            // shadowOffset: {
                                            //     width: 0,
                                            //     height: 1,
                                            // },
                                            // shadowOpacity: 0.20,
                                            // shadowRadius: 1.41,
                                            // borderBottomColor:"red",
                                            // borderBottomWidth:2,
                                            // borderBottomEndRadius:20,
                                            // borderBottomStartRadius:20,
                                            // elevation: 3,
                                        }}>



                                        {collaps &&
                                         <View style={{ flexDirection: "row", paddingVertical: 5, paddingHorizontal: 5, borderBottomColor: "black", borderBottomWidth: 0.3 }}>
                                            <View style={{ flex: 5, justifyContent: "center" }}>
                                                <Text style={{
                                                    fontSize: 11,
                                                    fontFamily: 'Verdana-Bold',
                                                    color: "black", fontWeight: "bold",
                                                }}>{item.title} </Text>
                                            </View>
                                            <View style={{ flex: 5, flexDirection: "row" }}>
                                                <Text style={{
                                                    fontSize: 11,

                                                    fontFamily: 'Verdana-Bold',
                                                    color: "black", alignSelf: "center"
                                                }}>Qty:{item.quantity} </Text>
                                                <View style={{ marginLeft: 5, alignItems: "center", height: 45, justifyContent: "space-between" }}>
                                                    <TouchableOpacity onPress={() => this.quantity(index, "add")}>

                                                        <Octicons name="diff-added" size={20} style={{ color: "black" }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => this.quantity(index, "substract")}>
                                                        <AntDesign name="minussquareo" size={20} style={{ color: "black" }} />
                                                    </TouchableOpacity>
                                                </View>
                                                {/* <View style={{justifyContent:"center"}}> */}

                                                <Text style={{
                                                    fontSize: 11, marginLeft: 5,
                                                    fontFamily: 'Verdana-Bold',
                                                    color: "black", alignSelf: "center"
                                                }}>
                                                    Rs.{item.price * item.quantity}
                                                </Text>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        _RemoveToCart(basket, item, item.subChildPro, item.childPro, item.mainPro)
                                                        this.setState({ flag: true })
                                                    }}
                                                    style={{alignSelf: "center",position:"absolute",right:5 }}>
                                                    <AntDesign name="delete" size={20} style={{ color: "black" }} />
                                                </TouchableOpacity>
                                                {/* </View> */}

                                            </View>
                                        </View>
                                        }
                                        {index === basket.length - 1 &&
                                            <TouchableOpacity
                                                onPress={() => this.setState({ collaps: !collaps })}
                                                style={{ padding: 5, marginTop: 5, flexDirection: "row", borderBottomColor: "#0C4F7A", borderBottomWidth: 0.5 }}>
                                                <View style={{ flex: 5, paddingHorizontal: 5, alignItems: "center", flexDirection: "row" }}>
                                                    <Text style={{ fontSize: 15, }}>cart </Text>
                                                    <View style={{ backgroundColor: "#0C4F7A", width: 20, height: 20, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                                        <Text style={{ color: "#fff" }}>{basket.length}</Text>
                                                    </View>
                                                    <AntDesign name={collaps ? "up" : "down"} size={16} style={{ color: "#0C4F7A", fontWeight: "bold" }} />
                                                    {/* <Text style={{ fontSize: 15, color: "black" }}>Total </Text> */}
                                                </View>
                                                <View style={{ flex: 5, justifyContent: "center", flexDirection: "row" }}>
                                                    {/* <Text style={{ fontSize: 11, color: "black", fontWeight: "bold" }}>Rs {discountPkg ? item.price - item.price / 100 * discountPkg : item.price} </Text> */}
                                                    <Text style={{ fontSize: 15, color: "black", }}>Rs.
                                                {
                                                            basket.map((v, i) => {
                                                                sum = Number(sum) + Number(v.price) * Number(v.quantity)
                                                            })}{discountPkg ? sum - sum / 100 * discountPkg : sum}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        }
                                    </Animatable.View>



                                }
                            />
                            {/* <View style={{
                                backgroundColor: "rgba(0, 0, 0, 0.1)",
                                // shadowColor: "#000",
                                // shadowOffset: {
                                //     width: 0,
                                //     height: 1,
                                // },
                                // shadowOpacity: 0.20,
                                // shadowRadius: 1.41,
                                // borderBottomColor:"red",
                                // borderBottomWidth:2,
                                borderBottomEndRadius:20,
                                borderBottomStartRadius:20,
                                elevation: 3,
                            }}>
                                <View style={{ flexDirection: "row", paddingVertical: 5, paddingHorizontal: 22, borderBottomColor: "black", borderBottomWidth: 0.3 }}>
                                    <View style={{ flex: 5, alignItems: "center", justifyContent: "center" }}>
                                     
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: 'Verdana-Bold',
                                            color: "black", fontWeight: "bold", alignSelf: "center"
                                        }}>{basket.title} </Text>
                                    </View>
                                    <View style={{ flex: 5, alignItems: "center", justifyContent: "center",flexDirection:"row" }}>
                                        <Text style={{
                                            fontSize: 16,
                                            fontFamily: 'Verdana-Bold',
                                            color: "black", alignSelf: "center"
                                        }}>Qty:1 </Text>
                                        <View style={{alignItems:"center",height:45,justifyContent:"space-between"}}>
                                            <TouchableOpacity>

                                        <Octicons name="diff-added" size={20} style={{ color: "black" }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                            <AntDesign name="minussquareo" size={20} style={{ color: "black" }} />
                                            </TouchableOpacity>
                                        </View>

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
                            </View> */}
                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View
                                    style={{ width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        defaultValue={Name} placeholder={"Name"}
                                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                        blurOnSubmit={false}
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
                                        ref={(input) => { this.secondTextInput = input; }}

                                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                                        blurOnSubmit={false}
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
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
                                        ref={(input) => { this.thirdTextInput = input; }}

                                        onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                                        blurOnSubmit={false}
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
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
                                        ref={(input) => { this.fourthTextInput = input; }}
                                        onSubmitEditing={() => { this.fifthTextInput.focus(); }}
                                        blurOnSubmit={false}
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Email"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={Email => { 
                                            
                                                console.log(Email);
                                                let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                                if (reg.test(Email) === false) {
                                                  console.log("Email is Not Correct");
                                                  this.setState({ Email,emailValid:false })
                                                  return false;
                                                }
                                                else {
                                                  this.setState({ Email,emailValid:true })
                                                  console.log("Email is Correct");
                                                }


                                            
                                            // this.setState({ Email })
                                         }
                                        }

                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        ref={(input) => { this.fifthTextInput = input; }}
                                        onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                                        blurOnSubmit={false}
                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Notes"}
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
                                        }}
                                        onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>
                                <View
                                    style={{ marginTop: 10, width: "90%", borderBottomColor: "black", borderBottomWidth: 0.3, borderRadius: 5, paddingHorizontal: 15 }}
                                >
                                    <TextInput
                                        ref={(input) => { this.sixthTextInput = input; }}

                                        // placeholderTextColor='#fff'
                                        // value={this.state[value[1]]}
                                        placeholder={"Do you have any discount coupon?"}
                                        keyboardAppearance='default'
                                        autoCapitalize='none' returnKeyType='next'
                                        style={{}} autoCorrect={false}
                                        onChangeText={coupon => {

                                            


                                                
                                           

                                            this.setState({
                                                coupon,
                                               
                                            },()=>{
                                                this.cop(discountFrmDb, coupon)

                                            })
                                        }}
                                    />
                                </View>
                                {/* {
                                    // discountFrmDb[0]["coupon code"] === coupon) 
                                    
                                    discountFrmDb.map((v, i) => {
                                        if (v["coupon code"] === coupon
                                            && (coupon !== "")
                                            && (new Date(v["coupon expiry date"]).getTime() - new Date().getTime() > 1)
                                        ) {
                                            return (
                                                <Text style={{ color: "green", marginTop: 10 }}>
                                                    Activated<AntDesign name="check" size={20} style={{ flex: 5, color: "green" }} />
                                                </Text>
                                            )

                                        }
                                        else if (
                                            v["coupon code"] === coupon
                                            && (coupon !== "")
                                            && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() < 1)
                                        ) {
                                          return(
                                            <Text style={{ color: "red", marginTop: 10 }}>
                                            your coupon is expired<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                        </Text>
                                          )

                                        }
                                        else if (coupon !== "") {
                                          return(
                                            <Text style={{ color: "red", marginTop: 10 }}>
                                            your coupon is expired<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                        </Text>
                                          )
                                        }
                                    })
                                } */}
                                {/* {console.log(this.cop(discountFrmDb, coupon),"this.cop(discountFrmDb, coupon)")} */}
                                {
                                    // discountFrmDb[0]["coupon code"] === coupon) 

                                    coupon ?
                                    <Text style={{ color: this.state.couponActive==="Activated" ? "green" : "red", marginTop: 10 }}>
                                        {this.state.couponActive}
                                        {/* {console.log(this.cop(discountFrmDb, coupon), "-***************")} */}

                                        <AntDesign name={this.state.couponActive === "Activated" ? "check" : "close"} size={20} style={{ flex: 5, color:this.state.couponActive === "Activated" ? "green" : "red" }} />

                                    </Text>:null

                                }
                                {/* {
                                        // discountFrmDb[0]["coupon code"] === coupon) 
                                        this.cop(discountFrmDb, coupon)===true&& (coupon !== "")
                                        && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() > 1)
                                        ?
                                        <Text style={{ color: "green", marginTop: 10 }}>
                                            Activated<AntDesign name="check" size={20} style={{ flex: 5, color: "green" }} />
                                        </Text>
                                        : (discountFrmDb[0]["coupon code"] === coupon) && (coupon !== "")
                                            && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() < 1) ?
                                            <Text style={{ color: "red", marginTop: 10 }}>
                                                your coupon is expired<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                            </Text>
                                            : (coupon !== "") ?

                                                <Text style={{ color: "red", marginTop: 10 }}>
                                                    Invalid coupon<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                                </Text>
                                                :
                                                null
                                } */}
                                {/* {
                                    (discountFrmDb[0]["coupon code"] !== coupon && coupon !== "") ?
                                        <Text style={{ color: "red", marginTop: 10 }}>
                                            Invalid coupon<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                        </Text> :
                                        ((discountFrmDb[0]["coupon code"] === coupon) && (coupon !== "")
                                            && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() > 1)
                                        ) ?
                                            <Text style={{ color: "green", marginTop: 10 }}>
                                                Activated<AntDesign name="check" size={20} style={{ flex: 5, color: "green" }} />
                                            </Text>
                                            :
                                            (discountFrmDb[0]["coupon code"] === coupon && coupon !== "")
                                                && (new Date(discountFrmDb[0]["coupon expiry date"]).getTime() - new Date().getTime() < 0) ?
                                                <Text style={{ color: "red", marginTop: 10 }}>
                                                    your coupon is expired<AntDesign name="close" size={20} style={{ flex: 5, color: "red" }} />
                                                </Text> :
                                                null
                                } */}
                            </View>
                            <View style={{ alignItems: "center", marginTop: "1%" }}>
                                {
                                    err && <Text style={{ color: "red", }}>{errMessage} is required</Text>
                                }
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
                                            marginBottom: 5,

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
                                            alignItems: "center", width: "98%", height: 50
                                        }}
                                    >
                                        <Text style={{ color: "white", }}>Confirm order</Text>
                                    </TouchableOpacity>
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

function mapStateToProp(state) {
    return ({

        thankYou: state.root.thankYou,
        appLoader: state.root.appLoader,
        discountFrmDb: state.root.discountFrmDb,
        addToCart: state.root.addToCart

    })
}
function mapDispatchToProp(dispatch) {
    return ({
        createOrder: (obj, discountPkg) => {
            dispatch(createOrder(obj, discountPkg));
        },
        _RemoveToCart: (addToCartArray, data, subChildPro, childPro, mainPro, ) => {
            dispatch(_RemoveToCart(addToCartArray, data, subChildPro, childPro, mainPro));
        },
        storeData: (obj, ) => {
            dispatch(storeData(obj));
        },

    })
}

export default connect(mapStateToProp, mapDispatchToProp)(checkout);