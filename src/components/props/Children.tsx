type ChildrenProps = {
    children: React.ReactNode
}

export const Children = (props: ChildrenProps) => {
    return (
        <div>Oscar children : {props.children}</div>
    )
}

// children is <Heading>'??'</Heading> in '??' value // current props