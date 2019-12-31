import React from 'react'
import {View, ScrollView} from 'react-native'
import {Avatar} from 'react-native-paper'
import InfoCard from '../../components/InfoCard'

const ProfilePage = () => {
    return(
        <View style={{ flex: 1,  flexDirection:'column'}}>
            <View style={{flex: 1, backgroundColor: 'purple', alignItems:'center', justifyContent:'center'}}><Avatar.Image size={100} source={{uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'}}/></View>
            <View style={{flex: 2}}>
                <ScrollView>
                    <InfoCard/><InfoCard/><InfoCard/>
                </ScrollView>
            </View>
            
        </View>
        
    )
}
export default ProfilePage