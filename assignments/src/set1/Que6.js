export default function choclates({ items1 }) {
    return (
        <div>
            {console.log(items1)}
            <h1>Products Name</h1>
            <ul>
                {
                    items1.filter((val) => {

                        if (val.sales > val.quantity) {
                            return true
                        }
                        else {
                            return false
                        }
                    }).map((val) => <li> Name:{val.name},quantity:{val.quantity},Sales:{val.sales}</li>)
                }
            </ul>
        </div >
    )
}