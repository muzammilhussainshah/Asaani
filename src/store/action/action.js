
import ActionTypes from '../constant/constant';
// import firebase from 'react-native-firebase'
import axios from 'axios';

import firebase from 'firebase';

  if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: 'AIzaSyDYqwmrFVPJ4ZIlYRIBehC2yGe4GR2wpSU',
        // authDomain: '### FIREBASE AUTH DOMAIN ###',
        projectId: 'asaani-app'
      });
}
// firebase.initializeApp(config);
require('firebase/firestore')
var db = firebase.firestore();

//login user 
export function login(user) {
    return dispatch => {
        return new Promise(function (resolve, reject) {

            // console.log(user, 'user here')
            // firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((success) => {
            //     console.log(success.user, 'success')
            //     dispatch({ type: ActionTypes.USERDATA, payload: success.user })
            //     resolve(true)

            // })
            //     .catch((err) => {
            //         console.log(err, 'err signup')
            //         reject(err.message)
            //     })
            // dispatch({ type: ActionTypes.NAME, payload: 'abc' })

        })
    }
}
export function getData(navigation) {
    return dispatch => {
        db.collection("services").get().then((querySnapshot) => {
            let servicesFromDb=[]
            console.log(querySnapshot,"querySnapshot");
            querySnapshot.forEach((doc) => {
                servicesFromDb.push(doc.data()) 
                console.log(`${doc.id} => ${doc.data()}`);
            });
            console.log(servicesFromDb,"test");

        dispatch({ type: ActionTypes.SERVICEFRMDB, payload: servicesFromDb })
        navigation.navigate("home")

        });
        


    }
}
export function appLoader(bolean) {
    return dispatch => {
        dispatch({ type: ActionTypes.APPLOADER, payload: bolean })

    }
}
export function thankYou(bolean) {
    return dispatch => {
        dispatch({ type: ActionTypes.THANKYOUFORORDER, payload: bolean })


    }
}
export function createOrder(obj) {
    return dispatch => {
        dispatch(appLoader(true))

        var options = {
            method: 'POST',
            url: `https://thawing-tor-85190.herokuapp.com/sendEmail/`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: obj
        };
        axios(options)
            .then((data) => {
                console.log(data, "SEND_EMAIL_SUCCESSFULLY")
                dispatch(thankYou(true))
                dispatch(appLoader(false))

            }).catch((err) => {
                dispatch(appLoader(false))
                console.log(err, "ERROR_ON_SEND_EMAIL_")
            })
    }
}

export function userSignUp(user) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
            // console.log(user, 'user signup')

            // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            //     .then((success) => {
            //         console.log(success.user, 'success')
            //         dispatch({ type: ActionTypes.USERDATA, payload: success.user })
            //         resolve(true)

            //     })
            //     .catch((err) => {
            //         console.log(err, 'err signup')
            //         reject(err.message)
            //     })

        })
    }
}


export function signInWithGoogle(accessTokenData) {
    return dispatch => {
        return new Promise(function (resolve, reject) {

            // const credential = firebase.auth.GoogleAuthProvider.credential(
            //     accessTokenData
            // );
            // firebase
            //     .auth()
            //     .signInWithCredential(credential)
            //     .then(function (user) {
            //         console.log(user, 'user google')
            //         // alert(JSON.stringify(user))
            //         if (user && user.user) {
            //             resolve(true)
            //         }
            //     });

        })
    }
}