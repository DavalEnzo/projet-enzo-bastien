export default function Loader ()
{
    return (
        <div className="d-flex justify-content-center flex-row">
            <div>
                <h1>Chargement...</h1>
            </div>
            <div style={{width: "3rem", height: "3rem", borderWidth: "8px"}} className="spinner-border text-primary mx-2 my-4" role="status"></div>
        </div>
    )
}
