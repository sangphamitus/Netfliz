const Text = ({ text, isHeader, customTheme, Href}) => {
  return (
    <>
      {isHeader ? (
        <h3 className={`font-normal ${customTheme}`}>{text}</h3>
      ) : (
        <a className={`font-normal ${customTheme}`} href={Href}>{text}</a>
      )}
    </>
  );
};

export { Text };
