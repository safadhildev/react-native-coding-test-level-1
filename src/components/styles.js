import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.teal,
  },
  buttonDisabled: {
    backgroundColor: colors.grey,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  errorText: {
    fontSize: 12,
    color: colors.red,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    borderColor: colors.grey,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'flex-end',
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputWrapper: {
    borderRadius: 5,
    borderColor: colors.green,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  labelWrapper: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    zIndex: 1,
    top: 0,
    left: 10,
    paddingHorizontal: 5,
  },
  labelText: {
    fontSize: 12,
    color: colors.grey,
  },
  outlinedButton: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.teal,
    borderWidth: 2,
  },
  outlinedButtonText: {
    fontSize: 14,
    color: colors.teal,
  },
  placeholderText: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.grey,
  },
  placeholderWrapper: { position: 'absolute', zIndex: 1, bottom: 32, left: 10 },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});
