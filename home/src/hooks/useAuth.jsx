import {useState, useEffect, useCallback} from "react";
import {useKeycloak} from "@react-keycloak/web";


const useAuth = () => {
    const { keycloak, initialized } = useKeycloak();

    const [user, setUser] = useState({});

    // fetch user profile
    useEffect(() => {
        if (!initialized) {
            console.log("keycloack not initialized!!!!!")
            return;
        }

        const fetchUserInfo = async () => {
            try {
                const userProfile = await keycloak.loadUserProfile();

                setUser({ ...userProfile, fullName: `${userProfile.firstName} ${userProfile.lastName}` });
            } catch (err) {
                console.log("error fetch user info!!!!!")
            }
        };

        if (keycloak.authenticated) {
            fetchUserInfo();
        }
    }, [keycloak, initialized]);

    return {
        isAuthenticated: !!keycloak.authenticated,
        initialized,
        meta: {
            keycloak,
        },
        token: keycloak.token,
        user,
        roles: keycloak.realmAccess,
        login: useCallback(() => { keycloak.login(); }, [keycloak]),
        logout: useCallback(() => { keycloak.logout(); }, [keycloak]),
        register: useCallback(() => { keycloak.register(); }, [keycloak]),
    };
};

export default useAuth;