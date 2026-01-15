import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoadingState, ErrorState } from '../components/FeedbackStates';

export default function DetailsScreen({ route }) {
    const { id } = route.params;
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const loadData = () => {
        setLoading(true);
        setError(false);

        setTimeout(() => {
            // Simula um erro 
            const shouldFail = Math.random() > 0.5;

            if (shouldFail) {
                setError(true);
                setLoading(false);
            } else {
                setData({
                    id: id,
                    title: `Item Detalhado ${id}`,
                    description: 'Descrição detalhada do item 1',
                    price: 'R$ 99,90',
                    category: 'Eletrônicos'
                });
                setLoading(false);
            }
        }, 1500);
    };

    useEffect(() => { loadData(); }, []);

    if (loading) return <LoadingState />;
    if (error) return <ErrorState onRetry={loadData} />;

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.category}>{data.category}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>{data.price}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', justifyContent: 'center' },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
    category: { fontSize: 14, color: '#666', marginBottom: 15, textTransform: 'uppercase' },
    description: { fontSize: 16, lineHeight: 24, color: '#333', marginBottom: 20 },
    price: { fontSize: 20, fontWeight: 'bold', color: '#007AFF' }
});