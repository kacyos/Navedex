import styled from 'styled-components';
import arrow from '../images/icons/arrow.svg';

export const Container = styled.div`
  max-width: 624px;
  margin: 0 auto;
`;

export const Control = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 16px;
  width: 250px;

  span {
    height: 36px;
    font-size: 24px;
    width: 250px;
    line-height: 36px;
  }
`;

export const ImgBack = styled.img.attrs({
  src: arrow,
  alt: 'voltar',
})`
  margin: auto;
  width: 11.67px;
  height: 19.8px;
  margin-right: 22.49px;
  cursor: pointer;
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 16px;
  float: left;

  label {
    display: block;
    font-size: 14px;
    line-height: 18px;
    margin-top: 32px;
    margin-bottom: 4px;
  }

  input {
    
    width: 280px;
    height: 40px;
    padding: 8px;
    font-weight: 400;
    color: #212121;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  float: right;

  button {
    width: 176px;
    height: 40px;
    margin-top: 32px;
    margin-right: 16px;
    color: #fff;
    font-size: 14px;
    border: 0;
  }
`;
