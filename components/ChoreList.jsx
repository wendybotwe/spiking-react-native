import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import ChoreCard from './ChoreCard';

const choresArray = [
  {
    id: '1',
    title: 'Bins',
    description: 'Take the rubbish and recycling out to the wheelie bins',
    dueDate: '2025-06-04',
    completed: false,
  },
  {
    id: '2',
    title: 'Hoovering',
    description: 'Hoover all communal living areas downstairs plus the stairs and landing',
    dueDate: '2025-06-05',
    completed: true,
  },
];

const ChoreList = () => {
  const [chores, setChores] = useState(choresArray);

  const toggleComplete = (id) => {
    setChores((prev) =>
      prev.map((chore) =>
        chore.id === id ? { ...chore, completed: !chore.completed } : chore
      )
    );
  };

  return (
    <FlatList
      data={chores}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChoreCard
          chore={item}
          onToggleComplete={() => toggleComplete(item.id)}
        />
      )}
    />
  );
};

export default ChoreList;