import { useState } from 'react'
import {
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import Sidebar from 'components/Sidebar'

import * as S from 'styles/Main'

export default function Home() {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Sidebar />
      <Container style={{ paddingLeft: '100px' }} className="ml-5" fluid={true}>
        <Row xs="3">
          <Col xs="5" className="d-flex justify-content-end align-items-center">
            <S.CardMark className="p-4">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button onClick={toggle}>Go somewhere</Button>
            </S.CardMark>
          </Col>
          <Col xs="2" className="d-flex justify-content-center">
            <S.Bar />
          </Col>
          <Col xs="5" className="d-flex align-items-center">
            <S.CardMark className="p-4">
              <CardTitle tag="h5">Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button onClick={toggle}>Go somewhere</Button>
            </S.CardMark>
          </Col>
        </Row>
      </Container>
    </>
  )
}
