type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
    return (
        <div>Oscar children : {props.children}</div>
    )
}

// children is <Heading>'??'</Heading> in '??' value // current props