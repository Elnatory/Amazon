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

export const getSubCategories = (setData, setLoading) => {
    setLoading(true);
    const getSubCategories = [];

    const subscriber = onSnapshot(collection(db, 'sub-categories'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const SubCategoriesData = {

                _id: doc.id,
                createdAt: doc.data().createdAt,
                image: doc.data().image,
                name: doc.data().name,
                slug: doc.data().slug,
                updatedAt: doc.data().updatedAt   
          
            };

            getSubCategories.push(SubCategoriesData);
        });
        setData(getSubCategories);
        setLoading(false);
    });

    return () => subscriber();
};
