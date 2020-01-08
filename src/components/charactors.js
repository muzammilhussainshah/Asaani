import React, { useReducer, Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { bindActionCreators } from 'redux';
// import { signInWithGoogle,  } from '../../../store/action/action'
import { connect } from 'react-redux';
import Carousel from 'react-native-looped-carousel';
import * as Animatable from 'react-native-animatable';


let { height, width } = Dimensions.get('window');
export class Charactors extends Component {
    constructor(props) {
        super(props)
        let { width, height } = Dimensions.get('window')
        console.log(width, height, "66666665")
        this.state = {
            size: { width: "100%", height: "100%", },
        };
    }
    render() {
        return (
            // <View style={styles.container}>
            <Carousel
                // sound={this.state.sound}
                delay={2000}
                style={this.state.size}
                autoplay={false}
                pageInfo
                isLooped={false}
                // leftArrowText={'⇦'}
                // leftArrowStyle={{
                //     fontSize: 50, margin: 20, color: '#ead2ba',
                //     textShadowOffset: { width: 2, height: 2 },
                //     textShadowRadius: 1,
                //     textShadowColor: '#000',
                // }}
                // rightArrowText={'⇨'}
                // rightArrowStyle={{
                //     fontSize: 50, margin: 20, color: '#ead2ba',
                //     textShadowOffset: { width: 2, height: 2 },
                //     textShadowRadius: 1,
                //     textShadowColor: '#000',
                // }}
                // arrows
                onAnimateNextPage={(p) => (p)}
            >
                <TouchableOpacity style={styles.contentContainer}
                onPress={()=>alert("work")}
                    activeOpacity={0.5}
                >
                    <Image
                        resizeMode="contain"
                        style={{ width: "100%", height: "98%",
                    }}
                        source={require("../assets/1.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.contentContainer}
                    activeOpacity={0.5}
                >
                    <Image
                        resizeMode="contain"
                        style={{ width: "100%", height: "98%" }}
                        source={require("../assets/1.png")}
                    />
                </TouchableOpacity>
            </Carousel>
            // </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});


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

export default connect(mapStateToProps, mapDispatchToProps)(Charactors);