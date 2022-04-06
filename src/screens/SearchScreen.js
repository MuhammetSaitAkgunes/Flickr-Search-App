import React, { useState } from "react";
import { ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    return (
        <ScrollView>
            <SearchBar
                tags={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <ResultsList results={results} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;