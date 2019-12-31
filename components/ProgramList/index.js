import React from 'react'
import {FlatList} from 'react-native'
import DescribedCard from './../DescribedCard'
const ProgramList = ({items, width}) => (
    <FlatList
          style={{margin:10}}
          data={items}
          renderItem={({item}) => <DescribedCard  width={width} {...item}/>}
        />
)
export default ProgramList