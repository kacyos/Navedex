import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  max-height: 1080px;
`;

export const Title = styled.h2`
  display: inline-block;
  margin-top: 40px;
  margin-left: 32px;
  font-size: 40px;
  line-height: 48px;
  @media only screen and (max-width: 420px){
    width: 100%
  }
`;

export const Button = styled.button`
  width: 176px;
  height: 40px;
  margin-top: 44px;
  margin-right: 32px;
  float: right;
  color: #fff;
  border: 0;

  @media only screen and (max-width: 420px) {
    display: inline-block;
    margin: 10px, auto;
    width: 200px;
    height: 50px;
    font-size: 24px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin-top: 32px;

  @media only screen and (max-width: 420px) {
    display: inline-block;
    justify-content: center;
    width:100%;
  }
`;

export const Card = styled.li`
  width: 280px;
  height: 376px;
  margin-left: 32px;
  margin-bottom: 32px;

  

  @media only screen and (max-width: 420px) {
    margin-left: 16px;
    margin-right: 16px;   
  }

  img {
    width: 280px;
    height: 280px;
    cursor: pointer;
  }

  .userName {
    line-height: 18px;
    margin-top: 16px;
  }

  .userJob {
    font-weight: 400;
    margin-top: 4px;
  }

  button {
    background-color: transparent;
    border: none;
    outline: 0;
    width: 24px;
    height: 24px;
    margin-top: 10px;
    margin-right: 4px;
  }

  button img {
    width: 18.41px;
    height: 18.41px;
  }
`;

export const ModalDiv = styled.div`
  img {
    width: 503px;
    height: 503px;
  }


  div {
    display: inline-block;
    vertical-align: top;
    margin-top: 32px;
    margin-left: 30.2px;
  }

  div h2 {
    font-size: 24px;
    line-height: 36px;
  }

  div h3 {
    margin-top: 24px;
  }

  div p {
    margin-top: 10px;
    font-weight: 400;
  }

  button {
    background-color: transparent;
    border: none;
    outline: 0;
    width: 24px;
    height: 24px;
    margin-top: 110px;
  }

  .edit {
    margin-left: 16px;
  }

  button img {
    width: 18.41px;
    height: 18.41px;
  }
  @media only screen and (max-width: 746px) {
    background-color: #FFF;
    img{
      max-width: 320px;
      max-height: 320px;
    }
    button {
    margin-top: 10px;
  }
  }
`;
