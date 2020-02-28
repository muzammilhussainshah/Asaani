import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/header';
import { ScrollView } from 'react-native-gesture-handler';
class Notifications extends React.Component {
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
        var { height } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
        })
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }
    render() {
        const { screenHeight } = this.state
        const { discountFrmDb, } = this.props
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
                    <Header func={() => this.setState({ drawer: true })}
                    // heading="About"
                    />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 9, padding: 8, }}>
                        <ScrollView >
                            {discountFrmDb && discountFrmDb[0] && discountFrmDb[0]["coupon code"] ? (
                                <View
                                    style={{
                                        flexDirection: "row", flex: 1, height: 80, alignItems: "center", borderBottomColor: "black", borderBottomWidth: 0.3,
                                        backgroundColor: "#fff"
                                    }}>
                                    <View style={{ flex: 1.5, alignItems: "center" }} >
                                        <Image
                                            style={{ width: "100%", height: 200, }}
                                            // style={{height:200}}
                                            resizeMode="contain"
                                            source={require('../../assets/logocopy.png')} />
                                    </View>
                                    <View style={{ flex: 7, }}>
                                        <Text style={{ marginLeft: 5, fontSize: 14, fontFamily: 'Verdana-Bold', }}> {"Discount Coupon is " + discountFrmDb[0]["coupon code"]} </Text>
                                        <Text style={{ marginLeft: 5, fontSize: 9, fontFamily: 'Verdana-Bold', }}> {"Valid till " + discountFrmDb[0]["coupon expiry date"]} </Text>
                                    </View>
                                    <View style={{ flex: 1.5, alignItems: "center" }}>
                                        <FontAwesome5 name="discourse" size={25} style={{ color: "#235071" }} />
                                    </View>
                                </View>
                            ) : null
                            }
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

function mapStateToProps(states) {
    return ({
        discountFrmDb: states.root.discountFrmDb,
    })
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            // signInWithGoogle, login
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);