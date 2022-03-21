import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Settings = () => {
  return (
    <div className='container-lg'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-dark fw-bold my-5'>
          {window.location.pathname === '/settings'
            ? 'Settings'
            : 'Notification'}
        </h1>

        {/* settings container*/}
        <div className='settings__container'>
          <div className='settings'>
            {window.location.pathname === '/settings' && (
              <>
                <div className='settings__email--form'>
                  <label className='text-dark fs-5 fw-bold'>
                    Your email address
                  </label>
                  <div>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                </div>
                <hr />
              </>
            )}

            <div className='settings__email--notifications'>
              <p className='text-dark fs-5 fw-bold'>Email notifications</p>
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className='settings__email--notifications__item'>
                  <Form.Check type='checkbox' id='default-checkbox' checked />
                  <div>
                    <p className='fw-bold mb-1'>Auction notifications</p>
                    <p className='text-secondary'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id recusandae ipsum in tenetur inventore
                    </p>
                  </div>
                </div>
              ))}

              {/* save changes button */}
              <Button variant='dark' className='w-100 '>
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
