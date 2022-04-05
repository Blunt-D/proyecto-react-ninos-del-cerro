const ItemListContainer = (props) => {
    console.log(props.greeting)
    return(
        <h1 className="mt-5 pt-4">{props.greeting}</h1>
    )
}

export default ItemListContainer

