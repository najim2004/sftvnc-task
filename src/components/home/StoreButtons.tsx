function StoreButtons() {
  return (
    <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
      <a
        href="#app-store"
        className="inline-flex items-center gap-3 rounded-md border border-primary-200 bg-white px-4 py-3"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/be7836a7ba8df7f61b17859203677d8c3bed147a?width=44"
          alt="Apple"
          className="h-6 w-auto"
        />
        <span className="leading-tight">
          <span className="block text-xs text-gray-800">Download on the</span>
          <span className="block text-lg font-semibold text-gray-800">
            App Store
          </span>
        </span>
      </a>
      <a
        href="#google-play"
        className="inline-flex items-center gap-3 rounded-md border border-primary-200 bg-white px-4 py-3"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8e1e8383baf0284d7900b53fcced61e979204fd0?width=46"
          alt="Google Play"
          className="h-6 w-auto"
        />
        <span className="leading-tight">
          <span className="block text-xs text-gray-800">Download on the</span>
          <span className="block text-lg font-semibold text-gray-800">
            Google Play
          </span>
        </span>
      </a>
    </div>
  );
}

export default StoreButtons;