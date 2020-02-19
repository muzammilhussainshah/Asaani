import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground, BackHandler } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import Charactors from '../../components/charactors';
import professionArray from '../../components/professionArray';
// import { dynamicPrices } from '../../store/action/action';
import dynamicPrices from '../../components/dynamicPrices';
const charactorBtn = [
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c0.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c1.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c2.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c3.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c4.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c5.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c6.png")} />,
]
const profession = professionArray
class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { drawer: false, slideStyle: "slideInLeft", screenHeight: "", catogery: false, charactor: "0" }
    };
    componentDidMount() {
        const { serFrmDb,  } = this.props
        var { height, width } = Dimensions.get('window');
        dynamicPrices(profession,serFrmDb)
         .then((data) => {
            console.log(data, "data")
        }).catch((err) => {
            console.log(err, "ERROR_ON_SEND_EMAIL_")
        })
        this.setState({
            screenHeight: height,
        })
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({ drawer: false })
        }, 250);
    }
    render() {
        const { fields, loading, screenHeight, charactor } = this.state
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

    })
}

function mapDispatchToProps(dispatch) {
    return {
        // dynamicPrices: (profession, serFrmDb) => {
        //     dispatch(dynamicPrices(profession, serFrmDb));
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);