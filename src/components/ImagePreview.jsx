import Loading from "./Loading";

const ImagePreview = ({ uploaded, enhanced, loading }) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-red-800 text-white py-2">
          Original Image
        </h2>

        {uploaded ? (
          <>
            <img
              src={uploaded}
              alt="Original uploaded preview"
              className="w-full h-80 object-contain bg-gray-50"
            />
            <div className="p-4 text-center">
              <a
                href={uploaded}
                download="original-image.jpg"
                className="inline-block bg-gray-800 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition"
                rel="noopener noreferrer"
              >
                Download Original
              </a>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-80 font-bold text-gray-500 bg-gray-200">
            No Image Selected
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
          Enhanced Image
        </h2>

        {loading ? (
          <Loading />
        ) : enhanced ? (
          <>
            <img
              src={enhanced}
              alt="Enhanced preview"
              className="w-full h-80 object-contain bg-gray-50"
            />
            <div className="p-4 text-center">
              <a
                href={enhanced}
                download="enhanced-image.jpg"
                className="inline-block bg-gray-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition"
                rel="noopener noreferrer"
              >
                Download Enhanced
              </a>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-80 font-bold text-gray-500 bg-gray-200">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
