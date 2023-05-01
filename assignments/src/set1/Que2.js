export default function btn({ bg, col, bdr, pd }) {
    return (
        <div>
            <button style={{ backgroundColor: bg, color: col, borderRadius: bdr, padding: pd }}>Start</button>
        </div>
    )
}