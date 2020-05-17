import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import {
  Title,
  Input,
  List,
  ListItems,
  Span,
  Form,
  Button,
  Author,
} from './Chat.styles';

import MessagesInterface from '~/interfaces/message';

const socket: SocketIOClient.Socket = io('http://localhost:3333');
socket.on('connect', () =>
  console.log('[IO] New connection on server! Be welcome! :)')
);

const ChatComponent: React.FC = () => {
  const [arrMessages, setArrMessages] = useState<MessagesInterface[]>([]);
  const [author, setAuthor] = useState<any>('');
  const [content, setContent] = useState<any>('');

  const handleContentChange = (event: any) => {
    setContent(event.target.value);
  };

  const handleAuthorChange = (event: any) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (author.length && content.length) {
      let message: MessagesInterface = {
        author,
        content,
      };
      socket.emit('new_message', message);

      setContent('');
    }
  };

  useEffect((): any => {
    const handleNewMessage = (msg: MessagesInterface) =>
      setArrMessages([...arrMessages, msg]);

    socket.on('new_message', (msg: any) =>
      setArrMessages([...arrMessages, msg])
    );

    return () => socket.off('new_message', handleNewMessage);
  }, [arrMessages]);

  return (
    <>
      <Title>Hello from chat component!</Title>
      <List>
        {arrMessages.map((message: any, index: any) => (
          <ListItems key={index}>
            <Author>{message.author}</Author>
            <Span>{message.content}</Span>
          </ListItems>
        ))}
      </List>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="author"
          value={author}
          placeholder="Digite o autor"
          onChange={handleAuthorChange}
        />
        <Input
          type="text"
          name="content"
          value={content}
          placeholder="Digite sua mensagem"
          onChange={handleContentChange}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </>
  );
};

export { ChatComponent };
