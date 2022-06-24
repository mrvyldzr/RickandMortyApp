
import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {useDispatch} from 'react-redux';
import {sendEpisodePart} from '../store/actions/action';
import EpisodePartScreen from './EpisodePartScreen';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constant/colors';

const getEpisode = item => {
  return _getEpisode(item[0])
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
    });
};
const _getEpisode = async URL => {
  const {data: res} = await axios.get(`${URL}`);
  console.log(res)
  return res;
};


const HomeScreen = ({ navigation }) => {
  const [episode, setEpisode] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getEpisode(['https://rickandmortyapi.com/api/episode']).then(res => {
      console.log('TEST');
      console.log(res);
      setEpisode(res);
      setLoading(true);
    });
  }, []);

  const ItemView =  ({item, index}) => {
    const itemClick =  item => {
      console.log('Test');
      console.log('click on item', item);
      alert(item.id);
      dispatch(sendEpisodePart(item.id))
      navigation.navigate(EpisodePartScreen)
    };

    return (
      <TouchableOpacity
        onPress={() => itemClick(item)}
        style={{width:50,height:25}}>
        <Text>{item.id}</Text>
      </TouchableOpacity>
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
      <View>
        {!isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            style={styles.root}
            data={episode.results}
            renderItem={ItemView}
            keyExtractor={(_item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
          />
        )}
      </View>
    </View>
  );
};
//export default HomeScreen;

// eslint-disable-next-line no-undef
const HomeStack = createStackNavigator();

export default function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#E2E7EA",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#E2E7EA",
        },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: (
            props // App ar
          ) => (
            <Image
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: Platform.OS === "ios" ? 120 : 100,
                height: Platform.OS === "ios" ? 100 : 50,
              }}
              source={require("../assets/rickandmorty.png")}
              resizeMode="center"
            />
          ),
          headerRight: () => (
            <Icon.Button
              style={styles.drawerStyle}
              name="settings"
              color="black"
              size={25}
              backgroundColor="#E2E7EA"
              onPress={() => navigation.openDrawer()}
            >
              {" "}
            </Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name="EpisodePartScreen"
        component={EpisodePartScreen}
        options={{
          headerTitle: (
            props // App Logo
          ) => (
            <Image
              style={{
                width: Platform.OS === "ios" ? 120 : 100,
                height: Platform.OS === "ios" ? 100 : 50,
              }}
              source={require("../assets/rickandmorty.png")}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('HomeScreen')}
              title="Info"
              color={COLORS.tabBarYellow}
            >
              <Text style={{ paddingLeft: Platform.OS === "ios" ? 15 : 20 }}>
                <Icon name="arrow-back" color={COLORS.black} size={30} />
              </Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Icon.Button
              style={styles.drawerStyle}
              name="settings"
              color="black"
              size={25}
              backgroundColor="#E2E7EA"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}


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
