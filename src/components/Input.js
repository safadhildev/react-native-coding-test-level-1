import { useEffect, useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Text from './Text';

import styles from './styles';
import _ from 'lodash';
import colors from './colors';

const Input = ({
  placeholder = '',
  value = '',
  editable = true,
  onChangeText = () => {},
  onBlur = () => {},
  error = false,
  errorText = '',
  clickable = false,
  onPress = () => {},
  ...props
}) => {
  const [inputFocused, setInputFocused] = useState(false);

  const Container = clickable ? TouchableOpacity : View;
  return (
    <Container style={{ marginBottom: 5 }} onPress={onPress}>
      <View style={styles.inputContainer}>
        {(inputFocused || !_.isEmpty(value)) && (
          <View pointerEvents="none" style={styles.labelWrapper}>
            <Text style={[styles.labelText, { color: inputFocused ? colors.teal : colors.grey }]}>
              {placeholder}
            </Text>
          </View>
        )}
        <TextInput
          editable={editable}
          allowFontScaling={false}
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={() => {
            setInputFocused(false);
            onBlur();
          }}
          value={value}
          placeholder={inputFocused ? '' : placeholder}
          placeholderTextColor={colors.black}
          onChangeText={onChangeText}
          style={[
            styles.input,
            inputFocused && { borderColor: colors.teal },
            !editable && { color: colors.grey },
          ]}
          {...props}
        />
      </View>
      {error && (
        <Text style={[styles.errorText, { position: 'absolute', bottom: 0 }]}>{errorText}</Text>
      )}
    </Container>
  );
};

export default Input;
