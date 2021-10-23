import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch,  } from 'react-redux';
import { selectQueue, setModalStatus, createQueueAsync, getQueuesAsync } from './queueSlice';
import { QueueForm } from './QueueForm'
import { Button } from 'baseui/button';
import { useAuth0 } from "@auth0/auth0-react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

export function Queue() {
    const { user, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0();

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

    useEffect(() =>{
        const getQueues = async () => {
            const accessToken = await getAccessTokenSilently();
            dispatch(getQueuesAsync(accessToken))
        }
        if (isAuthenticated) {
            getQueues()
        }
    }, [getAccessTokenSilently, dispatch, isAuthenticated])

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div>
            <div>{queueName}</div>
            <div>
                {isAuthenticated && (
                <div>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <p>{JSON.stringify(user)}</p>
                </div>
                )}
            </div>
            <div>
                {queue?.queues?.map(item => <div key={item.id}>{JSON.stringify(item)}</div>)}
            </div>

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