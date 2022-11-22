declare module "react-toaster-lib" {
  export const ToastContainer: React.FC;
  export const toaster: {
    addToast: (text: string, textHeader?: string, options?: object) => void;
  };
}
