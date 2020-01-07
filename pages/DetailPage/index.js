import React, {useState} from 'react'
import {View,  ScrollView} from 'react-native'
import config from '../../constant';
import Carousel from 'react-native-snap-carousel'
import DescribedCard from '../../components/DescribedCard';
import { Dimensions } from "react-native";
import Map from '../../components/Map'
import {Avatar, Card, Title, Paragraph, Text, Button, ProgressBar, Colors } from 'react-native-paper'
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
        <View style={{flex: 2, marginTop: 5}}>
        <ScrollView>
        <Card style={{margin: 10}} >
                          <Card.Title title={'General Info'} titleStyle={{color: 'red'}} />
                          <Card.Content>
                            <Paragraph style={{fontSize:18}}>{`Program: Name of program`}</Paragraph>
                            <Paragraph style={{fontSize:18}}>{`Date: 22/08/2020`}</Paragraph>
                          </Card.Content>
                        </Card>
                        <Card style={{height: 200,margin: 10}} >
                          <Card.Title title={'Detail Info'} titleStyle={{color: 'red'}} />
                          <Card.Content>
                                <Paragraph>
                                    This is details of the events
                                </Paragraph>
                          </Card.Content>
                        </Card>
                        <Button icon="door" mode="text" onPress={() => console.log('Pressed')}>
    Participate
  </Button>
  <ProgressBar progress={0.5} color={Colors.red800}/>
  <Map/>
        </ScrollView>
        
        </View>
    </View>
    )
}
    

export default DetailPage