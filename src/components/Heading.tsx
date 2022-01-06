type HeadingProps = {
    children: string
}

export const Heading = (props: HeadingProps) => {
    return (
        <div>{props.children}</div>
    )
}

// children is <Heading>'??'</Heading> in '??' value // current props