import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultDetail = (props) => {

    return (
        <View>
            <Image style={styles.imageStyle}
                source={{
                    uri: `https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}_w.jpg`
                }} />
            <Text style={styles.nameStyle}>{props.photo.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        marginTop: 10,
        flex: 1,
        height: 250,
        width: 250,
        borderRadius: 10,
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    nameStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginEnd: 10
    }
});

export default ResultDetail;