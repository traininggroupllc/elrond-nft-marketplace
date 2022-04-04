import React from 'react';

const Help = () => {
  return (
    <div className='my-5'>
      {/* section hero */}
      <div className='help'>
        <div className='help__hero'>
          <div className='px-4'>
            <div className='row'>
              <div className='col-md-5 mx-auto'>
                <div className='hero__inner'>
                  <form>
                    <div className='hero__inner--search__box'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-search hero__inner--search__box--icon'
                        viewBox='0 0 16 16'
                      >
                        <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                      </svg>
                      <input
                        className='form-control'
                        type='search'
                        placeholder='Search...'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* help section content */}
        <div className='container'>
          <div className='help_content mt-5 pt-5'>
            <ul className='help__content--list'>
              {Array.from({ length: 6 }).map((_, idx) => (
                <li key={idx} className='help__content--list__item'>
                  <a className='help__content--list__item--link' href='/#'>
                    <span className='item__link--title'>
                      A complete guide to becoming a Creator
                    </span>
                    <span className='item__link--desc'>
                      Everything you need to know as a creator on Foundation.
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
