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
const profession = [
    // ac technitian
    {
        Invertor: {
            Maintenance: [
                { title: "AC Compressor Change", price: "12000" },
                { title: "AC Countinuous Trip", price: "1000" },
                { title: "AC Icing", price: "1000" },
                { title: "AC water leak", price: "1000" },
                { title: "Gas Filling 1 Ton", price: "4800" },
                { title: "Gas Filling 2 Ton", price: "7200" },
                { title: "General Service", price: "1000" },
                { title: "Diagnostic Visit", price: "400" },
                { title: "Inverter Capacitor change", price: "800" },
                { title: "Inverter Repair Fan", price: "3500" },
                { title: "Inverter Repair circuit", price: "8000" },
                { title: "Inverter valve replacement", price: "1800" },
                { title: "Master Service", price: "1750" },
                { title: "Gas Filling 1.5 Ton", price: "5200" },

            ],
            Installation: [
                { title: "Installation", price: "2700" },
                { title: "AC Dismantle", price: "1000" },
                { title: "Installation (Higher than the 2nd floor)", price: "3200" },
            ],
          
        },
        "Non-Invertor": {
            Maintenance: [
                { title: "AC Circuit Repair (Regular AC)", price: "3000" },
                { title: "AC Circuit Replace (Regular AC)", price: "3000" },
                { title: "AC Compressor Change", price: "12000" },
                { title: "AC Countinuous Trip", price: "1000" },
                { title: "AC Icing", price: "1000" },
                { title: "AC water leak", price: "1000" },
                { title: "Gas Filling 1 Ton", price: "2800" },
                { title: "Gas Filling 2 Ton", price: "4200" },
                { title: "General Service", price: "1000" },
                { title: "Diagnostic Visit", price: "400" },
                { title: "Master Service", price: "1750" },
                { title: "Gas Filling 1.5 Ton", price: "3200" },
            ],
            Installation: [
                { title: "Installation", price: "2000" },
                { title: "AC Dismantle", price: "1000" },
                { title: "Installation (Higher than the 2nd floor)", price: "2500" },
            ],
         
        }
    },
    // Carpenter
    {
        route:"AvailService",
        Bed:
            [
                { title: "Bed Dismantle", price: "500" },
                { title: "Bed Repair", price: "600" },
            ],
        Cabinet: [
            { title: "Cabinet Handle replacement", price: "150" },
            { title: "Cabinet hinge repair", price: "400" },
        ],
        Door: [
            { title: "Door Catcher magnet", price: "300" },
            { title: "Door Chatakni", price: "300" },
            { title: "Door Glass fix", price: "50" },
            { title: "Door Handle & Lock replacement", price: "600" },
            { title: "Door Installation Sliding", price: "120" },
            { title: "Door Kundi/Latches replacement", price: "500" },
            { title: "Door Chokhat Repair (disfuguration)", price: "500" },
            { title: "Door Chokhat Stopper", price: "500" },
            { title: "Wooden Door Installation with lock", price: "500" },
        ],
        Drawer: [
            { title: "Drawer Channel Replacement", price: "500" },
            { title: "Drawer Lock Change", price: "250" },
           
        ],
        Installation: [
            { title: "Art work or Mirror Installation", price: "200" },
            { title: "Curtain Rod Installation", price: "300" },
            { title: "Mosquito netting", price: "80" },
            { title: "Shelf Installation", price: "600" },
           
        ],
        Polish: [
            { title: "Furniture Polish-Varnishing", price: "1000" },
            { title: "Laquer", price: "1" },
        ],
        Window: [
            { title: "Window Glass fix", price: "50" },
            { title: "Window Installation Sliding", price: "150" },
            { title: "Wooden Window Installation", price: "120" },
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
                            <View
                                // onPress={() => this.setState({ catogery: true })}
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