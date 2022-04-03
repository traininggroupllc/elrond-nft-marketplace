import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const ProfileSidebar = () => {
  return (
    <div className='nftSidebar'>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey='3'>
          <Accordion.Header>Type</Accordion.Header>
          <Accordion.Body>
            <div className='my-3 checkInput'>
              <Form.Check
                type='checkbox'
                id='type-checkbox-1'
                label='COLLECTOR'
              />
              <p>6,050</p>
            </div>
            <div className='my-3 checkInput'>
              <Form.Check
                type='checkbox'
                id='type-checkbox-2'
                label='CREATOR'
              />
              <p>6,050</p>
            </div>
            <div className='my-3 checkInput'>
              <Form.Check type='checkbox' id='type-checkbox-3' label='OTHER' />
              <p>6,050</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        {/*  */}
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Social Verification</Accordion.Header>
          <Accordion.Body>
            <div className='my-3 checkInput'>
              <Form.Check
                type='checkbox'
                id='verification-checkbox-1'
                label='TWITTER'
              />
              <p>6,050</p>
            </div>
            <div className='my-3 checkInput'>
              <Form.Check
                type='checkbox'
                id='verification-checkbox-2'
                label='INSTAGRAM'
              />
              <p>6,050</p>
            </div>
            <div className='my-3 checkInput'>
              <Form.Check
                type='checkbox'
                id='verification-checkbox-3'
                label='NOT_VERIFIED'
              />
              <p>6,050</p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProfileSidebar;
