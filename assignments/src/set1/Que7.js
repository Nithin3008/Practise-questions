export default function rec({ record }) {
    let totalMarks = record.maths + record.english + record.computers
    function checker(mk) {
        if (mk >= 225) {
            return 'A'
        }
        else if (mk >= 180) {
            return 'B'
        }
        else if (mk >= 150) {
            return 'C'
        }
        else {
            return 'D'
        }
    }
    return (
        <div>
            <h1>Student Details</h1>
            <p>Name:{record.name}</p>
            <p>english:{record.english}</p>
            <p>maths:{record.maths}</p>
            <p>computers:{record.computers}</p>
            <p>Grade:{checker(totalMarks)}</p>
        </div>
    )
}