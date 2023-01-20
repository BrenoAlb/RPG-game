import styled from "styled-components";

export const Container = styled.div<{sidePos: number , sizeH:number , sizeW:number , left:number , top:number}>`
    width: ${props => props.sizeW}px;
    height: ${props => props.sizeH}px;
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    background-image: url("/assets/char.png");
    background-position: 0px ${props => props.sidePos}px;
`;