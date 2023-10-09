import { createContext, useState } from "react";

export const AuthLocation = createContext(null);

const UseLocation = ({children}) => {
    const [locate, setLocate] = useState("");

    return (
        <AuthLocation.Provider value={[locate, setLocate]}>
            {children}
        </AuthLocation.Provider>
    );
};

export default UseLocation;