import React, { useReducer } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, BackHandler, Dimensions,Modal } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { thankYou  } from '../store/action/action'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';

let { height, width } = Dimensions.get('window');

class ThankYou extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };

    render() {
        const { fields, loading } = this.state
        const { heading, title, data, navigation,modalState,thankYou} = this.props
        console.log(data, "Availble sercieRow")
        return (
            <Modal
                style={{
                }}
                animationType="slide"
                transparent={true}
                visible={modalState}
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
                        borderRadius: 12,
                        borderColor: '#ddd',
                        borderBottomWidth: 0,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 14,
                        elevation: 115,
                        // marginLeft: 5,
                        // marginRight: 5,
                        // marginTop: 10,
                    }}>
                    {/* <View style={{  flexDirection: "column",}}>
<Text>
aaaaaaa
aaaaaaa
aaaaaaa
</Text>
</View> */}
                    <View style={{ height: 40, flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "#FFCB05" }}>
                        <View
                            style={{ flexDirection: "row",color:"white" }}
                        >
                            <Text style={{ color:"white",fontFamily: 'Verdana-Bold', }}>
                                Confirmation !
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
                          <Text style={{textAlign:"center",fontFamily: 'Verdana-Bold',color:"grey"}}>
                          Thank You for the order, representative will call you back shortly 
                          </Text>
                        </View>
                        {/* <TouchableOpacity style={{ width: "20%", justifyContent: "center", alignItems: "center", }}
// onPress={this.comments.bind(this, index, key.addId)}
>
<Icon name='send' style={{ fontSize: 30, color: "#004D94" }} />
</TouchableOpacity> */}
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 30 }}>
                        <TouchableOpacity style={{
                            justifyContent: "center", alignItems: "center", height: 45, width: "80%",
                            backgroundColor: "#FFCB05", borderWidth: 0.75, borderColor: '#FFCB05',
                        }}
                            onPress={() => {
                                // this.offer()
                              thankYou(false)
                                navigation.navigate("home")
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold",fontFamily: 'Verdana-Bold', textAlign: "center" }}> Ok </Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </Modal>
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
        thankYou: (bool) => {
            dispatch(thankYou(bool));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);