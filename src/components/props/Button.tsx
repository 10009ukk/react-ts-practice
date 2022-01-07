import React from "react"

type ButtonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
}

export const Button = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.onClick(event, 1)}>click</button>
    )
}