const Text = ({ text, isHeader, customTheme, Href, ...rest }) => {
  return (
    <>
      {isHeader ? (
        <h3 {...rest} className={`font-normal ${customTheme}`}>
          {text}
        </h3>
      ) : (
        <a {...rest} className={`font-normal ${customTheme}`} href={Href}>
          {text}
        </a>
      )}
    </>
  );
};

export { Text };
