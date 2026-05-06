export default function({ parameter, note }) {
    return (
        <>
            <p className="x:not-first:mt-6 x:leading-7">
                As of Prism 4.4, this parameter allows negation. Negating an action will <span className="font-medium">exclude</span> results. It is important to note that unlike Prism 3, the syntax has the exclamation point <span className="font-italic">before</span> the colon. You cannot use a negated parameter with its normal equivalent.
            </p>
            <p className="x:not-first:mt-6 x:leading-7">
                Example: <code className="nextra-code" dir="ltr">/pr l {parameter}</code> ({note})
            </p>
        </>
    )
}