import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import SlideDownCatogery from '../../components/SlideDownCatogery';
import Header from '../../components/header';
import Charactors from '../../components/charactors';
import { ScrollView } from 'react-native-gesture-handler';
let { height, width } = Dimensions.get('window');
class ContactUs extends React.Component {
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
                    <Header func={() => this.setState({ drawer: true })} heading="FAQs" navigation={this.props.navigation} />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 9, padding: 8 }}>
                        <ScrollView>
                            <Text
                                style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                PHONE NO:
                            </Text>
                            <Text
                                style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                +92311 7799626
                            </Text>
                            <Text
                                style={{ color: "#fff", fontFamily: 'Verdana-Bold',}}>
                              EMAIL::
                            </Text>
                            <Text
                                style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                info@asaani.com.pk
                            </Text>

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

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);