import clsx from "clsx";
import PropTypes from "prop-types";

const variants = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  outline: "border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  ghost: "text-gray-300 hover:text-white",
};

export default function Button({ children, variant, className, ...props }) {
  return (
    <button
      className={clsx(
        "px-6 py-3 rounded-lg shadow-md transition duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  children: <></>,
  variant: "primary",
  className: "",
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  className: PropTypes.string,
}
