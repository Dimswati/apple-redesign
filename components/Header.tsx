"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
    SearchIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "@/redux/basketSlice";

type Props = {}

function Header({ }: Props) {

    const items = useSelector(selectBasketItems)

    const session = false

    return (
        // removed z-30
        <header className="sticky top-0 flex w-full items-center justify-between bg-[#E7ECEE] p-4 z-50">
            <div className="flex items-center justify-center md:w-1/5">
                <Link href="/">
                    <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
                        <Image
                            src="https://rb.gy/vsvv2o"
                            layout="fill"
                            objectFit="contain"
                            alt="apple logo"
                        />
                    </div>
                </Link>
            </div>
            <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
                <a className="headerLink">Product</a>
                <a className="headerLink">Explore</a>
                <a className="headerLink">Support</a>
                <a className="headerLink">Business</a>
            </div>
            <div className="flex items-center justify-center gap-x-4 md:w-1/5">
                <SearchIcon className="headerIcon" />
                <Link href="/checkout">
                    <div className="relative cursor-pointer">

                        {items.length > 0 && <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                            {items.length}
                        </span>}
                        <ShoppingBagIcon className="headerIcon" />
                    </div>
                </Link>

                {session ? (
                <Image
                    src={
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt=""
                    className="cursor-pointer rounded-full"
                    width={34}
                    height={34}
                />
                ): (
                <UserIcon className="headerIcon" />
                )}
            </div>
        </header>
    )
}

export default Header