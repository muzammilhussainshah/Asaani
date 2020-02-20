import React, { useReducer } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, KeyboardAvoidingView, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { getData, } from '../../store/action/action'
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
    componentDidMount() {
        const { getData, navigation } = this.props
        getData(navigation)
        // setTimeout(() => {
        //     this.props.navigation.navigate("home")
        // }, 2000);




    }
    render() {
        const { fields, loading } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
                <Image
                    style={{ width: "50%", height: "40%", }}
                    resizeMode="contain"
                    source={require('../../../src/assets/logocopy.png')}
                />
                <View style={{}}>
                    <ActivityIndicator size="large" color="#0C4F7A" />
                </View>
                <View style={{ marginTop: "5%", width: "100%", }}>
                    <Text style={{
                        color: "#0C4F7A", textAlign: "center", fontWeight: "bold", width: "100%",
                        fontFamily: 'Verdana-Bold',
                    }}>
                        {'Online service to everyone'}
                    </Text>
                </View>
            </View>
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
        getData: (navigation) => {
            dispatch(getData(navigation));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);