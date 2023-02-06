const BasePage = (props) => {
  const { className = "", children } = props;
  return (
    <div className='bas-page'>
      <div className='container'>{children}</div>
    </div>
  );
};

export default BasePage;
