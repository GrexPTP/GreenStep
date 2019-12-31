import React, {useState} from 'react'
import {View} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import DescribedCard from '../../components/DescribedCard';
import ProgramList from '../../components/ProgramList'
import { Dimensions } from "react-native";
import config from '../../constant';
const HomePage = () => {
    const [items, setItems] = useState(config.sampleItems)
    
    const RenderItem = ({item, index}) => (
        <DescribedCard style={{flex: 1, flexDirection: 'column'}} {...item}/>
    )
    return(
        <View style={{flex: 10, flexDirection: 'column', paddingTop: 5 }}>
            <Carousel style={{flex: 1}} data={items} sliderWidth={Dimensions.get('window').width}
            itemWidth={250} layout={'default'} renderItem={RenderItem} loop={true}/>
            <View style={{flex: 9, justifyContent:'space-around', alignItems: 'center'}}>
                <ProgramList width={Dimensions.get('window').width} items={items}/>
            </View>
        </View>
        
    )
}
export default HomePage