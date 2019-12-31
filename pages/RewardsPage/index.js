import React, {useState} from 'react'
import {View, Dimensions} from 'react-native'
import { Searchbar } from 'react-native-paper';
import ProgramList from '../../components/ProgramList';
import config from '../../constant';
const RewardsPage = () => {
    const [query, setQuery] = useState('')
    return(
        <View style={{ flex: 1,
            flexDirection: 'column', }}>
            <Searchbar style={{marginBottom: 5}}
        placeholder="Search"
        onChangeText={query => {setQuery(query); }}
        value={query}
      />
      <ProgramList items={config.sampleItems} width={Dimensions.get('window').width}/>
    </View>
    )
}
export default RewardsPage