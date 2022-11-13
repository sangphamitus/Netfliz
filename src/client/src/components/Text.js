const Text = ({ text, isHeader, customTheme }) => {
  return (
    <>
      {isHeader ? (
        <h3 className={`font-normal ${customTheme}`}>{text}</h3>
      ) : (
        <p className={`font-normal ${customTheme}`}>{text}</p>
      )}
    </>
  );
};

export { Text };
