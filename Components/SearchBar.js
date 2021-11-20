import { SearchBar } from 'react-native-elements';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function SearchBar() {

    return (
        <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    )
}

const styles = StyleSheet.create({

})