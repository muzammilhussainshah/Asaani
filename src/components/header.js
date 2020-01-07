import React, { useReducer } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
// import { signInWithGoogle,  } from '../../../store/action/action'
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/Entypo';

// GoogleSignin.configure({
//     webClientId: '433343540518-e710u0d5bef1sp5r0oloavaniqnumcm4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
// });

let { height, width } = Dimensions.get('window');

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    componentWillUnmount() {
        // BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());

    }
    render() {
        const { fields, loading } = this.state
        const { func } = this.props
        return (
            <View style={{
                flex: 1, justifyContent: "flex-start", flexDirection: "row",
                alignItems: "center", backgroundColor: "#0C4F7A"
            }}>
                <TouchableOpacity
                    onPress={() => { func() }}
                    style={{ justifyContent: "center", marginHorizontal: "3%" }}>
                    <Icon name="menu" size={30} style={{ color: "#F5CD54" }} />
                </TouchableOpacity>
                <Text style={{ marginLeft: "5%", fontWeight: "bold", color: "white" }}>Home</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDB8B0',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        // position: 'absolute'
    },
    Heading: {
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 1,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#2A2D3A',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        opacity: 1
    },
    imageView: {
        width: width,
        height: height / 2.6,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    signupimage: {
        height: '90%',
        width: '90%',
        // marginTop: 30,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);