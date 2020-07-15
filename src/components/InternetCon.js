import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Modal, Image, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { internetIusse } from '../store/action/action';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
export class InternetCon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalFlag:true
        };
    }

    render() {
        const {  internetIusse } = this.props
        const { modalFlag} = this.state
        return (
            <Modal
                style={{
                }}
                animationType="slide"
                transparent={true}
                visible={modalFlag}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                }}>



                <Animatable.View
                    animation="pulse"

                    style={{
                        position: "absolute", zIndex: 1, backgroundColor: "white", width: "80%", height: 165,
                        marginHorizontal: "9.5%", marginVertical: "20%",
                        flexDirection: "column",
                        borderWidth: 1,
                        marginVertical: "60%",
                        // borderRadius: 12,
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 14,
                        elevation: 115,

                    }}>

                    <View style={{ height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#FFCB05" }}>
                        <View
                            style={{ flexDirection: "row", color: "white" }}
                        >
                            <Text style={{ color: "white", fontFamily: 'Verdana-Bold', }}>
                                Connection error !
</Text>
                            {/* <TouchableOpacity
                                style={{ right: -75 }}
                                onPress={() => { that.setState({ modalVisible: false, }) }}

                            >

                                <FontAwesome name="close" style={{ color: "red", fontSize: 25, }} />
                            </TouchableOpacity> */}
                        </View>

                    </View>
                    <View style={{ height: 40, flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                        <View style={styles.input}>
                            <Text style={{ textAlign: "center", fontFamily: 'Verdana-Bold', color: "grey" }}>
                                {/* Thank You for the Order, Our representative will call you back shortly */}
                          Please Check Your Internet Connection
                          </Text>
                        </View>

                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <TouchableOpacity style={{
                            justifyContent: "center", alignItems: "center", height: 45, width: "80%",
                            backgroundColor: "#FFCB05", borderWidth: 0.75, borderColor: '#FFCB05',
                        }}
                            onPress={() => {
                                // this.offer()
                                this.setState({modalFlag:false})
                                internetIusse(false)
                                // navigation.navigate("home)
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold", fontFamily: 'Verdana-Bold', textAlign: "center" }}> Ok </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({

});


function mapStateToProps(states) {
    return ({
    })
}

function mapDispatchToProps(dispatch) {
    return {
        internetIusse: (bol) => {
            dispatch(internetIusse(bol));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InternetCon);
