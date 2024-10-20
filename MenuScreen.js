import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const recentDishes = [
  { id: '1', title: 'Sushi', image: require('../Images/R.jpg') },
  { id: '2', title: 'Italian Cuisines', image: require('../Images/Italian.jpg') },
  { id: '3', title: 'African Delicacies', image: require('../Images/African.png') },
];

const specialties = [
  { id: '1', title: 'African Dishes', image: require('../Images/African 2.jpg') },
  { id: '2', title: 'Italian', image: require('../Images/italian-cuisine.jpeg') },
];

const services = [
  { id: '1', title: 'Pasta with Italian sauce', price: '$144', image: require('../Images/Italian-Spaghetti.jpg') },
  { id: '2', title: 'Tsukimi Udon', price: '$125', image: require('../Images/Udon.jpg') },
  { id: '3', title: 'Rice & Chicken with Sauce', price: '$233', image: require('../Images/Rice-Chicken.jpg') },
];

export default function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Dishes</Text>
      <FlatList
        horizontal
        data={recentDishes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Specialties</Text>
      <FlatList
        horizontal
        data={specialties}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.title}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>The most affordable services</Text>
      <FlatList
        data={services}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View style={styles.serviceItem}>
              <Image source={item.image} style={styles.image} />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  item: {
    marginRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
});
