import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import Buttons from "../Reuseable component/Button";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
    "Book a Demo",
    "Contact Us",
  ];

  return (
    <Navbar
    onMenuOpenChange={setIsMenuOpen}
    shouldHideOnScroll
      
      className=" bg-grayscale"
    >
      <NavbarContent>
        <NavbarBrand>
          <img src="Logo.png" alt="Logo" />
        </NavbarBrand>

        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-50"
          justify="start"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5 " justify="center">
        <NavbarItem>
          <Link className="text-[#FFFFFF] font-default" href="#">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            aria-current="page"
            href="#"
            className="text-[#FFFFFF] font-default"
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-[#FFFFFF] font-default"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-[#FFFFFF] font-default"
          >
            Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <Buttons variant="primary">Book a Damo</Buttons>
        </NavbarItem>
        <NavbarItem>
          <Buttons variant="outline">Contact Us</Buttons>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu
        className="flex md:hidden bg-secbg text-gray-200"
        justify="end"
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={index}
            className={
              index === menuItems.length - 1
                ? "bg-transparent border  rounded-lg  text-center "
                : index === menuItems.length - 2
                ? "bg-primary text-gray border  rounded-lg  text-center "
                : " "
            }
          >
            <Link
              className={
                index === menuItems.length - 1
                  ? " text-gray-400"
                  : index === menuItems.length - 2
                  ? "text-gray-800"
                  : "text-gray-200"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
