import React, {useState} from 'react'
import {View, Text} from 'react-native'
import { Searchbar } from 'react-native-paper';
const RewardsPage = () => {
    const [query, setQuery] = useState('')
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Searchbar
        placeholder="Search"
        onChangeText={query => {setQuery(query); }}
        value={query}
      />
        </View>
        
    )
}
export default RewardsPage