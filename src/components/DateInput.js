import { TouchableOpacity, View, Text } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import _ from 'lodash';

import Input from './Input';
import { useState } from 'react';
import moment from 'moment';
import styles from './styles';
import colors from './colors';

const DateInput = ({ value = new Date(), placeholder = '', setValue = () => {} }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onCloseModal = () => {
    setShowDatePicker(false);
  };

  const onChange = (selectedDate) => {
    setValue(selectedDate);
    onCloseModal();
  };

  const onShowDatePicker = () => {
    setShowDatePicker(true);
    console.log('TEST');
  };

  return (
    <>
      <TouchableOpacity onPress={onShowDatePicker} activeOpacity={0.8}>
        <Input
          value={_.isNull(value) ? 'DD/MM/YYYY' : moment(value).format('DD/MM/YYYY')}
          placeholder={placeholder}
          editable={false}
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={onChange}
        onCancel={onCloseModal}
        isDarkModeEnabled={true}
        maximumDate={new Date()}
      />
    </>
  );
};

export default DateInput;
