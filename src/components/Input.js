import { useEffect, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
import Text from './Text';

import styles from './styles';
import _ from 'lodash';
import colors from './colors';

const Input = ({
  placeholder = '',
  value = '',
  onChangeText = () => {},
  onBlur = () => {},
  error = false,
  errorText = '',
  ...props
}) => {
  const inputRef = useRef();
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <View style={{ marginBottom: 5 }}>
      <View style={styles.inputContainer}>
        <View
          pointerEvents="none"
          style={
            inputFocused || !_.isEmpty(value)
              ? styles.labelWrapper
              : { position: 'absolute', zIndex: 1, bottom: 32, left: 10 }
          }
        >
          <Text
            style={inputFocused || !_.isEmpty(value) ? styles.labelText : styles.placeholderText}
          >
            {placeholder}
          </Text>
        </View>
        <TextInput
          allowFontScaling={false}
          onFocus={() => {
            setInputFocused(true);
          }}
          onBlur={() => {
            setInputFocused(false);
            onBlur();
          }}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputFocused && { borderColor: colors.teal }]}
          {...props}
        />
      </View>
      <Text style={[styles.errorText, { position: 'absolute', bottom: 0 }]}>{errorText}</Text>
    </View>
  );
};

export default Input;
