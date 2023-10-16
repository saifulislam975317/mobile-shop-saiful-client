const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center w-4/12 mx-auto py-8">
      <h2 className="border-y-4  text-3xl">{heading}</h2>
      <p className="text-gray-400 mt-2">{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
