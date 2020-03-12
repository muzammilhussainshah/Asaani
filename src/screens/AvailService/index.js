import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TextInput, ImageBackground, ScrollView, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header';
import { NavigationEvents } from 'react-navigation';
import AvailServiceRow from '../../components/AvailServiceRow';
let { height, width } = Dimensions.get('window');
class AvailSercice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "", profession: "", remIndex: []
        }
    };
    componentWillMount() {
        let profession = this.props.navigation.getParam("profession")
        let mainPro = this.props.navigation.getParam("mainPro")
        let childPro = this.props.navigation.getParam("childPro")
        let subChildPro = this.props.navigation.getParam("subChildPro")
        console.log(subChildPro, childPro, mainPro, "mainPromainPromainPromainPro")
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            profession, subChildPro, childPro, mainPro,
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
        const { profession, screenHeight, subChildPro, childPro, mainPro, remIndex } = this.state
        const { addToCart, navigation } = this.props
        let total = 0

        console.log(profession, "availble servie")
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}
                style={{ width: '100%', height: '100%' }}>
                <NavigationEvents onDidFocus={() => {
                    this.setState({
                        flag: true
                    })
                }} />
                <View style={{ flex: 1, }}>
                    {/* //drawer close view// */}
                    {(this.state.drawer === true) && (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => { this.setState({ drawer: false }) }}
                            style={{ position: "absolute", height: screenHeight, width: "20%", right: 0, zIndex: 1 }}>
                        </TouchableOpacity>
                    )}
                    {/* draewaer  */}
                    {(this.state.drawer === true) && (
                        <Drawer
                            navigation={this.props.navigation}
                            animationStyle="fadeInLeftBig"
                            animateParent={this.animateParent.bind(this)}
                        />
                    )}
                    {/* header */}
                    <Header func={() => this.setState({ drawer: true })}
                     navigation={this.props.navigation}
                    />
                    {/* body */}
                    <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
                        <ScrollView>
                            {
                                profession.map((v, i) => {
                                    console.log(addToCart, "addToCart")
                                    const result = addToCart && addToCart.filter(Cart => Cart.title === v.title);
                                    console.log(result, "result")

                                    return (
                                        <AvailServiceRow Index={i}
                                            func={(i) => {
                                                // let remIndexClone = remIndex
                                                // remIndexClone.push(i)
                                                this.setState({ flag: true })

                                            }}

                                            data={v} addOrRemove={result.length > 0 ? "Remove" : "Add"} navigation={this.props.navigation} subChildPro={subChildPro} childPro={childPro} mainPro={mainPro} />
                                    )
                                })
                            }

                        </ScrollView>
                        <TouchableOpacity
                            disabled={addToCart.length > 0 ? false : true}

                            onPress={() => navigation.navigate("checkout", { data: addToCart })}
                            style={{
                                marginTop: 5,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                // zIndex:1,
                                // bottom:0,
                                shadowOpacity: 0.22,
                                shadowRadius: 2.22,
                                // borderRadius: 5,
                                elevation: 3,
                                backgroundColor: "#F5CD54", justifyContent: "center",
                                alignItems: "center", width: "100%", height: 60
                            }}
                        >
                            <Text style={{ color: "white", }}>Checkout ({addToCart.length} Items) Rs
                                        {
                                    addToCart.map((v, i) => {
                                        total = Number(total) + Number(v.price)
                                    })}{total}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
})

function mapStateToProps(state) {
    return ({
        addToCart: state.root.addToCart
    })
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            // signInWithGoogle, login
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailSercice);