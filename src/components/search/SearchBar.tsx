import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { searchActions } from "../../redux/slice/search";


export default function SearchBar() {

    const [userInput, setUserInput] = useState<string>("");

    const dispatch = useDispatch();

    const productList = useSelector((state: RootState) => state.products.productList);

    const resultList = productList.filter((product) => product.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()));

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
        dispatch(searchActions.searchResults(resultList));
        if (event.target.value === "") {
            dispatch(searchActions.searchResults([]));
        }
    }
    console.log(userInput, "SearchBar");
    return (
        <div>
            This is SearchBar
            <div>
            <input onChange={onChangeHandler} placeholder="Search by Name..."  type="text" />
            </div>
        </div>
    )
}