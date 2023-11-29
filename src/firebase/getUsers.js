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

export const getUsersData = async (setData, setLoading) => {
    setLoading(true);
    const getUsers = [];

    try {
        const q = collection(db, 'users');
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));

        const addressData = [];

        // Iterate over each user
        for (const elem of data) {
            const addressQuery = query(collection(db, `users/${elem.id}/address`));
            const addressSnapshot = await getDocs(addressQuery);

            // Map address data for each user
            const userAddressData = addressSnapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            addressData.push(userAddressData);
        }

        getUsers.push(...addressData); // spread the array to avoid nested arrays
        console.log(getUsers);
        setData(data);
    } catch (error) {
        console.error('Error fetching users data:', error);
    } finally {
        setLoading(false);
    }

    // const subscriber = onSnapshot(collection(db, 'users'), (querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         const userData = {
    //             // id: doc.id,
    //             name: doc.data().name,
    //             email: doc.data().email,
    //             createdAt: doc.data().createdAt,
    //         };

    //         getUsers.push(userData);
    //     });
    //     setData(getUsers);
    //     setLoading(false);
    // });

    // return () => subscriber();
};
