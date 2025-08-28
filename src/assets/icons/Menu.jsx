const MenuIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M4 7L7 7M20 7L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 17H17M4 17L13 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 12H7L20 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default MenuIcon;
