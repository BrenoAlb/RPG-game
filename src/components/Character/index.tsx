import * as C from "./styles"
import {CharacterSides} from "../../types/CharacterSides";

type Props = {
    x: number;
    y: number;
    side:CharacterSides;
}

export const Character = ({x, y, side}:Props) => {
    const sizeW = 22.5;
    const sizeH = 22.5;
    const sides = {
        down: 0,
        left: -22,
        right:-44,
        up: -66

    }

    return(
        <C.Container
            sizeH = {sizeH}
            sizeW = {sizeW}
            left = { x * sizeW}
            top  = {y * sizeH}
            sidePos = {sides[side] ?? 0}
        >
            

        </C.Container>
    );
}