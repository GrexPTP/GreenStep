import React, {useState} from 'react'
import {View, FlatList,Text} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Headline, Caption } from 'react-native-paper';
import DescribedCard from '../../components/DescribedCard';
import config from '../../constant';
import { Dimensions } from "react-native";
const HomePage = () => {
    const [items, setItems] = useState([
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://gongcha.com.vn/wp-content/uploads/2019/10/phổ-nhĩ.thử.799x500-01.jpg",
          title: "Gong Cha",
          description: 'Some short description here'
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://phuclong.com.vn/uploads/store/83943c23fd8b7a-ntmk.jpg",
          title: "Phuc Long",
          description: 'Some short description here'
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://static.mservice.io/blogscontents/momo-upload-api-190723150433-636994910738243137.jpg",
          title: "Toco Toco",
          description: 'Some short description here'
        }
      ])
    
    const RenderItem = ({item, index}) => (
        <DescribedCard style={{flex: 1, flexDirection: 'column'}} {...item}/>
    )
    return(
        <View style={{flex: 10, flexDirection: 'column', paddingTop: 5 }}>
            <Carousel style={{flex: 1}} data={items} sliderWidth={Dimensions.get('window').width}
            itemWidth={250} layout={'default'} renderItem={RenderItem} loop={true}/>
            <View style={{flex: 9, justifyContent:'space-around', alignItems: 'center'}}>
                <FlatList
          data={items}
          renderItem={({item}) => <DescribedCard  width={Dimensions.get('window').width} {...item}/>}
        />
                
            </View>
        </View>
        
    )
}
export default HomePage