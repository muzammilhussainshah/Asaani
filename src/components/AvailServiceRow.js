import React, { useReducer } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { signInWithGoogle,  } from '../../../store/action/action'
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';

let { height, width } = Dimensions.get('window');

class AvailServiceRow extends React.Component {
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
        const { func, heading, title, data, navigation, route } = this.props
        return (
            <TouchableOpacity onPress={() => navigation.push("checkout", { data })}
                style={{
                    flexDirection: "row", flex: 1, height: 80, alignItems: "center", borderBottomColor: "black", borderBottomWidth: 0.3,
                }}>
                <View style={{ flex: 1.5, alignItems: "center" }} >
                    <Image
                        style={{ width: "100%", height: 200, }}
                        // style={{height:200}}
                        resizeMode="contain"
                        source={require('../assets/logocopy.png')} />
                </View>
                <View style={{ flex: 7,  }}>
                    <View>
                        <Text style={{ marginLeft: 5, fontWeight: "bold", fontSize: 16,fontFamily: 'Verdana-Bold', }}> {data.title} </Text>
                    </View>
                    <View>
                        <Text style={{ marginLeft: 5,fontFamily: 'Verdana-Bold', fontSize: 16 }}> Rs{data.price} </Text>
                    </View>
                </View>
                <View style={{ flex: 1.5, alignItems: "center" }}>
                    <Ionicons name="ios-arrow-forward" size={35} style={{ color: "#235071" }} />
                </View>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvailServiceRow);