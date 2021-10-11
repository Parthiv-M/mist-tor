import React from "react";

const Announcement  = () => {
    return (
        <div><div class="main-Card rounded-none sm:rounded-lg max-w-3xl">
        <div class="close-Btn px-2 py-2 sm:px-3 sm:py-4">
            <button type="button" class="close bg-#fffff px-2">
                <span class="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-x-circle">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
            </button>
        </div>
        <div class="px-10 py-9 sm:px-15 sm:py-0">
            <div class="grid-rows-1">
                <input class="Box px-3" type="text" size="30" placeholder="Announcement Name">
            </div>
            <div class="grid-rows-1">
                <textarea class="Box px-3" type="text" rows="5" cols="50" placeholder="Details..."></textarea>
            </div>
            <div class="px-10 py-6 sm:px-8 sm:py-0">
                <div>
                    <div class="px-15 py-6">

                        <span class="date px-5">Date & Time</span>
                        <span class="venue px-5">Venue</span>
                        <span class="link px-5">Link</span>
                        <div>
                            <div class="px-10 py-9 sm:px-15 sm:py-0">
                                <div class="grid-rows-1">

                                    <input class="Box1 px-3 py-1" type="text" size="10" placeholder="">
                                    <input class=" Box2 px-3 py-1" type="text" size="10" placeholder="">
                                    <input class=" Box3  px-3 py-1" type="text" size="10" placeholder="">



                                </div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div class="px-10 py-6 sm:px-8 sm:py-0">
                            <span class="Post">Poster/Post</span>
                        </div>

                        <div class="px-5 py-3 sm:px-0 sm:py-0">
                            <button class="btnUpload text-white py-1 px-1 text-l mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-upload">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                            </button>


                        </div>
                    </div>
                    <div class="grid-rows-1">
                        <button class="btnCreate text-white font-weight:900 py-2 px-6 text-l mr-4">CREATE</button>
                    </div>

                </div>
            </div>
      </div>
    )
}

export default Announcement ;
