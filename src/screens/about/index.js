import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import { ScrollView } from 'react-native-gesture-handler';
class About extends React.Component {
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
    animateParent(fals) {
        console.log(fals, "9999999999999999")
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }
    render() {
        const { screenHeight } = this.state
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
                        <ScrollView>
                            <View >
                                <Image
                                    style={{ width: "100%", height: 200, }}
                                    source={require('../../assets/about1.jpg')} />
                            </View>

                            <Text
                                style={{ color: "#fff", marginTop: 5, fontFamily: 'Verdana-Bold', }}>
                                Asaani is a sister concern of M/s Avalon Services (Pvt) Ltd which is a leading housekeeping and janitorial service Organization in Pakistan. Since its inception 2001 providing services to Banks, Government, Semi Government Organizations. ASAANI is a strategic business unit having competence in the area of maintenance and repairing services at door steps.
                                Keeping in view the needs of verified, skilled and reliable workers of repairing services at homes, offices and industries. ASAANI hires competent workers after proper screaming of their characteristics and credentials
                             </Text>
                            <Text
                                style={{ color: "#fff", fontWeight: "bold", fontSize: 18, fontFamily: 'Verdana-Bold', }}>
                                Our Mission:
                            </Text>
                            <Text
                                style={{ color: "#fff", marginTop: 15, fontFamily: 'Verdana-Bold', }}>
                                The mission of One Stop Home Repair is to provide world-class service to commercial and residential clients in the community by providing hassle-free, high quality repair.
                            </Text>
                            <View >
                                <Image
                                    style={{ width: "100%", height: 200, marginTop: 10 }}
                                    source={require('../../assets/about2.jpg')} />
                            </View>
                            <Text
                                style={{ marginTop: 5, color: "#fff", fontWeight: "bold", fontSize: 18, fontFamily: 'Verdana-Bold', }}>
                                Our Vision:
                            </Text>
                            <Text
                                style={{ color: "#fff", fontFamily: 'Verdana-Bold', marginTop: 15 }}>
                                At Asaani.com.pk, we seek to bring you the best repair works from your local area. As pioneers in location based repair booking site, we strive is to make everyday hassles of maintenance, seamless for our customers. Skilled service and a better standard of life and delivery form the core of our company’s vision. Making homes better, one service at a time.
                                </Text>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", flex: 1, }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{ width: "80%", height: 200, }}
                                        resizeMode="contain"
                                        source={require('../../assets/about3.png')} />
                                    <Text
                                        style={{ color: "#fff", fontFamily: 'Verdana-Bold', textAlign: "center" }}>
                                        Consumer is the key for us. The Company works earnestly towards creating the highest satisfaction levels for customers.
                                    </Text>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <Image
                                        style={{ width: "80%", height: 200, }}
                                        resizeMode="contain"
                                        source={require('../../assets/about4.png')} />
                                    <Text
                                        style={{ color: "#fff", fontFamily: 'Verdana-Bold', textAlign: "center" }}>
                                        We ensure that local service providers we work with reach you with the same perfection and professionalism standards that we follow.
                                        </Text>
                                </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);