import React, { useState } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import { selectQueue, setModalStatus, createQueueAsync } from './queueSlice';
import { QueueForm } from './QueueForm'
import {Button} from 'baseui/button';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

export function Queue() {
    const queue = useSelector(selectQueue)
    const dispatch = useDispatch()

    const [queueName, setQueueName] = useState('')

    function close() {
        dispatch(setModalStatus(false))
    }
    function open() {
        dispatch(setModalStatus(true)) 
    }
    function onFormChange(data) {
        setQueueName(data)
    }

    function submit() {
        dispatch(createQueueAsync(queueName))
    }

    return (
        <div>
            <div>{queueName}</div>
            <div>
                <Button onClick={open}>Create a Queue</Button>
            </div>
            <Modal onClose={close} isOpen={queue.isShowForm}>
                <ModalHeader>Please input Queue Infomation</ModalHeader>
                <ModalBody>
                    <QueueForm onFormChange={onFormChange} queueName={queueName}/>
                </ModalBody>
                <ModalFooter>
                <ModalButton kind="tertiary" onClick={close}>
                    Cancel
                </ModalButton>
                <ModalButton onClick={submit}>Okay</ModalButton>
                </ModalFooter>
            </Modal>
        </div>
    )

}