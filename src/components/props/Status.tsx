type StatusProps = {
    name: "clear" | "success" | "error"
}

export const Status = (props: StatusProps) => {
    return (
        <div>
            {props.name}
        </div>
    )
}