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
            catogery: true, q1: true, q2: true, q3: true, q4: true, q5: true, q6: true, q7: true, q8: true, q9: true, q10: true, q11: true

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
        const { q1, q2, q3, q4, q5, q6, q7,q8,q9,q10,q11, screenHeight } = this.state
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
                    <View style={{ flex: 9, backgroundColor: "#F2F2F2" }}>
                        <ScrollView>
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      WHY ASANI??
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q1: !q1 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q1 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q1 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                        Our workers are highly skilled, reliable and properly screened prior to hiring. Our prices are very competitive in prevailing market.
                            </Text>
                                </View>
                            }

                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                        HOW I ORDER?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q2: !q2 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q2 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q2 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                        Our workers are highly skilled, reliable and properly screened prior to hiring. Our prices are very competitive in prevailing market.
                                    </Text>
                                </View>
                            }


                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      WHEN YOUR TECHNICIAN/PERSON COME TO COMPLETE ORDER AT HOME?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q3: !q3 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q3 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q3 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                    After receiving your order we manage our technician to complete your task .Also we send sms and confirmation call to set time with you.
                                       
                                       </Text>
                                </View>
                            }

                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      IS YOUR EMPLOYEE COME ON SAME DAY?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q4: !q4 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q4 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q4 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                                                     Usually we try to send person on same day but some time it might go to next day.
 
                                       </Text>
                                </View>
                            }

                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      HOW I PAY TO YOU?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q5: !q5 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q5 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q5 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                    After completion of work you give charges to our person which is immediately confirmed via SMS
                                                                      
                                       </Text>
                                </View>
                            }

                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      IS YOUR EMPLOYEE RELIABLE?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q6: !q6 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q6 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q6 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                                                        Yes, all our persons are verified and screened from NADRA prior to hiring. We always send his NIC number with name before dispatching to your place.
                                       </Text>
                                </View>
                            }
                            

                         

                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      ARE YOUR EMPLOYEE PROFFESIONALY SKILLED ?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q7: !q7 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q7 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q7 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                    Yes, all are professionally skilled and have sufficient experience.
                                                                     
                                                                     </Text>
                                </View>
                            }
                            
                            
                            <View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      HOW I COMPLAIN?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q8: !q8 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q8 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q8 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                                                        ASAANI appreciates feedbacks and complains, you may call on given numbers to lodge complain(s) which is/are professionally addressed and resolved.
                                                                     </Text>
                                </View>
                            }

                            
<View style={{ borderBottomColor: "white", borderBottomWidth: 4, backgroundColor: '#0C4F7A', padding: 5, height: 65, alignItems: "center", flex: 1, flexDirection: "row" }}>
                                <View style={{ flex: 8 }}>
                                    <Text
                                        style={{ color: "#E3DC13", fontWeight: "bold", fontFamily: 'Verdana-Bold', }}>
                                      HOW SECURE IS MY DATA?
                                  </Text>
                                </View>
                                <TouchableOpacity style={{ flex: 2, alignItems: "center" }} onPress={() => this.setState({ q9: !q9 })}>
                                    <Text style={{ color: "#fff", fontSize: 26, fontFamily: 'Verdana-Bold', }}>{!q9 ? "+" : "-"}</Text>
                                </TouchableOpacity>
                            </View>
                            {q9 &&
                                <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 15, alignSelf: 'flex-end', maxWidth: 250 }}>
                                    <Text
                                        style={{ fontFamily: 'Verdana-Bold', }}>
                                                                                                         Security is a very high priority at asaani, for both our data and yours. We regularly increase our security standards to ensure that we meet the security requirements.
    </Text>
                                </View>
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