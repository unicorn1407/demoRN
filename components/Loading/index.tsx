import React from 'react';
import { Modal, ActivityIndicator, StyleSheet, View } from 'react-native';
import styles from './styles';

const Loading = ({ visible }: {visible: boolean}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};


export default Loading;
