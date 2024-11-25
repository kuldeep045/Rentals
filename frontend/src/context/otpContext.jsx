import { createContext, useState } from "react";

export const otpContext = createContext()


export const OtpContextProvider = ({ children }) => {
    const [data, setData] = useState('');

    const value = { data, setData };

    return (
        <otpContext.Provider value={value}>
            {children}
        </otpContext.Provider>
    );
};
