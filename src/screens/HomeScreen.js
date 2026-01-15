import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LoadingState, EmptyState } from '../components/FeedbackStates';

export default function HomeScreen({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setData(['Item 1']);
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <LoadingState />;
    if (!data || data.length === 0) return <EmptyState />;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Home</Text>
            <Button
                title="Ir para Detalhes (ID: 1)"
                onPress={() => navigation.navigate('Details', { id: '1' })}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, marginBottom: 20 }
});