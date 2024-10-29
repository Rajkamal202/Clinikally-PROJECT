import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CountdownTimer({ cutoffTime }) {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(cutoffTime, 0, 0, 0);
      const diff = cutoff - now;

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setTimeRemaining(`${hours}h ${minutes}m remaining`);
      } else {
        setTimeRemaining('Cutoff time passed');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cutoffTime]);

  return (
    <View>
      <Text style={styles.timer}>{timeRemaining}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 16,
    color: '#FF0000',
    marginTop: 10,
  },
});
