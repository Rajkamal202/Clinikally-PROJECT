import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>
        <Text style={styles.stock}>{product.inStock ? 'In Stock' : 'Out of Stock'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    paddingLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
  stock: {
    fontSize: 14,
    color: product.inStock ? 'green' : 'red',
  },
});
