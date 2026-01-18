const UserContext = React.createContext();

function Grandparent({userData}) {
    return (
        <UserContext.Provider value={userData}>
            <Parent />
        </UserContext.Provider>
    )
}