import React from 'react';
import { Button } from 'react-bootstrap';
import {
  FaDiscord,
  FaYoutube,
  FaFacebook,
  FaTwitch,
  FaTiktok,
  FaSnapchatSquare
} from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';

const Profile = () => {
  return (
    <div className='container-lg'>
      <div className='d-flex justify-content-center align-items-center flex-column'>
        <h1 className='text-dark fw-bold my-5'>Edit your profile</h1>

        {/* settings container*/}
        <div className='profile__container'>
          <div className='profile__info'>
            <form className='profile__info--form'>
              {/* details input */}
              <div className='row'>
                <div className='col-md-6'>
                  <p className='text-dark fs-5 fw-bold'>Enter your details</p>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label className='form-label fw-bold d-flex justify-content-between'>
                      <span>Name</span>
                      <span className='text-secondary fw-bold'>Optional</span>
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Name'
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label fw-bold'>
                      <span>Username</span>
                    </label>
                    <div className='input-group'>
                      <span className='input-group-text' id='basic-addon1'>
                        @
                      </span>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* email input */}
              <div className='row my-5'>
                <div className='col-md-6'>
                  <p className='text-dark fs-5 fw-bold'>
                    Receive email notifications
                  </p>
                  <p className='text-dark'>
                    Add your email address to receive notifications about your
                    activity on Foundation. This will not be shown on your
                    profile
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label className='form-label fw-bold d-flex justify-content-between'>
                      <span>Email</span>
                      <span className='text-secondary fw-bold'>Optional</span>
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                    <div
                      id='emailHelp'
                      className='form-text text-secondary fw-bold text-end'
                    >
                      Update email preferences
                    </div>
                  </div>
                </div>
              </div>

              {/* add a short bio */}
              <div className='row my-5'>
                <div className='col-md-6'>
                  <p className='text-dark fs-5 fw-bold'>Add a short Bio.</p>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <label className='form-label fw-bold d-flex justify-content-between'>
                      <span>Enter a short bio</span>
                      <span className='text-secondary fw-bold'>Optional</span>
                    </label>
                    <div className='form-floating'>
                      <textarea
                        className='form-control'
                        placeholder='Enter a short bio'
                        style={{ height: '100px' }}
                      ></textarea>
                    </div>
                    <div className='form-text text-secondary fw-bold text-end'>
                      0/200
                    </div>
                  </div>
                </div>
              </div>

              {/* upload profile image input */}
              <div className='row my-5'>
                <div className='col-md-6'>
                  <p className='text-dark fs-5 fw-bold'>
                    Upload a profile images.
                  </p>
                  <p className='text-dark'>
                    Recommended size: 1000 x 1000px. JPG, PNG, or GIF. 10MB max
                    size.
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3 file__upload--input'>
                    <label htmlFor='formFile' className='form-label'>
                      Drag and drop an image here or click to browse.
                    </label>
                    <input className='form-control' type='file' id='formFile' />
                  </div>
                </div>
              </div>

              {/* upload cover image input */}
              <div className='row my-5'>
                <div className='col-md-6'>
                  <p className='text-dark fs-5 fw-bold'>Upload a cover image</p>
                  <p className='text-dark'>
                    Recommended size: 1500 x 1500px. JPG, PNG, or GIF. 10MB max
                    size.
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='mb-3 file__upload--input'>
                    <label htmlFor='formFile' className='form-label'>
                      Drag and drop an image here or click to browse.
                    </label>
                    <input className='form-control' type='file' id='formFile' />
                  </div>
                </div>
              </div>

              {/* profile verify */}
              <div className='row my-5'>
                <div className='col-md-6'>
                  <div className='mb-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='35'
                      height='35'
                      fill='currentColor'
                      className='bi bi-patch-check-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z' />
                    </svg>
                  </div>
                  <p className='text-dark fs-5 fw-bold'>Verify your profile</p>
                  <p className='text-dark'>
                    Show the Foundation community that your profile is authentic
                  </p>
                </div>
                <div className='col-md-6'>
                  <div className='verify__btn--link'>
                    <Button variant='outline-dark'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-twitter'
                        viewBox='0 0 16 16'
                      >
                        <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                      </svg>
                      Verify via Twitter
                    </Button>
                    <Button variant='outline-dark'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-instagram'
                        viewBox='0 0 16 16'
                      >
                        <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                      </svg>
                      Verify via Instagram
                    </Button>
                  </div>
                </div>
              </div>

              {/* add link to your social media profiles */}
              <div className='my-5'>
                <p className='text-dark fs-5 fw-bold'>
                  Add Links to your <br /> social media profiles
                </p>
                <div className='my-5'>
                  {/* website */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <GrLanguage size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Website</span>
                      </div>
                      <div className='text-secondary'>https://</div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Website URL'
                      />
                    </div>
                  </div>

                  {/* discord */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaDiscord size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Discord</span>
                      </div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Include #Code'
                      />
                    </div>
                  </div>

                  {/* youtube */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaYoutube size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Youtube</span>
                      </div>
                      {/* <div className='text-secondary'>https://</div> */}
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Chanel URL'
                      />
                    </div>
                  </div>

                  {/* youtube */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaFacebook size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Facebook</span>
                      </div>
                      <div className='text-secondary'>facebook.com/</div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Facebook Username'
                      />
                    </div>
                  </div>

                  {/* youtube */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaTwitch size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Twitch</span>
                      </div>
                      <div className='text-secondary'>twitch.tv/</div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Twitch Username'
                      />
                    </div>
                  </div>

                  {/* youtube */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaTiktok size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>TikTok</span>
                      </div>
                      <div className='text-secondary'>tiktok.com/</div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='TikTok Username'
                      />
                    </div>
                  </div>

                  {/* youtube */}
                  <div className='link__input--wrap'>
                    <div className='left'>
                      <div className='d-flex align-items-center'>
                        <FaSnapchatSquare size='1.3rem' />
                        <span className='ms-2 text-dark fw-bold'>Snapchat</span>
                      </div>
                    </div>
                    <div className='right'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Snapchat Username'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* save changes button */}
            <Button variant='dark' className='w-100 mt-3'>
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
