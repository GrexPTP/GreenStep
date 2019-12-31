import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const InfoCard = () => (
  <Card style={{margin: 10}}>
    <Card.Title title="Card Title"/>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default InfoCard;