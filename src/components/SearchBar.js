import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {

    return (
        <View style={styles.backgroundStyle} >
            <Feather style={styles.iconStyle} name="search" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search'
                autoCapitalize='none'
                autoCorrect={false}
                value={props.tags}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        flexDirection: 'row',
        backgroundColor: 'gray',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        color: 'black',
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;