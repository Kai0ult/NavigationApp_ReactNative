import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoadingState, ErrorState } from '../components/FeedbackStates';

export default function DetailsScreen({ route }) {
  const { id } = route.params; [cite: 34]
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadData = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setError(true); // Simula erro obrigatório do PDF [cite: 36]
      setLoading(false);
    }, 2000);
  };

  useEffect(() => { loadData(); }, []);

  if (loading) return <LoadingState />; [cite: 37]
  if (error) return <ErrorState onRetry={loadData} />; [cite: 38, 39]

  return (
    <View style={styles.container}>
      <Text>ID Recebido: {id}</Text> [cite: 35]
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});