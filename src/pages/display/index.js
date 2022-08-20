import { useState } from "react"

export default function Index() {

    const [state, setState] = useState("");
    
    return (
        <section>
            <header>Display example</header>
            <main>
                <section>
                    <input onChange={(evt) => setState(evt.target.value)}></input>
                </section>
                <section>
                    <p>{state}</p>
                </section>
            </main>
        </section>
    )
}