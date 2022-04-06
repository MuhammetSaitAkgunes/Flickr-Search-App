import React from 'react';
import { View, StyleSheet } from 'react-native';
import ResultDetail from './ResultDetails';

const ResultsList = (props) => {
    return (
        <View>
            {
                props.results.map((item) => {
                    return <ResultDetail photo={item} />
                })
            }

        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;