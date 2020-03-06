import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header';
import ServiceRow from '../../components/serviceRow';
let { height, width } = Dimensions.get('window');
class Service extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "", profession: ""
        }
    };
    componentWillMount() {
        let profession = this.props.navigation.getParam("profession")
        let mainPro = this.props.navigation.getParam("mainPro")
        console.log(profession,"service page",mainPro)
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            profession,mainPro
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
        const { profession, screenHeight,mainPro } = this.state
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
                    {/* draewaer  */}
                    {(this.state.drawer === true) && (
                        <Drawer
                            navigation={this.props.navigation}
                            animationStyle="fadeInLeftBig"
                            animateParent={this.animateParent.bind(this)}
                        />
                    )}
                    {/* header */}
                    <Header func={() => this.setState({ drawer: true })} />
                    {/* body */}
                    <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
                        <ScrollView>
                            {
                                Object.keys(profession).map((key, index) => {
                                    return (
                                        
                                        key!=="route"&&<ServiceRow data={profession[key]} mainPro={mainPro}  route={profession.route} title={key} navigation={this.props.navigation}/>
                                    )
                                })
                            }
                            {/* <ServiceRow /> */}
                        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Service);