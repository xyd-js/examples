export default function StatusBadge({ status }: { status: string }) {
    return (
        <span style={{
            padding: "4px 10px",
            borderRadius: 999,
            background: "var(--dark16, #eee)",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
        }}>
            {status}
        </span>
    );
}
