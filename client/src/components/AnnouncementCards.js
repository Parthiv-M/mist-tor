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


};

const AnnnouncementCards = () => {
    return (
        <div class="w-screen h-full rounded-md shadow-xl flex flex-col justify-center items-center" style={{ backgroundColor: "#3C3644" }} >
            <div>
                <p class="text-xl" style={Heading}>
                    Annnouncement 5
                </p>
            </div>
            <div class="h-px w-52" style={{ backgroundColor: "#7D4696" }}>
            </div>
            <div class="text-base" style={Date}>
                20th Feb, 2020
            </div>
            <div>
                <p class="text-lg" style={Text}>
                    This is announcement number 5. The number of this announcement is 5.
                </p>
            </div>
            <button class="border-2 rounded-3xl" style={Btn}>
                <p class="text-xl" style={Heading}>
                    Full Annnouncement
                </p>
            </button>
        </div>

    );
}
export default AnnnouncementCards;
