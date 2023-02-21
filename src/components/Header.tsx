import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center py-7">
      <div className="flex items-center grow px-5 py-2 ml-16 mr-10 bg-white rounded-lg">
        <Image src="/header/search.svg" className="mr-3 text-primary" width="18" height="18" alt="search" />
        <input
          type="text"
          name="search"
          className="grow bg-transparent outline-0 placeholder:text-primary placeholder:text-xs placeholder:leading-[14px] placeholder:font-bold"
          placeholder="Search"
        />
      </div>

      <div className="flex items-center mr-16 text-sm">
        <label>
          <Image src="/header/lang.svg" width="18" height="18" alt="lang" />
        </label>

        <select className="bg-transparent font-poppins outline-0">
          <option>English (US)</option>
          <option>English (UK)</option>
        </select>
      </div>

      <div className="flex flex-col items-end font-poppins">
        <div className="flex items-center">
          <Image src="/header/profile.svg" className="mr-2 text-primary" width="24" height="24" alt="profile" />
          <span className="font-medium">Good Morning</span>
        </div>

        <div className="text-xs leading-[18px]">
          <span className="mr-2">04 December 2022</span>
          <span>22:45:04</span>
        </div>
      </div>
    </header>
  );
}
