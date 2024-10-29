import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateDelivery } from '../utils/deliveryLogic'; // Assumes delivery logic helper is in utils folder
import CountdownTimer from '../utils/countdownTimer';

export default function DeliveryEstimate({ route }) {
  const { pincode } = route.params;
  const [deliveryInfo, setDeliveryInfo] = useState({});

  useEffect(() => {
    const estimatedDelivery = calculateDelivery(pincode);
    setDeliveryInfo(estimatedDelivery);
  }, [pincode]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delivery Estimate</Text>
      <Text style={styles.info}>Pincode: {pincode}</Text>
      <Text style={styles.info}>Estimated Delivery Date: {deliveryInfo.date}</Text>
      {deliveryInfo.sameDayEligible && (
        <CountdownTimer cutoffTime={deliveryInfo.cutoffTime} />
      )}
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
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
