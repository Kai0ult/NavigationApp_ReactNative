import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    const userData = {
        name: 'Caio Oliveira',
        email: 'caio.oliveira@gmail.com',
        bio: 'Desenvolvedor React Native.',
        location: 'Coelho Neto',
        joined: '2024'
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarPlaceholder} />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.email}>{userData.email}</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.label}>Bio</Text>
                <Text style={styles.bio}>{userData.bio}</Text>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>CIdade:</Text>
                    <Text style={styles.value}>{userData.location}</Text>
                </View>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Membro desde:</Text>
                    <Text style={styles.value}>{userData.joined}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: {
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#007AFF',
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
    name: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
    email: { fontSize: 16, color: '#e0e0e0', marginTop: 5 },
    infoSection: { padding: 20 },
    label: { fontSize: 14, fontWeight: 'bold', color: '#666', marginBottom: 5 },
    bio: { fontSize: 16, color: '#333', marginBottom: 20, fontStyle: 'italic' },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    value: { fontSize: 16, color: '#333' }
});
