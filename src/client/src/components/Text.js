export { Text };

const Text = ({ text, isHeader, customTheme }) => {
  return (
    <>
      {isHeader ? (
        <h3 className={`font-normal font-button text-white ${customTheme}`}>
          {text}
        </h3>
      ) : (
        <p className={`font-normal font-button text-white ${customTheme}`}>
          {text}
        </p>
      )}
    </>
  );
};
