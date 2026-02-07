function UserProfile() {
    return ( 
        <div className="bg-gray-100 sm:p-4 sm:max-w-xs hover:shadow-xl md:max-w-sm mx-auto my-20 rounded-lg shadow-lg md:p-8 hover:shadow-xl transition-shadow duration-300">
            <img src="https://via.placeholder.com/150" alt="User" 
            className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"/>
            <h1 className="sm:text-lg md:text-xl hover:text-blue-500 text-center text-blue-800 my-4 transition-colors duration-300">John Doe</h1>
            <p className="text-gray-600 sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>

        </div>
     );
}

export default UserProfile;