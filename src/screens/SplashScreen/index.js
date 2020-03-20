import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ActivityIndicator,ImageBackground } from 'react-native';
import { getData, } from '../../store/action/action'
import { connect } from 'react-redux';
class SplashScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    componentDidMount() {
        const { getData, navigation } = this.props
        getData(navigation)
    }
    render() {
        return (
            <ImageBackground source={require("../../assets/splash.jpg")}
                style={{ width: '100%', height: '100%' }}>

                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {/* <Image
                        style={{ width: "50%", height: "30%", position: "absolute", zIndex: 1 }}
                        resizeMode="contain"
                        source={require('../../../src/assets/logocopy.png')}
                    /> */}
                     <View style={{ marginTop: "50%", width: "100%", }}>
                        <Text style={{
                            color: "#fff", textAlign: "center", fontWeight: "bold", width: "100%",fontSize:20,
                            fontFamily: 'Verdana-Bold',
                        }}>
                            {'Asaani Har Ghar Ke Liye'}
                        </Text>
                    </View>
                    <View style={{ marginTop: "15%", }}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                   
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
        getData: (navigation) => {
            dispatch(getData(navigation));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);