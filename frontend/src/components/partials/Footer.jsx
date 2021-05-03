import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-2">
                        <p>&copy; {currentYear} Sahaya </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer
