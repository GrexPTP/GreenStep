import React, {useState} from 'react'
import {View,Text} from 'react-native'
import config from '../../constant';
import Carousel from 'react-native-snap-carousel'
import DescribedCard from '../../components/DescribedCard';
import { Dimensions } from "react-native";

const DetailPage = () => {
    const [items, setItems] = useState(config.sampleItems)
    const RenderItem = ({item, index}) => (
    <DescribedCard style={{flex: 1, flexDirection: 'column'}} {...item}/>
)
    return (
        <View style={{flex:1, flexDirection: "column"}}>
        <View style={{flex: 1}}>
        <Carousel style={{flex: 1}} data={items} sliderWidth={Dimensions.get('window').width}
            itemWidth={250} layout={'default'} renderItem={RenderItem} loop={true}/>
        </View>
        <View style={{flex: 2}}>
        <Text>XYZ</Text>
        </View>
    </View>
    )
}
    

export default DetailPage