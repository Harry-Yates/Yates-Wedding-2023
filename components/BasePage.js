const BasePage = (props) => {
  const { children } = props;
  return (
    <div className='base-page'>
      <div className='base-page-container'>{children}</div>
    </div>
  );
};

export default BasePage;
