
import ActionTypes from '../constant/constant';
import axios from 'axios';
import firebase from 'firebase';
import professionArray from '../../components/professionArray';
import dynamicPrices from '../../components/dynamicPrices';
if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: 'AIzaSyDYqwmrFVPJ4ZIlYRIBehC2yGe4GR2wpSU',
        projectId: 'asaani-app'
    });
}
require('firebase/firestore')
var db = firebase.firestore();
export function login(user) {
    return dispatch => {
        return new Promise(function (resolve, reject) {
        })
    }
}
export function getData(navigation) {
    return dispatch => {
        db.collection("services").get()
            .then((querySnapshot) => {
                let servicesFromDb = []
                console.log(querySnapshot, "querySnapshot");
                querySnapshot.forEach((doc) => {
                    servicesFromDb.push(doc.data())
                    console.log(`${doc.id} => ${doc.data()}`);
                });
                console.log(servicesFromDb, "test");
                dispatch({ type: ActionTypes.SERVICEFRMDB, payload: servicesFromDb })
                dynamicPrices(professionArray, servicesFromDb)
                    .then((data) => {
                        console.log(data, "datain action")
                        dispatch({ type: ActionTypes.PROFESSION, payload: data })
                        db.collection("discount").get().then((querySnapshot) => {
                            let discount = []
                            console.log(querySnapshot, "querySnapshot");
                            querySnapshot.forEach((doc) => {
                                discount.push(doc.data())
                                console.log(`${doc.id} => ${doc.data()}`);
                            });
                            console.log(discount, "discount");
                            dispatch({ type: ActionTypes.DISCOUNTFRMDB, payload: discount })
                        });
                        navigation.navigate("home")
                    }).catch((err) => {
                    })
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
export function createOrder(obj, discountPkg) {
    return dispatch => {
        let cloneObj = obj
        console.log(obj, discountPkg, "obj,discountPkg")
        dispatch(appLoader(true))
        var options = {
            method: 'POST',
            url: `https://thawing-tor-85190.herokuapp.com/sendEmail/`,
            // url: `http://192.168.10.7:5000/sendEmail`,
            headers:
            {
                'cache-control': 'no-cache',
                "Allow-Cross-Origin": '*',
            },
            data: cloneObj
        };
        axios(options)
            .then((data) => {
                dispatch(thankYou(true))
                dispatch(appLoader(false))
            }).catch((err) => {
                dispatch(appLoader(false))
                console.log(err, "ERROR_ON_SEND_EMAIL_")
            })
    }
}