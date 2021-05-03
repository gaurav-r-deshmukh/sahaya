import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button,Form } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { listQuestionair } from "../actions/questionairActions.js"
import Message from "./Message"
import Loader from "./Loader"
import {DATE,SLOT,ID} from "./Records"
import {updateAppointmentScore} from "../actions/appointmentActions.js"
let Score = Number(0)

function Questionnair({ location, history }) {
    const [radio, setRadio] = useState({})

    // const [questionair,setQuestionair] = useState([])
    const dispatch = useDispatch()
    const questionairList = useSelector(state => state.questionairList)
    const { loading, error, questionair } = questionairList
    
    
    useEffect(() => {
        dispatch(listQuestionair())
        
        // const fetchQuestionair = async () => {
        //     const { data } = await axios.get("/api/questionair")
        //     setQuestionair(data)
        // }   
        // fetchQuestionair()
    }, [dispatch])

    let total = Number(0)
    let counter = Number(0)

    for (const item in radio) {
        total += Number(radio[item])
    }

    function assignValue() {
        Score = total
    }

    const submitHandler = (e) => {
        Score = total
        console.log(Score)
        console.log("questionaie called")
        e.preventDefault()
        dispatch(updateAppointmentScore({ date: DATE,slot: SLOT,id: ID,score: total}))
        history.push('/score')
     
    }
    

    return (
        <Container className="col-lg-6">
        {/* <h4>date {DATE} slot: {SLOT} id: {ID} total: {total}</h4> */}
         {loading ? (
                        <Loader />

                    ) : error ? (
                        <Message variant="danger">{error}</Message>
                    ) : (
            <Container className="mb-5">
                {
                   



                        questionair.map((object) => {
                            let {question, options } = object
                            counter += 1
                            return (
                                < >
                                    <Row >
                                        <Card className="mt-2 w-100">

                                            <Card.Body>
                                                <label>{counter + ")"} {question}</label>
                                            </Card.Body>



                                            {options.map((singleOption) => {
                                                return (
                                                    <Col>

                                                        <label >
                                                            <input type="radio"
                                                                id={counter}
                                                                checked={Number(radio[counter]) === Number(singleOption.points)}
                                                                value={singleOption.points}
                                                                onChange={(e) => { setRadio({ ...radio, [e.target.id]: e.target.value }) }}
                                                                className="ml-3"

                                                            />
                                                            <span className="p-3">{singleOption.option}</span>
                                                            {/* <input type="radio"
                                                            id={id}
                                                            checked={Number(radio[id]) === Number(singleOption.points)}
                                                            value={singleOption.points}
                                                            onChange={(e) => { setRadio({ ...radio, [e.target.id]: e.target.value })}}
                                                            className="ml-3"

                                                        />
                                                        <span className="p-3">{singleOption.option}</span>
 */}


                                                        </label>
                                                    </Col>
                                                )
                                            })}
                                        </Card>

                                    </Row>

                                </>
                            )
                        })
                }
                <Row>
                <Form onSubmit={(e)=>submitHandler(e)} className="w-100">
                    
                       <Button variant="primary" type='submit' className="mt-2" block>
                       
                            Submit
                        
                       </Button>
                 
                </Form>
                </Row>

            </Container>
            )}
        </Container>

    )
}


export default Questionnair
export { Score }