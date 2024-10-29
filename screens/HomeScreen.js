import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import products from '../data/Products.csv'; // Simulated import for product data

export default function HomeScreen({ navigation }) {
  const [pincode, setPincode] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulate loading products and filtering available ones
    const availableProducts = products.filter((product) => product.inStock);
    setFilteredProducts(availableProducts);
  }, []);

  const handleCheckDelivery = () => {
    if (pincode) {
      navigation.navigate('DeliveryEstimate', { pincode });
    } else {
      alert('Please enter a valid pincode.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product Catalog</Text>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
      />
      <Button title="Check Delivery" onPress={handleCheckDelivery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
