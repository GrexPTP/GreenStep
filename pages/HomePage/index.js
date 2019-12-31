import React, {useState} from 'react'
import {View, Text, Image} from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
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
      const MyComponent = ({thumbnail, title, description}) => (
        <Card>
          <Card.Cover source={{ uri: thumbnail }} />
          <Card.Content>
            <Title style={{textAlign:'center'}}>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </Card.Content>
        </Card>
      );
    const RenderItem = ({item, index}) => (
        <MyComponent style={{flex: 1, flexDirection: 'column'}} {...item}/>
    )
    return(
        <View style={{ flex: 1,  flexDirection: 'column-reverse', }}>
            <Carousel data={items} sliderWidth={360}
          itemWidth={250} layout={'default'} renderItem={RenderItem} loop={true}/>
        </View>
        
    )
}
export default HomePage