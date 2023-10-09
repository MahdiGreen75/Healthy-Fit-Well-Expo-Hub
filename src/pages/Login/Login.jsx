import { ImCross } from 'react-icons/im';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FormValidationContext } from "../../Providers/FormValidationProvider";

const Login = () => {
    const [validataion, setValidation] = useContext(FormValidationContext)
    const { logIn } = useContext(AuthContext);


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");

        //password validation
        if (!email) {
            setValidation("You must provide a valid email.");
            return;
        }
        if (!password) {
            setValidation("You must provide a valid password");
            return;
        }
        const sixCharacterless = /^.{1,6}$/;
        if (sixCharacterless.test(password)) {
            setValidation("Password must be above six characters.");
            return;
        }
        const oneCapitalLetter = /^[^A-Z]*$/;
        if (oneCapitalLetter.test(password)) {
            setValidation("Password must have one capital letter.");
            return;
        }
        const oneSpecialCharacter = /^[^\W_]*$/;
        if (oneSpecialCharacter.test(password)) {
            setValidation("Password must have one special letter.");
            return;
        }



        logIn(email, password)
            .then(result => {
                setValidation("");
                console.log("user login successfull", result.user)
            })
            .catch(() => {
                setValidation("Enter email and password correctly.");
            })
    }


    return (
        <>
            <div className="md:w-[30%] mx-auto p-5 bg-white border rounded-md shadow-2xl my-10 space-y-5">
                <h1 className="text-center font-semibold text-xl">Login</h1>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="email">
                            <p className="text-sx font-semibold text-gray-800">Username</p>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div className="my-5">
                        <label htmlFor="password">
                            <p className="text-sx font-semibold text-gray-800">Password</p>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm border-2" />
                        </label>
                    </div>
                    <input type="submit" value="Login" className="px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none w-full mt-5"/>
                </form>
                <p className="text-xs font-semibold text-gray-800">
                    Do not have an account? <Link to={"/register"}>
                        <span className="text-blue-400 hover:text-blue-600 active:text-blue-800 duration-300">Register</span>
                    </Link>
                </p>
                {
                    validataion &&
                    <>
                        <h1 className="flex gap-1 items-center text-red-300 font-semibold text-xs">
                            <ImCross></ImCross> <span>{validataion}</span>
                        </h1>
                    </>
                }
            </div>

        </>
    );
};

export default Login;