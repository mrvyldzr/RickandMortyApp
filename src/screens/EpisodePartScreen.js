import React from 'react';
import axios from 'axios';

import { useSelector } from "react-redux";


import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native";


const _getEpisodePart = async URL => {
    const { data: res } = await axios.get(`${URL}`);
    console.log(res)
    return res;
};

const getEpisodePart = item => {
    console.log("GET EPISODE PART")
    console.log(item)
    return _getEpisodePart(item[0])
        .then(res => {
            return res;
        })
        .catch(err => {
            console.log(err);
        });
};



const EpisodePartScreen = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [episodePart, setEpisodePart] = React.useState('');

    const episode = useSelector((state) => state.Reducers.episodePart);
    console.log("episode")
    console.log(episode)
    React.useEffect(() => {
        getEpisodePart([`https://rickandmortyapi.com/api/episode/${episode}/`]).then(res => {

            setEpisodePart(res);

        });
    }, []);

    const ItemView = ({ item }) => {
        const itemClick = item => {
            console.log('=================');
            console.log('click on item', item);

        };

        return (
            <View>
                {console.log('=================')}
                {console.log(item)}
            </View>

        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.50,
                    width: '100%',
                    backgroundColor: 'gray',
                }}
            />
        );
    };

    return (

        <View>
            {!isLoading ? (
                <Text>Loading...</Text>
            ) : (
                <View><Text>{episodePart}</Text></View>

            )}
        </View>
    )
}

export default EpisodePartScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    root: {
        backgroundColor: '#ffffff',

        paddingRight: 15,
        paddingLeft: 15,
    },
    separator: {
        height: 2,
        backgroundColor: 'pink',
    },
    row: {
        flexDirection: 'row',
        marginLeft: -50,
        marginRight: -20,
        height: Platform.OS === 'ios' ? 110 : 90,
    },
    col1: {
        flex: 1,
        marginLeft: Platform.OS === 'ios' ? 50 : 40,
        marginRight: Platform.OS === 'ios' ? 50 : 10,
    },
    col2: {
        flex: 1,
        marginLeft: Platform.OS === 'ios' ? 10 : 10,
        marginRight: Platform.OS === 'ios' ? 20 : 40,
    },
    buttonText: {
        color: 'blue',
    },
});
