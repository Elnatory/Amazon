import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/getProducts';

export const GETallProducts = createAsyncThunk('GETallProducts', async () => {
    try {
        const prdArr = [];

        const res = await getDocs(collection(db, 'products'));

        const filterImgs = (arr) => {
            if (!Array.isArray(arr)) {
                console.error('Input is not an array', arr);
                return [];
            }

            const temp = [...arr];
            while (temp.length > 0 && !temp[temp.length - 1].endsWith('detail.jpg')) {
                temp.pop();
            }

            return temp;
        };

        const handlePrd = (doc) => {
            const prd = {
                ...doc.data(),
                id: doc.id,
                index: prdArr.length,
                similars: [],
            };

            prd.imgurl = filterImgs(prd.imgurl || []);

            delete prd.createTime;
            delete prd.updateTime;

            prdArr.push(prd);
        };

        res.docs.forEach(doc => handlePrd(doc));

        return prdArr;
    } catch (err) {
        console.error('Error fetching products:', err);
        throw err;
    }
});

const allProducts = createSlice({
    name: 'allProducts',
    initialState: { allProducts: [] },
    extraReducers: (builder) => {
        builder.addCase(GETallProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            // console.log('Fetched products:', state.allProducts);
        });
    },
});

export default allProducts.reducer;
