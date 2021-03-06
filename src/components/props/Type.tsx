type TypeProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean,
}

export const Type = (props: TypeProps) => {
    const {messageCount = 0} = props;
    return (
        <div>
            <h2>
                {props.isLoggedIn
                ? `hi ${props.name} cnt : ${messageCount}`
                : `Welcom Guest`}
            </h2>
        </div>
    )
}