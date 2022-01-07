type CSSProps = {
    styles: React.CSSProperties
}

export const CSS = (props: CSSProps) => {
    return (
        <div style={props.styles}>CSS Props</div>
    )
}