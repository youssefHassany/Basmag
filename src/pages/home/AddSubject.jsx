const AddSubject = ({ setFormIsVisible }) => {
  return (
    <div className=" h-44 w-64 rounded-3xl bg-white shadow-xl flex flex-col justify-center items-center gap-5">
      <p className="text-xl font-medium">Add Subject</p>
      <button
        onClick={() => setFormIsVisible(true)}
        className="px-4 py-2 bg-gray-200 font-bold text-xl rounded-full shadow"
      >
        +
      </button>
    </div>
  );
};

export default AddSubject;
