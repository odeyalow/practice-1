import IIcon from '@/entities/IIcon';

const CartIcon:React.FC<IIcon> = ({ fill, size }) => {
    return (
        <svg style={{ width: size + 'px', height: size + 'px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule={fill ? "inherit" : "evenodd"} clipRule="evenodd" d="M14.3999 3.2C14.8417 2.86863 15.4685 2.95817 15.7999 3.4L18.4999 7H18.5031C20.3417 7 21.7478 8.6389 21.4682 10.4562L20.3913 17.4562C20.1661 18.9197 18.9069 20 17.4261 20H6.57366C5.09295 20 3.8337 18.9197 3.60855 17.4562L2.53162 10.4562C2.25204 8.63889 3.65808 7 5.49674 7H5.4999L8.1999 3.4C8.53127 2.95817 9.15808 2.86863 9.5999 3.2C10.0417 3.53137 10.1313 4.15817 9.7999 4.6L7.9999 7H15.9999L14.1999 4.6C13.8685 4.15817 13.9581 3.53137 14.3999 3.2ZM5.98825 9C5.99551 9.00008 6.00277 9.00008 6.01002 9H17.9898H18.0116H18.5031C19.116 9 19.5846 9.5463 19.4914 10.1521L18.4145 17.1521C18.3395 17.6399 17.9197 18 17.4261 18H6.57366C6.08009 18 5.66034 17.6399 5.58529 17.1521L4.50837 10.1521C4.41517 9.5463 4.88385 9 5.49674 9H5.98825Z" fill="currentColor"></path> </g></svg>
    );
}
 
export default CartIcon;