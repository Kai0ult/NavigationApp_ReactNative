import React from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';

export const LoadingState = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text>Carregando dados...</Text>
  </View>
);

export const EmptyState = () => (
  <View style={styles.center}>
    <Text>Nenhum dado encontrado.</Text>
  </View>
);

export const ErrorState = ({ onRetry }) => (
  <View style={styles.center}>
    <Text style={{ color: 'red' }}>Ocorreu um erro ao carregar.</Text>
    <Button title="Tentar novamente" onPress={onRetry} />
  </View>
);

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }
});