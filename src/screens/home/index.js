import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../components/header';
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
            <View style={{ flex: 1, backgroundColor: "red", }}>
                {/* //drawer close view// */}
                {(this.state.drawer === true) && (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {this.setState({drawer: false})}}
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
               <Header func={()=>this.setState({drawer: true })}/>
                {/* header */}
                {/* body */}
                <View style={{ flex: 9, backgroundColor: "yellow" }}>
                    <Text>aaaaaaaa</Text >
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