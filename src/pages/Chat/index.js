import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors} from '../../utils';

const Chat = ({navigation}) => {
  const [chatContent, setChatContent] = useState('');

  const chatSend = () => {
    console.log('chat yang akan dikirim: ', chatContent);
    setChatContent('');
  };
  return (
    <View style={styles.page}>
      <Header title="Chatting" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ChatItem isMe />
        <ChatItem />
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={chatSend}
      />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
  },
});
