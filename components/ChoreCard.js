import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChoreCard = ({ chore, onToggleComplete }) => {
  const { title, description, dueDate, completed } = chore;

  return (
    <View style={[styles.card, completed && styles.completedCard]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.dueDate}>Due: {dueDate}</Text>
      <TouchableOpacity onPress={onToggleComplete} style={styles.button}>
        <Text style={styles.buttonText}>
          {completed ? 'Done!' : 'Mark as complete'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  completedCard: {
    backgroundColor: '#e0ffe0',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default ChoreCard;