const ImageUpload = (props) => {
    const ShowImageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            props.UploadImageHandler(file);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl">
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-3 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={ShowImageHandler}
                />
                <span className="text-lg font-medium text-gray-800">
                    "Click and drag to upload your image"
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;
