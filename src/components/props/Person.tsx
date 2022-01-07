import { PersonType, Name } from "./Person.types"

type PersonListType = {
    names?: Name[] // PersonList Array in Object
}
export const Person = ({name: {first, last}}: PersonType) => {
    return (
        <div>
            <h2>{first} {last}</h2>
        </div>
    )
}