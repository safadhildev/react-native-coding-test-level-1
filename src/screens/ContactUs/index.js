import _, { isNull } from 'lodash';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, commonStyles, Text, Input, Header, Button, DateInput } from '../../components';
import { validateEmail, validateName } from '../../utils/validate';

const ContactUs = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [date, setDate] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(false);

  const [disableSubmit, setDisableSubmit] = useState(true);

  const onSubmit = () => {
    Alert.alert(
      '',
      `Name: ${name}\nEmail: ${email}\nDate of Birth: ${moment(date).format('DD/MM/YYYY')}`
    );
  };

  const onChangeName = (text) => {
    setName(text);
    setNameError(validateName(text));
  };

  const onChangeEmail = (text) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };

  const onSelectDate = (selectedDate) => {
    setDate(selectedDate);
  };

  useEffect(() => {
    if (
      !_.isEmpty(name) &&
      !_.isEmpty(email) &&
      !_.isNull(date) &&
      isNull(nameError) &&
      isNull(emailError)
    ) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  }, [name, nameError, date, emailError, email]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title="Contact Us" />
        <View style={styles.formContainer}>
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
          <DateInput placeholder="Birthday" value={date} setValue={onSelectDate} />
          <View style={{ marginTop: 50 }}>
            <Button variant="solid" text="Submit" disabled={disableSubmit} onPress={onSubmit} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
});

export default ContactUs;
