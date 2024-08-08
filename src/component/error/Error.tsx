/**
 * The component is display the error message
 * @returns - An error message
 */
const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="mx-[60px] text-5xl">404</h1>
      <h2 className="mb-[160px  text-2xl">
        Oups! La page que vous demandez n'existe pas.
      </h2>
    </div>
  );
};

export default Error;
