/* eslint-disable react/prop-types */
const Model = ({ modelOpen, children, handleModel }) => {
  // Here we use Formik Library for easy use of validation and data Submitting to the database
  return (
    <>
      {modelOpen && (
        <>
          <div className="relative z-20 mt-5 rounded-md bg-white p-4">
            {children}
          </div>
          <div
            onClick={handleModel}
            className="absolute left-0 top-0 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>
  );
};

export default Model;
