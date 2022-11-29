import { useEffect, useRef, useState } from 'react';
import { View, TextInput } from 'react-native';
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
  ...props
}) => {
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <View style={{ marginBottom: 5 }}>
      <View style={styles.inputContainer}>
        <View
          pointerEvents="none"
          style={
            inputFocused || !_.isEmpty(value) ? styles.labelWrapper : styles.placeholderWrapper
          }
        >
          <Text
            style={[
              inputFocused || !_.isEmpty(value) ? styles.labelText : styles.placeholderText,
              { color: inputFocused ? colors.teal : colors.grey },
            ]}
          >
            {placeholder}
          </Text>
        </View>
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
