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

class SlideDownCatogery extends React.Component {
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
        const { func,heading } = this.props
        return (
            <View style={{
                 justifyContent: "flex-start", flexDirection: "row",
                alignItems: "center", borderBottomColor: "#0C4F7A",borderBottomWidth:0.5,
            }}>
                
                <Text style={{ marginLeft: "5%", fontWeight: "bold", color: "#fff" }}>aaaaa</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SlideDownCatogery);