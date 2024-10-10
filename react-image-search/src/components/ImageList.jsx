export default function ImageList(props) {
    return (
        <div>
            <p className="mb-4"><strong>Total results: {props.searchData.total || 0}</strong></p>
        <div className="grid grid-cols-3 gap-2">
           {
            props.searchData?.results?.map(image => (
                <img className="w-full h-full object-cover" key={image.id} src={image.urls.small} alt={image.alt_description} />
            ))
           }
        </div>
        </div>
    );   
}