import React from 'react';
import { View, StyleSheet,  Dimensions, TouchableOpacity,  ImageBackground, ScrollView,  } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Drawer from '../../components/drawer'
import Header from '../../components/header';
import AvailServiceRow from '../../components/AvailServiceRow';
class AvailSercice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            drawer: false,
            slideStyle: "slideInLeft",
            screenHeight: "", profession: ""
        }
    };
    componentWillMount() {
        let profession = this.props.navigation.getParam("profession")
        var { height, width } = Dimensions.get('window');
        this.setState({
            screenHeight: height,
            profession,
        })
    }
    animateParent(fals) {
        setTimeout(() => {
            this.setState({
                drawer: false
            })
        }, 250);
    }
    render() {
        const { profession, screenHeight ,} = this.state
        return (
            <ImageBackground source={require("../../assets/gradient.jpg")}
                style={{ width: '100%', height: '100%' }}>
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
                    <Header func={() => this.setState({ drawer: true })} />
                    {/* body */}
                    <View style={{ flex: 1, backgroundColor: "#fff", padding: 10 }}>
                        <ScrollView>
                        {
                                profession.map((v,i) => {
                                    return (
                                        <AvailServiceRow  data={v} navigation={this.props.navigation}/>
                                    )
                                })
                            }
                        </ScrollView>
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
        actions: bindActionCreators({
            // signInWithGoogle, login
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AvailSercice);