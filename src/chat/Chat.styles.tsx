import styled from 'styled-components';

import { colors } from '~/assets/styles/variables';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 100px;
  margin-left: auto;
  margin-right: auto;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);

  @media (max-width: 600px) {
    padding: 20px 30px;
  }
`;

export const Title = styled.h1`
  color: ${colors.lightCoral};
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;
`;

export const List = styled.ul`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  background: #fff;
  overflow-y: scroll;
  padding: 15px 50px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    background: #dfe6e9;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.lightCoral};
  }

  @media (max-width: 600px) {
    padding: 15px 20px;

    &::-webkit-scrollbar {
      width: 6px;
    }
  }
`;

export const ListItems = styled.li`
  list-style: none;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #ececec;
`;

export const Span = styled.span`
  font-size: 1em;
`;

export const ContainerMessages = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 84px);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  max-width: 100%;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 80%;
  background: transparent;
  border: 1px solid ${colors.lightCoralRGBA};
  padding: 10px 30px;
  color: ${colors.lightCoral};
  transition: 0.2s all linear;
  margin-bottom: 5px;

  &:focus {
    box-shadow: 0 0 12px ${colors.lightCoralRGBA};
    border-color: ${colors.lightCoral};
  }
`;

export const InputMessage = styled.textarea`
  width: 80%;
  height: 100px;
  background: transparent;
  border: 1px solid ${colors.lightCoralRGBA};
  padding: 10px 30px;
  color: ${colors.lightCoral};
  transition: 0.2s all linear;
  margin-bottom: 5px;
  resize: none;

  &:focus {
    box-shadow: 0 0 12px ${colors.lightCoralRGBA};
    border-color: ${colors.lightCoral};
  }
`;

export const Button = styled.button`
  width: 80%;
  background: ${colors.lightCoral};
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: 0.2s all linear;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Author = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  color: ${colors.lightCoral};
`;
