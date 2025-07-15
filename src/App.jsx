import Home from "./components/Home";

const App = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 via-purple-300 to-red-300 py-8 px-4">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold text-blue-700 drop-shadow-md mb-3">
                  AI Photo Enhancer
                </h1>
                <p className="text-lg text-gray-900">
                    "Upload your image and let our AI enhance it instantly."
                </p>
            </div>

            <Home />

            <div className="text-sm text-gray-600 mt-6">
                Powered by @VIVEK KUMAR
            </div>
        </div>
    );
};

export default App;
