import React, { useState } from "react"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import questionair from "../questionair"
let Score = Number(0)

function RadioGroup() {
    const [radio, setRadio] = useState({})

    let total = Number(0)

    for (const item in radio) {
        total += Number(radio[item])
    }

    Score = total

    return (
        <Container>
            <Form>
                <div>
                    {
                        questionair.map((object) => {
                            let { id, question, options } = object
                            return (
                                <div >
                                    <label>{id + ")"} {question}</label>
                                    {options.map((singleOption) => {
                                        return (
                                            <div>
                                                <input type="radio"
                                                    id={id}
                                                    checked={Number(radio[id]) === Number(singleOption.points)}
                                                    value={singleOption.points}
                                                    onChange={(e) => { setRadio({ ...radio, [e.target.id]: e.target.value }) }}
                                                />
                                                <label >{singleOption.option}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </Form>
        </Container>
    )
}


export default RadioGroup;
export { Score }