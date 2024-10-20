import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', title: 'Starters', image: require('../Images/Starters.jpg') },
  { id: '2', title: 'Mains', image: require('../Images/Mains.jpg') },
  { id: '3', title: 'Desserts', image: require('../Images/Desserts.jpg') },
  { id: '4', title: 'Mignardises', image: require('../Images/Mignardise.jpg') },
];

export default function OrderScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>

      <View style={styles.categories}>
        {categories.map(category => (
          <TouchableOpacity key={category.id} onPress={() => setSelectedCategory(category)}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Image source={selectedCategory.image} style={styles.featuredImage} />
      <Text style={styles.featuredText}>{selectedCategory.title}</Text>

      <TouchableOpacity style={styles.orderButton}>
        <Text style={styles.orderButtonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    fontSize: 16,
    marginBottom: 20,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  featuredText: {
    fontSize: 24,
    marginVertical: 10,
  },
  orderButton: {
    backgroundColor: '#f77',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
