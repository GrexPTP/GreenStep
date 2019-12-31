import React from 'react'
import {Card, Title, Paragraph } from 'react-native-paper';
const DescribedCard = ({thumbnail, title, description, width}) => (
    <Card style={{width, marginBottom:5}}>
      <Card.Cover source={{ uri: thumbnail }} />
      <Card.Content>
        <Title style={{textAlign:'center'}}>{title}</Title>
        <Paragraph style={{textAlign: "justify"}}>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
export default DescribedCard