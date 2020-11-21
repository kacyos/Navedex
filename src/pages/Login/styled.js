import styled from 'styled-components';
import logo from '../../images/logo.svg';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  margin: 156px auto;
  padding: 40px 32px;
  width: 448px;
  height: 408px;
  border: 1px solid rgba(33, 33, 33, 1);
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo Navers',
})`
  position: relative;
  margin-bottom: 8px;
`;

export const Label = styled.label`
  position: relative;
  margin-top: 32px;
  width: 60.34px;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
`;

export const Input = styled.input`
  width: 384px;
  height: 40px;
  margin-top: 4px;
  padding: 8px;
  border: 1px solid #424242;
  font-weight: 400;
`;

export const ButtonLogin = styled.button`
  width: 384px;
  height: 40px;
  margin-top: 32px;
  color: #fff;
  border: none;
  font-size: 14px;
`;
