import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const [search, onSearch] = useState('')

  const onChangeSearch = (search) => {
    onSearch(search)
  }

  return(
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar 
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={search}
          />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: 'white',
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue',
  }
});
