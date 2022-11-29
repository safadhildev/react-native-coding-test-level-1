import { TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import _ from 'lodash';

import Input from './Input';
import { useState } from 'react';
import moment from 'moment';

const DateInput = ({ value = new Date(), placeholder = '', setValue = () => {} }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    if (_.isEqual(event.type, 'set')) {
      setValue(selectedDate);
    }
    setShowDatePicker(false);
  };

  const onShowDatePicker = () => {
    setShowDatePicker(true);
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
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={_.isNull(value) ? new Date() : value}
          mode="date"
          is24Hour={true}
          onChange={onChange}
          maximumDate={new Date()}
        />
      )}
    </>
  );
};

export default DateInput;
