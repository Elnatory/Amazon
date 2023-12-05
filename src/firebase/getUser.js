import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDYcZV0eHYZ3lIQfZi--vZJgfYJeDaFx4",
    authDomain: "fir-88026.firebaseapp.com",
    projectId: "fir-88026",
    storageBucket: "fir-88026.appspot.com",
    messagingSenderId: "947539259472",
    appId: "1:947539259472:web:f1f9925e12528cdfe92155"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const userData = (setData, setLoading) => {
    setLoading(true);
    const getUsers = [];

    const subscriber = onSnapshot(collection(db, 'users'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const usersData = {
                
              uid: doc.data().uid,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                displayName: doc.data().displayName,
                updatedAt: doc.data().updatedAt,
                email: doc.data().email,
                cart: doc.data().cart,
                


            };
console.log(usersData)
            getUsers.push(usersData);
        });
        setData(getUsers);
        setLoading(false);
    });

    return () => subscriber();
};

