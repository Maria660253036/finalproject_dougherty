/*
    This is the authentication service for the user's log-in and registration
    activities. User authentication will be provided by firebase from google.
 */
import firebase from 'firebase';

export class AuthService {

    signup(email: string, password: string) {
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    }

    signin(email: string, password: string) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        firebase.auth().signOut();
    }

    getActiveUser() {
        return firebase.auth().currentUser;
    }
}