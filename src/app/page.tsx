'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const contentCategories = [
  {
    title: 'Action'
  },
  {
    title: 'Sci-Fi'
  },
  {
    title: 'Slice Of Life'
  },
  {
    title: 'Shounen'
  }
]

export default function Home() {
  return (
    <main>
      <nav>
        <div className="w-full mx-14 pt-3">
          <div className="flex flex-row gap-32">
            <h2 className="text-2xl text-black font-bold">Anime<span className="text-orange-400">Stream</span></h2>
            <NavigationMenu>
              <NavigationMenuList className="gap-5">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Main
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4">
                      {contentCategories.map((d: any) => (
                        <li>{d.title}</li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Trending
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Batch
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex w-full max-w-sm items-center space-x-3">
              <Input type="text" placeholder="Search..." className="w-full py-5 leading-tight text-sm" size={30} />
              <Button className="text-sm bg-orange-600 hover:bg-orange-700"><FaSearch className="mr-1" />Search</Button>
            </div>
          </div>
        </div>
      </nav>
      <section className="w-full mt-32 mx-14" id="hero-banner">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-justify"><span className="text-orange-400">Immerse Yourself</span> in Endless Anime Adventures: <br />Your Ultimate Streaming Destination!</h1>
            <p className="font-light text-base py-2">Get Package Only <span className="text-xl font-bold italic">Rp68.000 / Month</span></p>
            <Button className="bg-orange-600 hover:bg-orange-700">Subcribe</Button>
            <Button className="ml-3 border-orange-400" variant='outline'>Free Trial</Button>
          </div>
          <div className="">
            <Image src='/jujutsu_kaisen___render_by_gisxelle_df0cp2d.png' alt="image" width={0}
              height={0}
              sizes="100vw"
              style={{ width: '80%', height: 'auto' }}>
            </Image>
          </div>
        </div>
      </section>
      <section className="w-full mx-14 mt-10">
        <h2 className="font-bold text-xl py-3">Popular</h2>
        <div className="flex flex-row gap-5">
          <Card className="w-[200px] relative">
            <Image src='/jujutsu_kaisen___render_by_gisxelle_df0cp2d.png' alt="image" width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto' }}>
            </Image>
            <p className="absolute">Jujutsu Kaisen</p>
          </Card>
          <Card className="w-[200px] relative">
            <Image src='/jujutsu_kaisen___render_by_gisxelle_df0cp2d.png' alt="image" width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto' }}>
            </Image>
            <p className="absolute">Jujutsu Kaisen</p>
          </Card>
          <Card className="w-[200px] relative">
            <Image src='/jujutsu_kaisen___render_by_gisxelle_df0cp2d.png' alt="image" width={0}
              height={0}
              sizes="100%"
              style={{ width: '100%', height: 'auto' }}>
            </Image>
            <p className="absolute">Jujutsu Kaisen</p>
          </Card>
        </div>
      </section>
    </main>
  );
}
