import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LoadingState, EmptyState } from '../components/FeedbackStates';

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      // Simulação: mude para [] para ver o estado Empty ou para [...] para ver o conteúdo
      setData(['Item 1']); 
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <LoadingState />; [cite: 31]
  if (!data || data.length === 0) return <EmptyState />; [cite: 32]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Home</Text> [cite: 27]
      <Button 
        title="Ir para Detalhes (ID: 1)" 
        [cite_start]onPress={() => navigation.navigate('Details', { id: '1' })} [cite: 28]
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 }
});