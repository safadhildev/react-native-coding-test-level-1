import { Button, Container } from '../../components';

const Main = ({ navigation }) => {
  const onContactUs = () => {
    console.log('[DEBUG] :: ');
    navigation.navigate('ContactUs');
  };

  return (
    <Container>
      <Button text="Contact Us" onPress={onContactUs} />
    </Container>
  );
};

export default Main;
