const BasePage = (props) => {
  const { className = "", children } = props;
  return (
    <div className='base-page'>
      <div className='base-page-container'>{children}</div>
    </div>
  );
};

export default BasePage;
