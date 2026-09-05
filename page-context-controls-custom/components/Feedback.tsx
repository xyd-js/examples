import { useState } from "react";

export default function Feedback({ label }: { label: string }) {
    const [voted, setVoted] = useState<string | null>(null);
    if (voted) return <div>Thanks for the {voted}!</div>;
    return (
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span>{label}</span>
            <button onClick={() => setVoted("thumbs up")}>👍</button>
            <button onClick={() => setVoted("thumbs down")}>👎</button>
        </div>
    );
}
