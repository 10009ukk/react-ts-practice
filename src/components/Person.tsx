type PersonType = {
    name: {
        first: string,
        last: string
    },
    names?: {
        first: string,
        last: string
    }[] // PersonList Array in Object
}
export const Person = ({name: {first, last}}: PersonType) => {
    return (
        <div>
            <h2>{first} {last}</h2>
        </div>
    )
}