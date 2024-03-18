import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCHZSCUirNy7KiJ-lIqcIfKEqCN0jCsGnM',
  authDomain: 'memoapp-dddfa.firebaseapp.com',
  projectId: 'memoapp-dddfa',
  storageBucket: 'memoapp-dddfa.appspot.com',
  messagingSenderId: '242443245541',
  appId: '1:242443245541:web:718af408b914f91bd9010c'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
