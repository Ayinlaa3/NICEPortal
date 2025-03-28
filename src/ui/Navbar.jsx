import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Button from "../components/Button";
import { ArrowDown } from "./Icons";

const Navbar = () => {
  return (
    <header className="bg-[#EBFFF1]">
      <div className="h-4 bg-linear-90 from-[#FEF303] from-0% to-[#03823B] to-100%" />
      <div className="px-43 py-4 gap-20 flex items-center">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.svg"
            draggable="false"
            alt="NICE Logo"
            className="size-33"
          />
          <h1 className="font-[Old_English_Text_MT_V2] text-(--primary) text-[40px] leading-[45px]">
            Nigerian Institution <br />
            of Civil Engineers
          </h1>
        </div>

        <div className="flex grow-1 flex-col">
          {/* row 1 */}
          <div className="flex gap-4 justify-between py-3 items-center">
            <input
              type="text"
              className="w-[526px] rounded-[10px] outline-none border-(--input) border-2 py-2 px-6 text-xl placeholder:text-(--muted)"
              placeholder="Search"
            />

            <div className="flex gap-4 items-center">
              <Button type="secondary">Login to your Portal</Button>
              <Button>Join NICE</Button>
            </div>
          </div>

          {/* row 2  */}
          <div className="flex gap-6 tect-black py-3 justify-between items-center">
            <a href="#" className="font-semibold text-xl hover:text-(--muted)">
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 font-semibold text-xl hover:text-(--muted)"
            >
              About Us <ArrowDown />
            </a>

            <Popover>
              <PopoverButton className="font-semibold text-black flex items-center gap-1 text-xl">
                Career & Development <ArrowDown />
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Insights</p>
                    <p className="text-white/50">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Automations</p>
                    <p className="text-white/50">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Reports</p>
                    <p className="text-white/50">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                    href="#"
                  >
                    <p className="font-semibold text-white">Documentation</p>
                    <p className="text-white/50">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-xl hover:text-[--link]"
            >
              Events <ArrowDown />
            </a>
            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-xl hover:text-[--link]"
            >
              News & Blogs <ArrowDown />
            </a>

            <a
              href="#"
              className="font-semibold flex items-center gap-1 text-xl hover:text-[--link]"
            >
              More <ArrowDown />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
