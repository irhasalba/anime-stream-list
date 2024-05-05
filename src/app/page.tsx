'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch, FaCheckCircle, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { animeService } from "../../api/service/animeService";

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
  const [response, setResponse] = useState<Array<any>>([])
  const { data, error, isLoading } = animeService.getAnime({
    page: 1,
    limit: 6,
    q: 'tv'
  })

  useEffect(() => {
    if (data) {
      console.log("data", data)
      setResponse(data.data)
    }
  }, [data])

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
        <div className="flex flex-row gap-8">
          {response.map((d) => (
            <Card className="w-[200px] relative rounded-lg drop-shadow-sm">
              <Image src={d.images.jpg.image_url} alt="image" width={250}
                height={200} className="w-[250px] h-[250px]">
              </Image>
              <p className="absolute py-1">{d.title}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="w-full mx-14 mt-10">
        <h2 className="font-bold text-xl py-3">Basic Plan</h2>
        <div className="flex gap-10">
          <Card className="w-[300px] h-[max] rounded">
            <CardHeader>
              <CardTitle className="text-left text-lg font-normal">Wibu Basic</CardTitle>
              <CardDescription className="font-bold text-xl text-black">Rp68.000</CardDescription>
              <p className="text-sm font-normal text-justify">Ideal for smartphone with 720p resolution</p>
              <p className="text-sm font-bold text-orange-500">7 Days free trial</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-black relative">
                <li><FaCheckCircle className="absolute" /> <span className="ml-5">720p Resolution</span></li>
                <li> <FaCheckCircle className="absolute" /> <span className="ml-5">30 Days Plan</span> </li>
                <li><FaCheckCircle className="absolute" />  <span className="ml-5">Maximum Device 1</span></li>
              </ul>
              <Button className="mt-3 w-1/2 ">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card className="w-[300px] h-[max] rounded">
            <CardHeader>
              <CardTitle className="text-left text-lg font-normal">Wibu Entry Lavel</CardTitle>
              <CardDescription className="font-bold text-xl text-black">Rp100.000</CardDescription>
              <p className="text-sm font-normal text-justify">Ideal for smartphone and tablet with 720p resolution</p>
              <p className="text-sm font-bold text-orange-500">7 Days free trial</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-black relative">
                <li><FaCheckCircle className="absolute" /> <span className="ml-5">720p Resolution</span></li>
                <li> <FaCheckCircle className="absolute" /> <span className="ml-5">30 Days Plan</span> </li>
                <li><FaCheckCircle className="absolute" />  <span className="ml-5">Maximum Device 2</span></li>
              </ul>
              <Button className="mt-3 w-1/2 ">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card className="w-[300px] h-[max] rounded">
            <CardHeader>
              <CardTitle className="text-left text-lg font-normal">Wibu Hard</CardTitle>
              <CardDescription className="font-bold text-xl text-black">Rp150.000</CardDescription>
              <p className="text-sm font-normal text-justify">Ideal for all gadget exclude smart tv with 2K resolution</p>
              <p className="text-sm font-bold text-orange-500">7 Days free trial</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-black relative">
                <li><FaCheckCircle className="absolute" /> <span className="ml-5">2K Resolution</span></li>
                <li> <FaCheckCircle className="absolute" /> <span className="ml-5">30 Days Plan</span> </li>
                <li><FaCheckCircle className="absolute" />  <span className="ml-5">Maximum Device 5</span></li>
              </ul>
              <Button className="mt-3 w-1/2 ">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card className="w-[300px] h-[max] rounded">
            <CardHeader>
              <CardTitle className="text-left text-lg font-normal">Wibu Superior</CardTitle>
              <CardDescription className="font-bold text-xl text-black">Rp200.000</CardDescription>
              <p className="text-sm font-normal text-justify">Ideal for every device with 4K resolution</p>
              <p className="text-sm font-bold text-orange-500">7 Days free trial</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-black relative">
                <li><FaCheckCircle className="absolute" /> <span className="ml-5">4K Resolution</span></li>
                <li> <FaCheckCircle className="absolute" /> <span className="ml-5">30 Days Plan</span> </li>
                <li><FaCheckCircle className="absolute" />  <span className="ml-5">Maximum Device 10</span></li>
              </ul>
              <Button className="mt-3 w-1/2 ">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-6xl mx-14 flex justify-between items-center px-4">
          <div>
          <h2 className="text-2xl text-white font-bold">Anime<span className="text-orange-400">Stream</span></h2>
            <div className="flex text-white gap-2 py-2">
              <FaFacebook/>
              <FaTwitter/>
              <FaLinkedin/>
              <FaInstagram/>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 9l-9 6-9-6" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4L12 14.01l-3-3" />
              </svg>
            </a>
          </div>
        </div>
      </footer>


    </main>
  );
}
