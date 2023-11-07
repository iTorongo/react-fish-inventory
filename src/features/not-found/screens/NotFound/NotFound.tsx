const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600">Page Not Found</p>
        <p className="text-gray-500">
          Sorry, the page you are looking for might be in another castle.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
