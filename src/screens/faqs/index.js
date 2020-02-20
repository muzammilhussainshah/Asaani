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
class faqs extends React.Component {
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
                    <Header func={() => this.setState({ drawer: true })}
                    //  heading="FAQs"
                      />
                    {/* header */}
                    {/* body */}
                    <View style={{ flex: 9, padding: 8 }}>
                        <ScrollView>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5, padding: 5,alignSelf: 'flex-start' }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                    1. WHY ASANI??
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                  Our workers are highly skilled, reliable and properly screened prior to hiring. Our prices are very competitive in prevailing market.
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start' }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 2. HOW I ORDER?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 Either you call on our given number 0311-7799626 or fill our form which is available on the App </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 3. WHEN YOUR TECHNICIAN/PERSON COME TO COMPLETE ORDER AT HOME?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 After receiving your order we manage our technician to complete your task .Also we send sms and confirmation call to set time with you.
                                 </Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 4. IS YOUR EMPLOYEE COME ON SAME DAY?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 Usually we try to send person on same day but some time it might go to next day.
                                 </Text>
                            </View>
                            
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 5. HOW I PAY TO YOU?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 After completion of work you give charges to our person which is immediately confirmed via SMS
                                 </Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 6. IS YOUR EMPLOYEE RELIABLE?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 Yes, all our persons are verified and screened from NADRA prior to hiring. We always send his NIC number with name before dispatching to your place.
                                 </Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 7. ARE YOUR EMPLOYEE PROFFESIONALY SKILLED ?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 Yes, all are professionally skilled and have sufficient experience.
                                 </Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 8. HOW I COMPLAIN?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                ASAANI appreciates feedbacks and complains, you may call on given numbers to lodge complain(s) which is/are professionally addressed and resolved.
                                 </Text>
                            </View>

                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)',marginTop:5, borderRadius: 5, padding: 5,alignSelf: 'flex-start',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 9. HOW SECURE IS MY DATA?
                            </Text>
                            </View>
                            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.2)', borderRadius: 5,marginTop:5, padding: 5, alignSelf: 'flex-end',maxWidth:250 }}>
                                <Text
                                    style={{ color: "#fff",fontFamily: 'Verdana-Bold', }}>
                                 Yes, all are professionally skilled and have sufficient experience.
                                 </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(faqs);