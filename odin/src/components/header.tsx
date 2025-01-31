import Link from "next/link";
import { OdinLogo } from "./odin";
import { Button } from "./ui/button";
import { GithubIcon } from "./github";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { HamIcon, MenuIcon, SeparatorHorizontal } from "lucide-react";
export const Header = () => {
  return (
    <div className="flex justify-between p-4 relative z-10">
      <nav className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row gap-4">
          <Link href="/" className="pr-4">
            <OdinLogo />
          </Link>
          <Link href="/donate" passHref className="hidden lg:flex">
            <Button variant="link">Donate Us</Button>
          </Link>
          <Link href="/about" passHref className="hidden lg:flex">
            <Button variant="link">About Us</Button>
          </Link>
        </div>
        <Link
          href="https://github.com/Enhmunh-E/lifelines-2025"
          rel="noopener noreferrer"
          target="_blank"
          className="hidden lg:flex"
        >
          <Button>
            <GithubIcon />
            Contribute
          </Button>
        </Link>
        <div className=" lg:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-1 h-full">
                <SheetTitle>
                  <Link href="/" className="pr-4">
                    <OdinLogo />
                  </Link>
                </SheetTitle>
                <SheetDescription className="flex flex-col flex-1">
                  <Link href="/donate" passHref className="border-b">
                    <Button variant="link" size="lg" className="text-base">
                      Donate Us
                    </Button>
                  </Link>
                  <Link href="/about" passHref className="border-b">
                    <Button variant="link" size="lg" className="text-base">
                      About Us
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/Enhmunh-E/lifelines-2025"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-4"
                  >
                    <Button>
                      <GithubIcon />
                      Contribute
                    </Button>
                  </Link>
                  <span className="flex flex-1 items-end justify-end">
                    <span>© 2025 ODIN. All rights reserved.</span>
                  </span>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};
