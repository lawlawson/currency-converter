const Currencies = () => {
  return (
    <>
      <div className='dropdown row'>
        <div className='col-2'>
          <img src='https://www.countryflags.io/be/flat/64.png' />
        </div>
        <button
          className='btn btn-secondary dropdown-toggle col-10 text-end'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'></button>
      </div>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
        <li>Action</li>
      </ul>
    </>
  );
};

export default Currencies;
