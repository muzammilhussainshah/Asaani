import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import Charactors from '../../components/charactors';
import AsyncStorage from '@react-native-community/async-storage';
import professionArray from '../../components/professionArray';
// import { dynamicPrices } from '../../store/action/action';
import dynamicPrices from '../../components/dynamicPrices';
// import {getasync} from '../../store/action/action';

const charactorBtn = [
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c0.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c1.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c2.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c3.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c4.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c5.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c6.png")} />,
]
// let profession = professionArray
class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { drawer: false, slideStyle: "slideInLeft", screenHeight: "", catogery: false, charactor: "0", UserName: "" }
    };
    getData = async () => {
        console.log("work")
        try {
            const UserName = await AsyncStorage.getItem('UserName')
            const UserAddress = await AsyncStorage.getItem('UserAddress')
            const UserPhone = await AsyncStorage.getItem('UserPhone')
            if (UserName && UserAddress && UserPhone) {
                console.log(UserName,"UserName")
                // value previously stored
                this.setState({
                    UserName
                })
            }
        } catch (e) {
            // error reading value
        }
    }
    componentWillMount() {
        this.getData()
        // const { profession } = this.state
        // alert("work")
        // const { getasync, } = this.props
        var { height, width } = Dimensions.get('window');
        // console.log(profession,  "profession,serFrmDb")
        // dynamicPrices(profession, serFrmDb)
        //     .then((data) => {
        //         // profession = data
        //         console.log(data, "data")
        //     }).catch((err) => {
        //         console.log(err, "ERROR_ON_SEND_EMAIL_")
        //     })
        // getasync()

        this.setState({
            screenHeight: height,
        })
    }
    componentWillUnmount() {
        // profession = professionArray
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({ drawer: false })
        }, 250);
    }
    render() {
        const { fields, loading, screenHeight, charactor, UserName } = this.state
        const { profession } = this.props
        console.log(profession, "professionprofessionprofession")
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}
                style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, }}>
                    {/* //drawer close view// */}
                    {(this.state.drawer === true) && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.setState({ drawer: false }) }}
                            style={{ position: "absolute", height: screenHeight, width: "30%", right: 0, zIndex: 1 }}>
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
                    <Header func={() => this.setState({ drawer: true })}
                    // heading="Home"
                    />
                    {/* body */}
                    <View style={{ flex: 9, }}>
                        <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>
                            {
                                UserName ?
                                    <Text style={{ color: "#fff", }}>Welcome {UserName}</Text> : null
                            }
                            <Charactors
                                func={(index) => { this.setState({ charactor: index }) }}
                            />
                        </View>
                        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                            <View
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    borderRadius: 5,
                                    elevation: 0,
                                    justifyContent: "center",
                                    alignItems: "center", width: "80%", height: 40,
                                    flexDirection: "row",
                                }}>
                                {/* charactor btn */}
                                {charactorBtn[charactor]}

                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate("Service", { profession: profession[charactor] })}
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
                                    elevation: 0,
                                    width: "80%", height: 40, justifyContent: "center"
                                }}>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: "100%", }}
                                    source={require("../../assets/Book-Now-Button.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        // USERDATA: states.root.USERDATA,
        serFrmDb: states.root.serFrmDb,
        profession: states.root.profession,

    })
}

function mapDispatchToProps(dispatch) {
    return {
        // getasync: () => {
        //     dispatch(getasync());
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);