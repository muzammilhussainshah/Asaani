import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { userSignUp } from '../../../store/action/action'
import { bindActionCreators } from 'redux';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { fields } = this.state

        return (
            <View style={styles.container}>
             
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#FDB8B0',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     // marginTop: 20
    // },
    container: {
        flex: 1,
        backgroundColor: '#FDB8B0',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 20
    },

    Heading: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
        fontSize: 22,
        // fontFamily: 'Helvetica',
        fontWeight: 'bold',
        color: '#2A2D3A',
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#2A2D3A',
        height: 40,
        width: 300,
        paddingHorizontal: 10,
        fontSize: 18,
        borderRadius: 5,
    },
    button: {
        width: '100%',
        alignItems: 'center',
        marginTop: 17,
        opacity: 1
    },
    signupimage: {
        width: 200,
        height: 160,
        marginTop: 50,
    },
    ButtonText: {
        fontWeight: 'bold',
        color: "#ffff",
        // alignItems:'center'
        fontSize: 20
    },
    form: {
        // borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center'
    },

});
function mapStateToProps(states) {
    return ({
    })
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            userSignUp
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);