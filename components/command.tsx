export default function({ command, alias, note }) {
    return (
        <p className="x:not-first:mt-6 x:leading-7">
            <code className="nextra-code" dir="ltr">/pr {command}</code>{alias && <span> (or <code className="nextra-code" dir="ltr">/pr {alias}</code>)</span>}
            {note}
        </p>
    )
}