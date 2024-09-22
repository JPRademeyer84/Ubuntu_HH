// components/Toast.js
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastStyle={{
        zIndex: 9999, // Ensure this is higher than your modal
        backgroundColor: '#333', // Background color for the toast
        color: '#fff', // Text color
        borderRadius: '8px', // Rounded corners
      }}
      bodyStyle={{
        fontSize: '16px', // Font size for the toast message
        padding: '10px', // Padding for the body
      }}
    />
  );
};

export const showToast = (message) => {
  toast.success(message, {
    style: {
      zIndex: 9999, // Ensuring toast has a higher z-index
    },
  });
};

export default Toast;
