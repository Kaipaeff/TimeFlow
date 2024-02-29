import { styled } from "styled-components";
import { ISwitchComponentProps } from "../../types/switchMode.interface";


export const SwitchBlock = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 530px;
  height: 50px;
  margin-bottom: 80px;
  padding: 5px 34px 6px 73px;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;  
  background-color: #fff;
  border-radius: 25px;
`

export const SwitchTimer = styled.span<ISwitchComponentProps>`
  color: ${props => props.mode === 'timer' ? '#fff' : '#737373'};
  cursor: pointer;
  z-index: 3;
`

export const SwitchCountdown = styled.span<ISwitchComponentProps>`
color: ${props => props.mode === 'countdown' ? '#fff' : '#737373'};
cursor: pointer;
  z-index: 3;
`

export const SwitchedMode = styled.div<ISwitchComponentProps>`
  position: absolute;
  top: 0;
  left: ${props => props.mode === 'timer' ? '0' : '50%'};
  width: 265px;
  height: 50px;
  background: #FE9F06;
  border-radius: 25px;
  transition: left 0.4s ease;
`