import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import {
  Container,
  Title,
  Input,
  InputMessage,
  List,
  ListItems,
  Span,
  ContainerMessages,
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
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [visibility, setVisibility] = useState<string>('');

  useEffect(() => {
    getAuthor();
  }, []);

  const getAuthor = () => {
    let author = localStorage.getItem('Author');
    if (author !== null) {
      setVisibility('hidden');
      setAuthor(author);
    }
  };

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

      localStorage.setItem('Author', author);
      setVisibility('hidden');

      setContent('');
    }
  };

  useEffect((): any => {
    const handleNewMessage = (msg: MessagesInterface) =>
      setArrMessages([...arrMessages, msg]);

    const loadInitialMessages = (arrMessages: MessagesInterface[]) =>
      setArrMessages(arrMessages);

    socket.on('initial_messages', loadInitialMessages);

    socket.on('new_message', handleNewMessage);

    return () => {
      socket.off('initial_messages', loadInitialMessages);

      socket.off('new_message', handleNewMessage);
    };
  }, [arrMessages]);

  return (
    <Container>
      <Title>Hello from chat component!</Title>
      <ContainerMessages>
        <List>
          {arrMessages.map((message: any, index: any) => (
            <ListItems
              key={index}
              className={`${author === message.author ? 'owner' : 'other'}`}
            >
              <Author>{message.author}</Author>
              <Span>{message.content}</Span>
            </ListItems>
          ))}
        </List>
      </ContainerMessages>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="author"
          value={author}
          placeholder="Digite o autor"
          onChange={handleAuthorChange}
          className={visibility}
        />
        <InputMessage
          name="content"
          value={content}
          placeholder="Digite sua mensagem"
          onChange={handleContentChange}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export { ChatComponent };
