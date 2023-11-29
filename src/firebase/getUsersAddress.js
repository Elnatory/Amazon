import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, getDocs } from 'firebase/firestore';

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

export const getUserAddressData = async (userId, setData, setLoading) => {
    setLoading(true);

    try {
        const userAddressQuery = query(
            collection(db, 'users', userId, 'details')
        );

        const addressSnapshot = await getDocs(userAddressQuery);

        const addressData = addressSnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        setData(addressData);
    } catch (error) {
        console.error('Error fetching user address data:', error);
    } finally {
        setLoading(false);
    }
};
