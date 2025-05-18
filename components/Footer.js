export const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-10 mt-16">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-2">
        <h3 className="text-lg font-semibold">Mango Farm Company</h3>
        <p className="text-sm">
          Empowering farms. Delivering quality. Connecting Bangladesh.
        </p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
