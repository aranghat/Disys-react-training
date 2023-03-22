export default function useAuth(){
    function isLoggedIn(){
        return sessionStorage.getItem("token");
    }

    return [isLoggedIn]
}