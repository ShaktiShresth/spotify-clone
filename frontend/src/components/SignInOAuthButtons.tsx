import { useSignIn } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const SignInOAuthButtons = () => {
    const { signIn, isLoaded } = useSignIn();

    if (!isLoaded) {
        return null;
    }

    const signInWithGoogle = () => {
        signIn.authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/sso-callback",
            redirectUrlComplete: "/auth-callback",
        });
    };

    return (
        <Button onClick={signInWithGoogle} variant={"secondary"} className='w-full text-white border-zinc-200 h-11  bg-zinc-800 hover:cursor-pointer hover:bg-zinc-900 group'>
            <img src='/google.png' alt='Google' className='size-5 transition-all ease-in-out group-hover:scale-110' />
            Continue with Google
        </Button>
    );
};
export default SignInOAuthButtons;