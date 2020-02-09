import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import Charactors from '../../components/charactors';
const charactorBtn = [
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c0.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c1.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c2.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c3.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c4.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c5.png")} />,
    <Image resizeMode="contain" style={{ width: "100%", }} source={require("../../assets/c6.png")} />,
]
// const profession=[
//     {
//         ServiceChild:["Inverter","Non-Inverter"],
//         ServiceGrandChild:["Maintenance","Installation"],
//         DataOfServices:[{icon:"",price:"",title:""},"Installation"],
//     }, 
// ]
// const profession = [
//     {
//         Inverter: [
//             {

//                 Maintenance: [
//                     {
//                         price: "12000", title: "AC Compressor Change"
//                     },
//                     {
//                         price: "1000", title: "AC Countinuous Trip"
//                     },

//                 ],
//                 Installation: {
//                     icon: "", price: "", title: ""
//                 }
//             },
//             // {
//             //     Installation: {
//             //         icon: "", price: "", title: ""
//             //     }
//             // }
//         ],

//         "Non-Inverter": [
//             {

//                 Maintenance: {
//                     icon: "", price: "", title: ""
//                 },
//                 Installation: {
//                     icon: "", price: "", title: ""
//                 }
//             },
//         ]
//     },
// ]


const profession = [
    // ac technitian
    {
        Invertor: {
            Installation: [
                { title: "AC Compressor Change", price: "250" },
                { title: "AC Countinuous Trip", price: "20" },
            ],
            Maintenance: [
                { title: "AC Compressor Change", price: "250" },
                { title: "AC Countinuous Trip", price: "20" },
            ],
        },
        "Non-Invertor": {
            Installation: [
                { title: "AC Compressor Change", price: "250" },
                { title: "AC Countinuous Trip", price: "20" },
            ],
            Maintenance: [
                { title: "AC Compressor Change", price: "250" },
                { title: "AC Countinuous Trip", price: "20" },
            ],
        }
    },
    // Carpenter
    {
        route:"AvailService",
        Bed:
            [
                { title: "carpenter", price: "300" },
                { title: "AC Countinuous Trip", price: "900" },
            ],
        Cabinet: [
            { title: "carpenter", price: "500" },
            { title: "AC Countinuous Trip", price: "600" },
        ],
    },
]

class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { drawer: false, slideStyle: "slideInLeft", screenHeight: "", catogery: false, charactor: "0" }
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
                                    elevation: 0,
                                    justifyContent: "center",
                                    alignItems: "center", width: "80%", height: 40,
                                    flexDirection: "row",
                                }}>

                                {/* charactor btn */}
                                {charactorBtn[charactor]}

                            </TouchableOpacity>
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