import React from 'react';
import notesImage from '../assets/images/notes.png';
import doubleTickImage from '../assets/images/double-tick.png';
import plusImage from '../assets/images/plus.png';
const Header = () => {
    return (
        <div>
            <form
                class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img
                    src={notesImage}
                    class="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    class={`appearance-none w-8 h-8 bg-[url(${plusImage})] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul class="flex justify-between my-4 text-xs text-gray-500">
                <li class="flex space-x-1 cursor-pointer">
                    <img
                        class="w-4 h-4"
                        src={doubleTickImage}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li class="cursor-pointer">Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;