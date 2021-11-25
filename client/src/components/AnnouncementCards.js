import Button from '@restart/ui/esm/Button';
import React from 'react'

const Heading = {
    fontFamily: "Ubuntu",
    color: "#FFFFFF",
};

const Date = {
    fontFamily: "Ubuntu",
    color: "#FFFFFF",

};
const Text = {
    fontFamily: "Ubuntu",
    color: "#FFFFFF",
    
};
const Btn = {
    backgroundColor : "#221F26"
}
const BtnText = {
    color: "#FFFFFF",
    fontFamily: "Ubuntu",
};

const AnnnouncementCards = () => {
    return (
        <div class="w-1/2 h-48 rounded-md shadow-xl flex flex-col justify-center items-center" style={{ backgroundColor: "#3C3644" }} >
            <div mt-0>
                <p class="text-xl" style={Heading}>
                    Announcement 5
                </p>
            </div>
            <div class="h-px w-52" style={{ backgroundColor: "#7D4696" }}>
            </div>
            <div class="text-base" style={Date}>
                20th Feb, 2020
            </div>
            <div class = "my-5">
                <p class="text-lg" style={Text}>
                    This is announcement number 5. The number of this announcement is 5.
                </p>
            </div>
            <button class="border-2 rounded-lg shadow-xl" style={Btn}>
                <p class="text-xl p-0.5 px-2" style={BtnText}>
                    FULL ANNOUNCEMENT
                </p>
            </button>
        </div>

    );
}
export default AnnnouncementCards;
