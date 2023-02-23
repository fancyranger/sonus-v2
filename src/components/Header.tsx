import Image from 'next/image';
import Icon from '@/components/Icon';

export default function Header() {
  return (
    <header className="flex items-center py-7">
      <div className="flex items-center grow px-5 py-2 ml-16 mr-10 bg-white rounded-[10px]">
        <Icon className="mr-3">search</Icon>
        <input
          type="text"
          name="search"
          className="grow bg-transparent outline-0 placeholder:text-primary placeholder:text-xs placeholder:leading-[14px] placeholder:font-bold"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center mr-16 text-sm font-poppins">
        <Icon className="mr-2">language</Icon>
        <select className="bg-transparent outline-0">
          <option>English (US)</option>
        </select>
      </div>

      <div className="flex flex-col items-end font-poppins">
        <div className="flex items-center">
          <Icon className="mr-2">profile</Icon>
          <span className="font-medium">Good Morning</span>
        </div>

        <div className="text-xs leading-[18px]">
          <span className="mr-3">04 December 2022</span>
          <span>22:45:04</span>
        </div>
      </div>
    </header>
  );
}
