import React, { useReducer } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, KeyboardAvoidingView, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
// import { signInWithGoogle,  } from '../../../store/action/action'
import { connect } from 'react-redux';

// GoogleSignin.configure({
//     webClientId: '433343540518-e710u0d5bef1sp5r0oloavaniqnumcm4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
// });

let { height, width } = Dimensions.get('window');

class SplashScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate("home")
        }, 2000);
    }
    render() {
        const { fields, loading } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={{ width: "50%", height: "40%",  }}
                    resizeMode="contain"
                    source={require('../../../src/assets/logocopy.png')}
                />
                <View style={{}}>
                    <ActivityIndicator size="large" color="#0C4F7A" />
                </View>
                <View style={{marginTop:"5%"}}>
                    <Text style={{ color: "#0C4F7A", fontWeight: "bold" }}>
                        Online service to everyone
                    </Text>
                </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);