import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot, query, where, orderBy, startAt, endAt } from 'firebase/firestore';

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

export const getSearchData = (searchQuery, setData, setLoading) => {
    setLoading(true);
    const getSearchResults = [];

    const q = query(
        collection(db, 'products'),
        where('title', '>=', searchQuery.toLowerCase()),
        where('title', '<=', searchQuery.toLowerCase() + '\uf8ff'),
        orderBy('title')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const productData = {
                _id: doc.id,
                brand: {
                    _id: doc.data().brand._id,
                    name: doc.data().brand.name,
                    image: doc.data().brand.image,
                    slug: doc.data().brand.slug,
                },
                category: {
                    _id: doc.data().category._id,
                    name: doc.data().category.name,
                    image: doc.data().category.image,
                    slug: doc.data().category.slug,
                },
                createdAt: doc.data().createdAt,
                description: doc.data().description,
                id: doc.data().id,
                imageCover: doc.data().imageCover,
                images: doc.data().images,
                price: doc.data().price,
                priceAfterDiscount: doc.data().priceAfterDiscount,
                quantity: doc.data().quantity,
                ratingsAverage: doc.data().ratingsAverage,
                ratingsQuantity: doc.data().ratingsQuantity,
                slug: doc.data().slug,
                sold: doc.data().sold,
                subcategory: doc.data().subcategory,
                title: doc.data().title,
                updatedAt: doc.data().updatedAt
            };
            getSearchResults.push(productData);
        });
        setData(getSearchResults);
        setLoading(false);
    });

    return unsubscribe;
};
