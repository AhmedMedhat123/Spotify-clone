import React, { useState } from "react";

const CreatePlaylist = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playlistName, setPlaylistName] = useState("My Playlist #1");

    const handleSave = () => {
        console.log("Saved Playlist Name:", playlistName);
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col h-full bg-[#121212] text-white p-8">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-32 h-32 bg-[#333] flex items-center justify-center rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="48" height="48">
                        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
                    </svg>
                </div>
                <div>
                    <h1
                        className="text-5xl font-bold cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        {playlistName}
                    </h1>
                    <p className="text-gray-400 mt-2">Playlist • shela</p>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#242424] p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Edit details</h2>
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                value={playlistName}
                                onChange={(e) => setPlaylistName(e.target.value)}
                                className="p-2 rounded-md bg-[#121212] text-white focus:outline-none"
                                placeholder="Playlist Name"
                            />
                            <textarea
                                placeholder="Add an optional description"
                                className="p-2 rounded-md bg-[#121212] text-white focus:outline-none"
                            ></textarea>
                            <button
                                onClick={handleSave}
                                className="bg-green-500 px-4 py-2 rounded-md text-white hover:bg-green-600"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-400 mt-2 text-sm hover:underline"
                            >
                                Cancel
                            </button>
                        </div>
                        <p className="text-gray-500 mt-4 text-xs">
                            By proceeding, you agree to give Spotify access to the image you choose to upload.
                            Please make sure you have the right to upload the image.
                        </p>
                    </div>
                </div>
            )}

            {/* Search Section */}
            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Let's find something for your playlist</h2>
                <input
                    type="text"
                    placeholder="Search for songs or episodes"
                    className="w-full p-3 rounded bg-[#242424] text-white focus:outline-none"
                />
            </div>
        </div>
    );
};

export default CreatePlaylist;