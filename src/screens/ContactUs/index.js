import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, commonStyles, Text, Input, Header, Button } from '../../components';
import { validateEmail, validateName } from '../../utils/validate';

const ContactUs = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(false);

  const onChangeName = (text) => {
    setName(text);
    setNameError(validateName(text));
  };

  const onChangeEmail = (text) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Contact Us" />
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}
        >
          <Input
            placeholder="Name"
            value={name}
            onChangeText={onChangeName}
            error={nameError !== null}
            errorText={nameError}
          />

          <Input
            placeholder="Email"
            value={email}
            onChangeText={onChangeEmail}
            error={emailError !== null}
            errorText={emailError}
          />

          <View style={{ marginTop: 50 }}>
            <Button variant="solid" text="Submit" disabled />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ContactUs;
