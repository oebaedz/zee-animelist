const Genres = ({ index, name, length }) => {
    return (
        <div className="flex gap-4 flex-wrap text-color-secondary">
            <div className=" hover:text-color-accent text-sm cursor-pointer">{name}</div>
            <div>{index + 1 !== length ? '/' : ''}</div>
        </div>
    )
}

export default Genres