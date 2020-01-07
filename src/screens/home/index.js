import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../components/header';
import Charactors from '../../components/charactors';
let { height, width } = Dimensions.get('window');
class home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: ""
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
                <Header func={() => this.setState({ drawer: true })} />
                {/* header */}
                {/* body */}
                <View style={{ flex: 9, }}>
                    <View style={{ flex: 8, justifyContent: "center", alignItems: "center" }}>
                        <Charactors />
                    </View>
                    <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#fff", justifyContent: "center",
                            alignItems: "center", width: "80%", height: 40
                        }}>
                            <Text>dropDown</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginTop:5,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,

                            elevation: 3,
                            backgroundColor: "#F7E38D", justifyContent: "center",
                            alignItems: "center", width: "80%", height: 40
                        }}>
                            <Text style={{color:"white"}}>Book now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* body */}
            </View>
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